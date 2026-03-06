# Tasks: AllyPopUp Pricing Trigger

---

# TASK-1: Agregar id a PricingSection

## Metadata
- **Feature**: ally-popup-pricing-trigger
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

## Contexto
PricingSection necesita un `id` en su `<section>` raiz para que el IntersectionObserver pueda encontrarlo desde Main.tsx. El id debe ser estatico y predecible.

## Archivos
```
MODIFICAR: src/shared/layout/PricingSection.tsx
```

## Que hacer
- Agregar `id="pricing-section"` al `<section>` raiz (linea 51)

## Limites
- NO cambiar ningun otro atributo, estilo o logica de PricingSection
- Es un cambio de una sola linea

## Criterio de aceptacion
- [ ] El `<section>` raiz de PricingSection tiene `id="pricing-section"`
- [ ] No hay cambios funcionales ni visuales en PricingSection

---

# TASK-2: Crear hook useAllyPopUpTrigger

## Metadata
- **Feature**: ally-popup-pricing-trigger
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-1

## Contexto
Se necesita un hook que encapsule toda la logica de cuando mostrar el AllyPopUp:
1. Observar cuando el 50% de `#pricing-section` es visible en viewport (IntersectionObserver con threshold 0.5)
2. Solo disparar si `sessionStorage` no tiene la clave `ally-popup-shown`
3. Cuando se dispara, marcar `ally-popup-shown` en sessionStorage
4. Exponer estado para que Main.tsx controle visibilidad

## Archivos
```
CREAR: src/hooks/useAllyPopUpTrigger.ts
```

## Que hacer
Crear el hook con esta firma:

```ts
useAllyPopUpTrigger(enabled: boolean): { showPopUp: boolean; closePopUp: () => void }
```

- `enabled`: condicion externa (ej: `allyData.hasCoupon && showHeroContent`). Si es `false`, el observer no se activa.
- `showPopUp`: `true` cuando el observer detecta 50% visible Y no se ha mostrado en esta sesion
- `closePopUp`: funcion que pone `showPopUp` a `false` y escribe `sessionStorage`

Logica interna:
1. `useState(false)` para `showPopUp`
2. `useEffect` que:
   - Si `!enabled`, no hace nada
   - Chequea `sessionStorage.getItem('ally-popup-shown')` — si existe, no hace nada
   - Busca `document.getElementById('pricing-section')` — si no existe, no hace nada
   - Crea `IntersectionObserver` con `{ threshold: 0.5 }`
   - Cuando intersecta: `setShowPopUp(true)`, `sessionStorage.setItem('ally-popup-shown', 'true')`, `observer.disconnect()`
   - Cleanup: `observer.disconnect()`
3. `closePopUp`: simplemente `setShowPopUp(false)` (sessionStorage ya se escribio al triggear)

## Limites
- NO importar useAllyContext ni useRouteConfig — el hook recibe `enabled` como parametro
- NO usar refs pasadas por prop — usar `document.getElementById` (PricingSection no necesita saber del observer)
- NO crear observers si sessionStorage ya tiene la clave

## Criterio de aceptacion
- [ ] Hook exportado como default desde `src/hooks/useAllyPopUpTrigger.ts`
- [ ] Solo observa si `enabled === true` y sessionStorage no tiene `ally-popup-shown`
- [ ] Detecta 50% de visibilidad de `#pricing-section`
- [ ] Escribe sessionStorage al disparar
- [ ] Se desconecta del observer despues de disparar
- [ ] Cleanup en el return del useEffect

## Notas del Arquitecto
Se usa `document.getElementById` en lugar de ref porque PricingSection se renderiza dentro de `{children}` en Main.tsx, no como hijo directo. Pasar un ref desde Main.tsx a PricingSection requeriria threading props a traves de las feature pages, lo cual es invasivo y fuera de scope.

El `threshold: 0.5` significa que el 50% del elemento debe estar visible. Si PricingSection es muy alta y nunca llega al 50% en viewport, considerar bajar a `0.3`. Pero para la mayoria de pantallas el 50% deberia funcionar.

