# Pattern Design

El proyecto está organizado de forma modular para escalar fácilmente:

- `/assets`: imágenes, logos e íconos
- `/components`: componentes reutilizables globales (UI, layout, interactivos)
- `/hooks`: hooks personalizados para usar contextos (tema visual, idioma y discount code afiliate) y otras funcionalidades como sizeWindow
- `/context`: contextos globales para afiliados, idioma y tema visual
- `/features`: cada landing tiene su propia carpeta con lógica y vistas encapsuladas
- `/languages`: archivos de texto por idioma (`en.json`, `es.json`)
- `/lib`: funciones auxiliares como fetch a la API de afiliados
- `/routes`: definición de rutas si se usa React Router
- `/styles`: configuración de Tailwind y estilos base
- `/types`: definición de interfaces TypeScript

---