# Calculator rewrite — paramétrica + categorías (DS)

## Feature: landing-email-migration (follow-up)
## Rol: Dev
## Fecha: 2026-05-17

> Plan aprobado: `~/.claude/plans/ahora-quiero-que-trabajemos-generic-raven.md`
> (modo plan; opción "Reescritura completa al diseño DS").

---

## Que se hizo
Reescribimos la calculadora de `/save` siguiendo
`Uchooseit-Design-System/ui_kits/website/calculadora_viaje_mundial_uchooseit.jsx`:

- **3 selectores paramétricos** (País de salida ARG/COL/MEX · Viajeros 1-4 ·
  Duración 7/10/15/20/30 días) + un display fijo de Destino "Miami / Orlando".
- **9 categorías** con icono Lucide (`react-icons/lu`) tinte por categoría,
  chips `COMPARTIDO` (verde) / `POR PERSONA` (azul) en desktop, nota dinámica
  por modo de cálculo (`per_day`, `per_night`, `per_match`, `fixed`).
- **Cálculo derivado**: `unitAmount × timeFactor × peopleMultiplier`. El
  vuelo se ajusta por país (Argentina $800 / Colombia $400 / México $300).
- **Sidebar de ahorro**: 11% grande en `text-uc-green`, `$X USD` estimado
  dinámico, disclaimer, y `SubscribeButton` (modal HubSpot) conservado.
- **"+ Agregar gasto" preservado**: añade un `CustomItem` con
  `calc: 'fixed', type: 'shared'` (icono LuStar, azul DS), con botón ✕ para
  removerlo.
- **Animaciones**: `motion.h2` + `motion.aside` (fade + slide-up sutil).
- **Adaptado a dark surface** del DS (gradient `#0d1422→#06090f` + border
  `uc-line`), no a la versión light de la referencia.

## i18n
- 21 claves nuevas bajo `landingEmail.calculator.*` (selectores, opciones,
  chips, notas dinámicas con interpolación `{{var}}`, sidebar de ahorro y
  disclaimer). Aplicadas en los 5 JSON vía script Node con brace-matching
  (mismo patrón que MIG-2 → diff acotado al subtree `landingEmail`).
- Idiomas: ES (arg/col/mex source), EN (us), PT (bra). Best-effort en EN/PT.
- Claves existentes reusadas: `title, subtitle, percentLabel, totalLabel,
  linesLabel, addExpense, namePlaceholder, detailPlaceholder,
  amountPlaceholder, defaultSub, cancel, confirm, cta, modalTitle,
  modalSubtitle`.
- **Claves huérfanas tras el rewrite** (cleanup follow-up, no se removieron
  por ahora): `budgetLabel, pitchEyebrow, pitchTitle, pitchBody, savingsPre,
  savingsPost`. Inertes; no rompen nada, se borran cuando se valide.

## Archivos tocados
```
MODIFICADOS:
  src/features/landing-email/components/TrendCalculator.tsx  (rewrite total)
  src/features/landing-email/data.ts                          (TravelItem, DEFAULT_ITEMS, helpers)
  src/translates/{us,bra,arg,col,mex}.json                    (subtree landingEmail.calculator)
```

## Decisiones tomadas
- Iconos vía **`react-icons/lu`** (ya en deps, sin agregar `lucide-react`).
  Nombres reales: `LuGlobe` (no LuGlobe2), `LuCircleParking` (no LuParkingCircle).
- `DepartureCountry` es local de la calc (`'arg'|'col'|'mex'`), independiente
  del `CountryCode` global (el global maneja idioma + form HubSpot; la calc
  expresa "país desde el que volás", limitado a LATAM por diseño).
- Labels de categorías quedan en `data.ts` (ES, data de campaña) — coherente
  con la decisión de la migración y el plan aprobado.
- Mobile: chips de tipo (`COMPARTIDO/POR PERSONA`) ocultos (`hidden md:inline-flex`)
  para no cargar la fila; total siempre alineado a la derecha.

## Verification (auto)
- `npm run build` → exit 0. Chunk `LandingEmail` 31.14 kB (gzip 8.23 kB);
  el incremento vs antes (20.49 kB) viene de los iconos Lucide importados
  por nombre (tree-shake activo).
- `git status` confirma solo 3 archivos del scope + 5 JSON modificados.
  `landing-email-v1-backup/` intacto.

## Pendientes / QA manual del usuario
- **Navegador**: cambiar selectores y validar recalculo (vuelo varía por
  país; per_day/per_night escalan; per_match usa `getMatchCount`; `fixed`
  no cambia).
- **i18n**: probar en country `usa` (EN), `bra` (PT), `arg/col/mex` (ES).
  En DEV revisar consola por `[i18n] Missing translation key`.
- **Responsive**: 360 / 768 / 1024 / 1440. Selectores 1 col en mobile,
  4 col en desktop. Sidebar se apila al pie bajo lg.
- **EN/PT**: review nativo recomendado de las 21 claves.
- Tuning de `baseByCountry.flight` y `unitAmount` por categoría iterativo
  con cliente — todos están `// EDITABLE:` en `data.ts`.