---

# TASK-3: Integrar trigger en Main.tsx y agregar fade-in a AllyPopUp

## Metadata
- **Feature**: ally-popup-pricing-trigger
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-1, TASK-2

## Contexto
Main.tsx actualmente usa `useState(true)` para mostrar el AllyPopUp inmediatamente. Hay que reemplazar esa logica por `useAllyPopUpTrigger`. Ademas, AllyPopUp necesita animacion de fade-in con Framer Motion.

## Archivos
```
MODIFICAR: src/shared/layout/Main.tsx
MODIFICAR: src/shared/components/AllyPopUp.tsx
```

## Que hacer

### Main.tsx
1. Eliminar `const [allyPopUp, setAllyPopUp] = useState(true)`
2. Importar `useAllyPopUpTrigger` de `../../hooks/useAllyPopUpTrigger`
3. Llamar al hook: `const { showPopUp, closePopUp } = useAllyPopUpTrigger(allyData.hasCoupon && showHeroContent)`
4. Cambiar el prop `visible` de AllyPopUp: `visible={showPopUp}`
5. Cambiar el prop `onClose`: `onClose={closePopUp}`
6. Mover `<AllyPopUp>` fuera de la seccion hero — ponerlo justo antes de `</div>` del wrapper principal (antes de cerrar `</SavingsModalProvider>`). Razon: el popup ya es `position: fixed`, y conceptualmente ya no esta ligado al hero sino a PricingSection scroll.

### AllyPopUp.tsx
1. Importar `{ motion, AnimatePresence }` de `framer-motion`
2. Envolver el return en `<AnimatePresence>` (fuera del condicional)
3. El div raiz (`fixed z-[10000]...`) cambiarlo a `<motion.div>` con:
   - `initial={{ opacity: 0 }}`
   - `animate={{ opacity: 1 }}`
   - `exit={{ opacity: 0 }}`
   - `transition={{ duration: 0.4 }}`
4. Cambiar el patron de `if (!visible) return null` a renderizado condicional dentro de AnimatePresence:
   ```tsx
   <AnimatePresence>
     {visible && (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="fixed z-[10000] ..."
       >
         ...contenido existente...
       </motion.div>
     )}
   </AnimatePresence>
   ```

## Limites
- NO cambiar el contenido interno del AllyPopUp (textos, precios, botones, estados loading/notFound)
- NO cambiar estilos del AllyPopUp mas alla de hacer el div raiz `motion.div`
- NO eliminar la condicion `allyData.hasCoupon` — ahora se pasa como parte de `enabled` al hook
- NO modificar ningun otro componente del layout

## Criterio de aceptacion
- [ ] `useState(true)` de allyPopUp eliminado de Main.tsx
- [ ] `useAllyPopUpTrigger` importado y usado correctamente
- [ ] AllyPopUp movido fuera de la seccion hero en Main.tsx
- [ ] AllyPopUp usa `<AnimatePresence>` + `<motion.div>` para fade-in/out
- [ ] El popup NO aparece al cargar la pagina
- [ ] El popup aparece con fade-in al scrollear al 50% de PricingSection
- [ ] Cerrar el popup lo oculta con fade-out
- [ ] Recargar la pagina en la misma sesion NO muestra el popup de nuevo
- [ ] Build de TypeScript compila sin errores

## Notas del Arquitecto
El `useState` de `allyPopUp` en Main.tsx se elimina completamente — toda la logica de visibilidad ahora vive en `useAllyPopUpTrigger`. El hook ya maneja sessionStorage internamente, asi que `closePopUp` solo necesita hacer `setShowPopUp(false)`.

Al mover AllyPopUp fuera de la seccion hero, queda mas limpio conceptualmente: el popup es un overlay global, no parte del hero. Su `position: fixed` ya lo hacia funcionar asi visualmente.

---

*Creado por: Arquitecto*
*Fecha: 2026-03-06*
