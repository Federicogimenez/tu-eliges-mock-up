# Tasks — Landing Email Migration

> Ejecutadas en sesión (seguimiento en TodoWrite). Estado: COMPLETADA.

---

# MIG-1: Brief de migración — ✅ completada
Brief en `.claude/features/landing-email-migration/brief.md`.

# MIG-2: i18n landingEmail.* en los 5 JSON — ✅ completada
Subtree `landingEmail` reescrito (hero/community/calculator/choosy/modal),
plano (sin cold/warm/hot). `us`=EN, `bra`=PT, `arg/col/mex`=ES. Reemplazo por
brace-matching (resto del archivo intacto) + `JSON.parse` de validación.

# MIG-3: Componentes landing-email i18n — ✅ completada
Set nuevo en `src/features/landing-email/components/`: Hero, Community,
PersonVideoCarousel, TrendCalculator, ChoosyClosing, SubscribeModal,
SubscribeButton, ModalShell. Copy vía `t`/`tHtml`. Reusa HubSpotForm y
VideoBackground (country-aware) existentes. `data.ts` migrado.

# MIG-4: LandingEmail.tsx orquestador — ✅ completada
`VideoBackground` + Hero → Community → TrendCalculator → ChoosyClosing.

# MIG-5: Eliminar maqueta — ✅ completada
Quitada ruta `/save-latam` (AppRoutes), `'/save-latam'` de `NO_FAQS_PAGES` y
`LANDING_EMAIL_PAGES`. Carpeta `src/features/landing-latam/` eliminada.

# MIG-6: Limpieza componentes viejos — ✅ completada
Eliminados Hero(viejo)/InsightForm/SavingsShowcase/Closing/EmailCaptureForm.
Sin referencias colgantes. Respaldo intacto en `landing-email-v1-backup/`.

# MIG-7: Build + QA + docs — ✅ completada
`npm run build` verde, sin errores TS. Docs en `doc/`.

---

*Creado por: Arquitecto · Ejecutado por: Dev · Fecha: 2026-05-17*
