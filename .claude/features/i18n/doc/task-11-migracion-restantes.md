# TASK-11: Migracion — Product, Activate, ThankYou + Shared components

## Feature: i18n
## Rol: Feature Dev
## Fecha: 2026-03-13

---

## Que se hizo
Se migraron las paginas restantes (product, activate, thank-you) y los componentes compartidos con texto user-facing. AllyPopUp usa interpolacion dinamica para el nombre del influencer. HamburgerMenu tiene nav labels desde el JSON. ButtonPrimary resuelve defaults via `t()` en el cuerpo del componente.

## Archivos tocados
```
MODIFICADOS:
  src/features/product/components/HeroProductPage.tsx
  src/features/product/components/HowActivateSection.tsx
  src/features/product/components/HowSection.tsx
  src/features/product/components/TestimonialSection.tsx
  src/features/activate/Activate.tsx
  src/features/thankyou/ThankYou.tsx
  src/shared/components/AllyPopUp.tsx
  src/shared/components/ButtonPrimary.tsx
  src/shared/components/HamburgerMenu.tsx
  src/shared/components/SavingsCalculator/SavingsModal.tsx
  src/shared/components/SavingsCalculator/CalculateSavingButton.tsx
```

## Decisiones tomadas
- AllyPopUp: interpolacion con `t('components.allyPopUp.joinCommunity', { name: influencerName })`
- ButtonPrimary: props `text_1`/`text_2` siguen siendo opcionales, pero los defaults se resuelven con `t()` dentro del componente (no en los parametros, porque hooks no pueden usarse ahi)
- HamburgerMenu: menuItems construidos con `t('components.hamburgerMenu.home')` etc.
- Interface de ButtonPrimary no cambio (text_1, text_2 siguen como props opcionales)

## Pendientes o notas
- Ninguno
