# main-cleanup: Simplificar Main.tsx como orquestador

## Feature: refactorize
## Rol: Feature Dev
## Fecha: 2026-02-17

> Archivo: `doc/main-cleanup.md`

---

## Que se hizo
Se redujo Main.tsx de ~406 lineas a ~72 lineas. El archivo paso de ser un monolito con routing, video, hero content, ally popup y footer inline a un orquestador limpio que importa componentes especializados (`HeroVideo`, `HeroOverlay`, `AllyPopUp`) y delega la logica de rutas a `useRouteConfig`. Solo quedo 1 `useState` (allyPopUp visibility).

## Archivos tocados
```
MODIFICADOS: src/shared/layout/Main.tsx
```

## Decisiones tomadas
- Main monta `HeroVideo` condicionalmente cuando `isHeroPage` (incluye `/business`)
- Main monta `HeroOverlay` cuando `showHeroContent` (heroPage pero NO businessPage)
- `AllyPopUp` se monta con `visible` + `onClose` desde el unico useState restante
- `SavingsModalProvider` envuelve todo el contenido dentro de Main
- El orden de montaje garantiza el z-index correcto: video → overlay → contenido → popup

## Pendientes o notas
- Ninguno
