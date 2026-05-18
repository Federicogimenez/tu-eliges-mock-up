# Teardown — Landing LATAM (maqueta desechable)

> La maqueta `/save-latam` es **autocontenida**. Esta es la lista exacta para
> **eliminarla** o **promoverla** a la landing oficial.

## Estado de archivos (al cierre de la feature)

```
CREADOS (borrables en bloque):
  src/features/landing-latam/                       ← carpeta completa
    LandingLatam.tsx
    data.ts
    components/VideoBackgroundLatam.tsx
    components/HeroCapture.tsx
    components/EmailCapturePill.tsx
    components/CommunityCarousel.tsx
    components/PersonVideoCarousel.tsx
    components/TrendCalculator.tsx
    components/ChoosyClosing.tsx
    components/ModalShell.tsx            (shell de modal reutilizable)
    components/SubscribeModal.tsx        (modal de suscripción — DS)
    components/SubscribeButton.tsx       (botón pill que abre el modal)

MODIFICADOS (3 archivos, cambios aditivos a revertir):
  src/routes/AppRoutes.tsx   → línea 25 (lazy import) + línea 50 (<Route path="/save-latam">)
  src/shared/routes.ts       → '/save-latam' en NO_FAQS_PAGES (línea 19) y en LANDING_EMAIL_PAGES (línea 24)
  src/index.css              → bloque tokens uc-* (desde línea ~38) + bloque utilities uc-* (desde línea ~175)
```

`src/features/landing-email/**` quedó **100% intacto** (verificado: `git status
--porcelain src/features/landing-email/` vacío).

## Para ELIMINAR la maqueta

1. Borrar la carpeta completa:
   ```
   rm -rf src/features/landing-latam
   ```
2. En `src/routes/AppRoutes.tsx`: borrar la línea
   `const LandingLatam = lazy( () => import('../features/landing-latam/LandingLatam') )`
   y la línea `<Route path="/save-latam" element={<LandingLatam />} />`.
3. En `src/shared/routes.ts`: quitar `'/save-latam'` de `NO_FAQS_PAGES` y de
   `LANDING_EMAIL_PAGES`.
4. (Opcional) En `src/index.css`: revertir los 2 bloques marcados
   `feature landing-latam` (tokens `--color-uc-*` / `--uc-*` y utilities
   `.hl`/`.uc-eyebrow`/`.uc-display`/`.uc-lead`/`.uc-micro`). Son aditivos y
   sin prefijo colisionante; dejarlos no rompe nada, pero quitarlos deja el
   repo idéntico al estado previo.
5. `npm run build` para confirmar que compila sin la maqueta.
6. Borrar `.claude/features/landing-latam/` si la feature se da por cerrada.

## Para PROMOVER a la landing oficial (`/save`)

Esta maqueta es sólo LATAM, con copys hardcoded y email capture **mock**.
Promoverla NO es copiar archivos: implica reintroducir lo que se excluyó del
scope a propósito (ver `brief.md` → Excluido):

1. Migrar el contenido/estructura de cada componente a
   `src/features/landing-email/` integrando el sistema **i18n** real
   (`src/translates/*.json`, `useTranslation`, `useCountry`).
2. Reemplazar `EmailCapturePill` (mock) por la integración **HubSpot** real
   (`HubSpotForm` con `FORM_IDS` por país, como `landing-email`).
3. Reemplazar los videos `.webm` stub por los assets reales por persona y
   confirmar los montos canónicos de la calculadora (`data.ts` → `// EDITABLE:`).
4. Decidir el destino real del CTA (Recurly/checkout) en lugar del
   `scrollTo` mock.
5. Una vez `/save` adopte el nuevo diseño, ejecutar el bloque "Para ELIMINAR
   la maqueta" de arriba.

---

*Rol: Dev · Fecha: 2026-05-17*
