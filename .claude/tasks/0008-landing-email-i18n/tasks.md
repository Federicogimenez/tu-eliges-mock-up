# Tasks: landing-email-i18n

---

# TASK-01: Aplanar translation keys en los 5 JSONs

## Metadata
- **Feature**: landing-email-i18n
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: ninguna

## Contexto
Hoy cada JSON tiene `landingEmail.usa.*` (contenido ingles) y `landingEmail.latam.*` (contenido localizado). El objetivo es aplanar ambos niveles a `landingEmail.*`, donde cada archivo JSON tiene el contenido en su propio idioma.

La logica de migracion para cada archivo:

- **us.json**: Tomar el contenido de `landingEmail.usa.*` y subirlo a `landingEmail.*`. Eliminar `landingEmail.usa` y `landingEmail.latam`.
- **arg.json, col.json, mex.json**: Tomar el contenido de `landingEmail.latam.*` y subirlo a `landingEmail.*`. Eliminar `landingEmail.usa` y `landingEmail.latam`.
- **bra.json**: Tomar el contenido de `landingEmail.latam.*` (que ya esta en portugues) y subirlo a `landingEmail.*`. Eliminar `landingEmail.usa` y `landingEmail.latam`.

Las keys internas no cambian — solo se elimina el nivel intermedio `usa`/`latam`.

Ejemplo:
```
ANTES:  landingEmail.usa.hero.cold.headline
        landingEmail.latam.hero.cold.headline
DESPUES: landingEmail.hero.cold.headline
```

## Archivos
```
MODIFICAR:
  src/translates/us.json      — usa contenido de landingEmail.usa
  src/translates/arg.json     — usa contenido de landingEmail.latam
  src/translates/col.json     — usa contenido de landingEmail.latam
  src/translates/mex.json     — usa contenido de landingEmail.latam
  src/translates/bra.json     — usa contenido de landingEmail.latam
```

## Limites
- No cambiar ninguna otra seccion de los JSONs (layout, home, categories, etc.)
- No renombrar keys internas — solo aplanar el nivel usa/latam
- No tocar archivos fuera de `src/translates/`

## Criterio de aceptacion
- [ ] Cada JSON tiene `landingEmail.hero`, `landingEmail.insight`, `landingEmail.form`, etc. (sin nivel intermedio usa/latam)
- [ ] us.json tiene contenido en ingles
- [ ] arg.json, col.json, mex.json tienen contenido en espanol
- [ ] bra.json tiene contenido en portugues
- [ ] No quedan keys `landingEmail.usa` ni `landingEmail.latam` en ningun archivo

## Notas del Arquitecto
Verificar que no se pierda ninguna key al aplanar. Las keys completas del nivel interno son: hero (cold/warm/hot + scrollCta), insight, form, savings, howItWorks, closing.

---

# TASK-02: Eliminar prop variant de los componentes

## Metadata
- **Feature**: landing-email-i18n
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-01

## Contexto
Una vez aplanadas las keys, los componentes ya no necesitan `variant` para construir el prefijo de traduccion. Donde antes hacian `landingEmail.${variant}.hero.*`, ahora hacen `landingEmail.hero.*` y `useTranslation()` se encarga del idioma.

Cambios por componente:

1. **LandingEmail.tsx**: Eliminar `LandingEmailProps`, eliminar `variant` de props. No pasar variant a hijos.
2. **Hero.tsx**: Eliminar prop `variant`. Cambiar prefix de `landingEmail.${variant}.hero.${tempKey}` a `landingEmail.hero.${tempKey}`. Cambiar scrollCta de `landingEmail.${variant}.hero.scrollCta` a `landingEmail.hero.scrollCta`.
3. **InsightForm.tsx**: Eliminar prop `variant`. Cambiar prefixes: `landingEmail.insight` y `landingEmail.form`. No pasar variant a EmailCaptureForm.
4. **EmailCaptureForm.tsx**: Eliminar prop `variant`. Cambiar prefix a `landingEmail.form`.
5. **SavingsShowcase.tsx**: Eliminar prop `variant`. Cambiar prefix a `landingEmail`. Para brands, reemplazar la logica `variant === 'latam'` con `country !== 'usa'` usando `useCountry()`.
6. **Closing.tsx**: Eliminar prop `variant`. Cambiar prefix a `landingEmail.closing`. No pasar variant a EmailCaptureForm.
7. **VideoBackground.tsx**: Eliminar prop `variant`. Usar `useCountry()` para decidir video: `country === 'usa'` → video de home, otro → video latam.

## Archivos
```
MODIFICAR:
  src/features/landing-email/LandingEmail.tsx
  src/features/landing-email/components/Hero.tsx
  src/features/landing-email/components/InsightForm.tsx
  src/features/landing-email/components/EmailCaptureForm.tsx
  src/features/landing-email/components/SavingsShowcase.tsx
  src/features/landing-email/components/Closing.tsx
  src/features/landing-email/components/VideoBackground.tsx
```

## Limites
- No modificar la logica de `useTrafficTemp()` en Hero
- No cambiar estilos ni layout de ningun componente
- No modificar LandingFooter (no usa variant)
- No tocar Benefits.tsx

