# opportunities: Seccion "1 Million+ Opportunities"

## Feature: business
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/opportunities.md` — el nombre del archivo coincide con el id de la tarea en tasks.md

---

## Que se hizo
Se creo `OpportunitiesSection.tsx` como seccion min-h-screen transparente sobre el video fijo, con overlay gradiente oscuro (`from-black/60 via-black/50 to-black`) para legibilidad. Lado izquierdo: texto "1 Million+ Opportunities" con "near to your" en azul y "Audience" en verde. Lado derecho: mockup de celular con aspect-ratio 9/18.5, border-8 zinc-800, rounded-[3rem], status bar simulada (hora, iconos signal/wifi/battery), imagen `Mobile_Deals-Map.webp`, y search bar overlay con icono MdSearch. Caption "More than 500k downloads" debajo.

## Archivos tocados
```
CREADOS:   src/features/business/components/OpportunitiesSection.tsx
NUEVO ASSET: public/Mobile_Deals-Map.webp
```

## Decisiones tomadas
- El mockup del celular se construyo con CSS puro (border, border-radius, aspect-ratio) en vez de usar una imagen de frame de celular. Esto permite responsive nativo y evita dependencia de assets adicionales.
- La status bar es puramente decorativa con iconos de react-icons para dar realismo al mockup.
- El overlay gradiente es absoluto (z-0) con el contenido en z-10, permitiendo que el video fijo se vea a traves pero con legibilidad del texto.

## Pendientes o notas
- Ninguno.
