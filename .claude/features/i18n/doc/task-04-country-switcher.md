# TASK-04: CountrySwitcher component

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se creo el componente CountrySwitcher con dropdown animado (Framer Motion) que muestra flag + codigo del pais activo. Se integro en el header del HamburgerMenu junto al ThemeSwitcher. Soporta dark/light mode y cierre al clickear fuera.

## Archivos tocados
```
CREADOS:
  src/shared/components/CountrySwitcher.tsx
MODIFICADOS:
  src/shared/components/HamburgerMenu.tsx  — import + render de CountrySwitcher en header
```

## Decisiones tomadas
- Animacion con Framer Motion: opacity 0→1, y -4→0, duracion 0.15s (sutil y rapida)
- Muestra codigo de 3 chars (ENG, POR, etc.) junto al emoji flag para compacidad
- Click outside usa event listener en document para cerrar dropdown
- Layout del header equilibrado: CountrySwitcher a la izquierda, ThemeSwitcher a la derecha

## Pendientes o notas
- Ninguno