## Criterio de aceptacion
- [ ] Ningun componente en `src/features/landing-email/` tiene prop `variant`
- [ ] Ningun componente referencia keys con `.usa.` o `.latam.`
- [ ] VideoBackground usa `useCountry()` para decidir video
- [ ] SavingsShowcase usa `useCountry()` para decidir brands
- [ ] TypeScript compila sin errores

## Notas del Arquitecto
Para VideoBackground y SavingsShowcase, importar `useCountry` de `../../../hooks/useCountry`. La logica es simple: `const { country } = useCountry()` y luego `country === 'usa'` como condicion.

---

# TASK-03: Unificar Footer — eliminar LandingFooter, usar Footer global

## Metadata
- **Feature**: landing-email-i18n
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-02

## Contexto
La landing tiene su propio `LandingFooter.tsx` (logo + copyright, sin navegacion). Queremos reusar el `Footer` global pero sin la seccion de navegacion (columna "Navigate" con links a /shop, /travel, etc.).

Cambios:

1. **Footer.tsx**: Agregar prop opcional `hideNavigation?: boolean` (default `false`). Cuando es `true`, no renderizar el bloque de navegacion (lineas 90-107 del footer actual — la columna con `navigationLinks` y el link a `/product`). El resto (logo, descripcion, socials, contacto, legales, copyright) se muestra igual.
2. **Main.tsx**: Cambiar `{!isLandingEmail && <Footer />}` por `<Footer hideNavigation={isLandingEmail} />`. El Footer siempre se renderiza.
3. **LandingEmail.tsx**: Eliminar import y uso de `LandingFooter`.
4. **Eliminar** `src/features/landing-email/components/LandingFooter.tsx`.

## Archivos
```
MODIFICAR:
  src/shared/layout/Footer.tsx           — agregar prop hideNavigation
  src/shared/layout/Main.tsx             — Footer siempre visible, pasar hideNavigation
  src/features/landing-email/LandingEmail.tsx — eliminar LandingFooter

ELIMINAR:
  src/features/landing-email/components/LandingFooter.tsx
```

## Limites
- No cambiar estilos del Footer
- No agregar ni quitar columnas mas alla de Navigate
- No tocar la logica de isLandingEmail en useRouteConfig (sigue siendo necesaria para el header)

## Criterio de aceptacion
- [ ] Footer global se muestra en `/save` sin la columna de navegacion
- [ ] Footer en otras paginas sigue mostrando navegacion normalmente
- [ ] LandingFooter.tsx no existe
- [ ] LandingEmail.tsx no importa LandingFooter
- [ ] TypeScript compila sin errores

## Notas del Arquitecto
El Footer actualmente tiene 4 columnas en grid: Logo/Descripcion, Navigate, Contact, Legal. Con `hideNavigation=true`, el grid pasa a 3 columnas efectivas. El grid de Tailwind (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`) se ajusta automaticamente porque simplemente no se renderiza la columna. Considerar cambiar a `lg:grid-cols-3` cuando `hideNavigation` es true, o dejar que el grid se adapte solo.

---

# TASK-04: Unificar rutas — eliminar /ahorra

## Metadata
- **Feature**: landing-email-i18n
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-03

## Contexto
Con variant eliminado, solo queda una ruta. Cambios:

1. **AppRoutes.tsx**: Mantener `/save` con `<LandingEmail />` (sin props). Eliminar la ruta `/ahorra`.
2. **routes.ts**: Eliminar `/ahorra` de `NO_FAQS_PAGES` y `LANDING_EMAIL_PAGES`.

## Archivos
```
MODIFICAR:
  src/routes/AppRoutes.tsx
  src/shared/routes.ts
```

## Limites
- No cambiar ninguna otra ruta
- No modificar imports ni lazy loading de otros componentes

## Criterio de aceptacion
- [ ] Ruta `/save` renderiza `<LandingEmail />` sin props
- [ ] Ruta `/ahorra` no existe en AppRoutes ni en routes.ts
- [ ] `LANDING_EMAIL_PAGES` solo contiene `/save`
- [ ] `NO_FAQS_PAGES` no contiene `/ahorra`
- [ ] Build de TypeScript sin errores
- [ ] El resto de rutas no se ve afectado

## Notas del Arquitecto
Considerar si conviene agregar un redirect de `/ahorra` a `/save` para no romper links existentes. Evaluar con el usuario.

---

# TASK-05: Verificacion integral

## Metadata
- **Feature**: landing-email-i18n
- **Rol**: Feature Dev
- **Estado**: pendiente
- **Dependencias**: TASK-04

## Contexto
Verificacion final de que todo el sistema funciona correctamente.

## Archivos
```
MODIFICAR: ninguno (solo verificacion)
```

## Limites
- No hacer cambios a menos que se encuentren bugs

## Criterio de aceptacion
- [ ] `npm run build` compila sin errores
- [ ] `/save` con country=usa muestra contenido en ingles, video de home, Benefits en ingles
- [ ] `/save` con country=arg muestra contenido en espanol, video latam, Benefits en espanol
- [ ] `/save` con country=bra muestra contenido en portugues, video latam
- [ ] No quedan referencias a `variant` en ningun archivo de landing-email
- [ ] No quedan keys `landingEmail.usa` ni `landingEmail.latam` en ningun JSON
- [ ] LandingFooter.tsx no existe
- [ ] Footer global se muestra en `/save` sin navegacion

---

*Creado por: Arquitecto*
*Fecha: 2026-04-07*
