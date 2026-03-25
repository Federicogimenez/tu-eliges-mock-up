# TASK-01: Simplificar useAllyPopUpTrigger para disparo inmediato

## Metadata
- **Feature**: ally-popup-immediate
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

## Contexto
El hook `useAllyPopUpTrigger` actualmente usa IntersectionObserver + MutationObserver para esperar a que `#pricing-section` sea visible. Hay que reemplazar toda esa logica por un simple `setTimeout` que muestre el popup tras ~1.5s de carga.

El hook ya tiene la variable module-level `alreadyShown` que evita mostrar el popup mas de una vez por sesion — esa logica se debe mantener intacta.

La firma del hook NO cambia: recibe `enabled: boolean`, retorna `{ showPopUp, closePopUp }`.

## Archivos
```
CREAR:   (ninguno)
MODIFICAR: src/hooks/useAllyPopUpTrigger.ts
```

## Limites
- NO cambiar la firma del hook (input/output)
- NO tocar Main.tsx ni AllyPopUp.tsx
- NO eliminar la variable `alreadyShown` ni su logica de "una sola vez por sesion"
- NO agregar nuevas dependencias

## Criterio de aceptacion
- [ ] El useEffect contiene solo un setTimeout (~1.5s) que setea `showPopUp = true`
- [ ] No hay IntersectionObserver, MutationObserver, ni referencia a `pricing-section`
- [ ] El cleanup del useEffect limpia el timeout con clearTimeout
- [ ] Si `enabled` es false o `alreadyShown` es true, el timeout no se crea
- [ ] `alreadyShown` se pone en true antes de mostrar el popup
- [ ] TypeScript compila sin errores

## Notas del Arquitecto
El hook deberia quedar en ~20 lineas. Estructura esperada:

```ts
useEffect(() => {
  if (!enabled || alreadyShown) return;
  const timer = setTimeout(() => {
    alreadyShown = true;
    setShowPopUp(true);
  }, 1500);
  return () => clearTimeout(timer);
}, [enabled]);
```
