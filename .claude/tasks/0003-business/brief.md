# Feature: B2B Landing Page (/business)

## Estado: ACTIVA
## Prioridad: P0
## Rol asignado: Feature Dev

---

## Objetivo
Crear una landing page B2B alineada con el sitio, orientada a agendar reuniones con potenciales aliados (empresarios, asociaciones, non-profits, influencers) y presentar el modelo de negocio win-win de Uchooseit. Convierte visitantes B2B en llamadas de estrategia via Google Calendar.

## Alcance

### Incluido
- Hero con video de fondo fijo (reutiliza el patron de Main.tsx)
- Seccion de audiencia objetivo (4 cards: Companies+Customers, Companies+Employees, Nonprofits, Associations)
- Dos modelos de partnership: RSM (Revenue Sharing) y Bulk (Enterprise Access)
- Seccion "1 Million+ Opportunities" con mockup de celular y mapa de deals
- Showcase de marcas por categoria con Keen Slider + savings calculator inline
- Seccion "How It Works" en 4 pasos
- CTA final con tarjeta de llamada de estrategia
- Integracion Google Calendar via window.open()
- WaveSeparator como transicion visual entre secciones

### Excluido
- Backend propio para booking (se usa Google Calendar Appointment Schedules)
- SavingsSection como componente standalone (quedo comentado, la funcionalidad se integro inline en BrandsShowcase)
- Variantes de WaveSeparator (ellipse/diagonal) — solo se implemento la variante sine-wave

## Estado actual del codigo
Feature completa e integrada. 10 archivos en `src/features/business/`. Ruta registrada, arrays de Main.tsx configurados, enlace en HamburgerMenu activo.

## Archivos permitidos (scope)
```
CREAR:
  src/features/business/Business.tsx
  src/features/business/components/HeroSection.tsx
  src/features/business/components/AudienceCards.tsx
  src/features/business/components/PartnershipModels.tsx
  src/features/business/components/BookCallButton.tsx
  src/features/business/components/OpportunitiesSection.tsx
  src/features/business/components/BrandsShowcase.tsx
  src/features/business/components/SavingsSection.tsx
  src/features/business/components/HowItWorks.tsx
  src/features/business/components/StrategyCallCTA.tsx
  src/features/business/components/WaveSeparator.tsx
  public/Mobile_Deals-Map.webp

MODIFICAR:
  src/routes/AppRoutes.tsx                        (lazy import + Route)
  src/shared/layout/Main.tsx                      (heroPages, noFaqsPages, darkBgPages, businessPage flag)
  src/shared/components/HamburgerMenu.tsx          (nav link)
  src/context/SavingsCalculatorModalContext.tsx     (hideMembershipCost option)
  src/shared/components/SavingsCalculator/SavingsModal.tsx (hideMembershipCost prop)

NO TOCAR:
  src/features/home/
  src/features/shop/ | travel/ | dining/ | entertainment/
  src/shared/layout/Footer.tsx
  src/shared/layout/HeroTrendy.tsx
```

## Dependencias
- Video hero existente en Main.tsx (patron position:fixed)
- SavingsModalProvider con soporte para `hideMembershipCost`
- Google Material Icons (CDN ya integrado)
- Keen Slider (ya instalado)
- react-icons (MdSell, MdWork, MdPayments, etc.)
- Imagen `Mobile_Deals-Map.webp` en public/

## Criterios de aceptacion
1. Ruta `/business` renderiza correctamente sin errores de consola
2. Video de fondo fijo visible, contenido scrollea por encima
3. Hero del Main suprimido (solo video), sin FAQs, logo blanco forzado
4. 4 audience cards visibles con iconos y colores correctos
5. 2 modelos de partnership (RSM purple, Bulk blue) con CTA de booking
6. Mockup de celular con mapa de deals funcional
7. Brand showcase con pills de categoria + Keen Slider de logos
8. Calculate Savings abre modal sin mostrar costo de membresia
9. HowItWorks muestra 4 pasos con circulos numerados
10. Boton "Schedule a Strategy Call" abre Google Calendar en nueva ventana
11. Responsive: mobile, tablet, desktop
12. Dark mode consistente
13. WaveSeparators visibles en todos los breakpoints
14. Tema claro (light mode) funcional — la pagina responde al toggle de tema como el resto del sitio
15. Colores B2B centralizados como CSS variables en `@theme`

## Estructura de la feature
```
features/business/
  brief.md      → este archivo
  tasks.md      → backlog de tareas (todas completadas)
  doc/                → registro de tareas completadas
    setup-ruta.md
    hero-video.md
    audience-cards.md
    partnership-models.md
    opportunities.md
    brands-savings.md
    how-it-works.md
    strategy-cta.md
  design/             → mockups y HTML de referencia (provisto por el usuario)
```

---

*Creado por: Arquitecto*
*Fecha: 2026-02-17*
