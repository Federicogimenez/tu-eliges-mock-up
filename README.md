# UChooseIt – Red privada de descuentos ilimitados

## Descripción del proyecto

UChooseIt es una membresía digital dirigida a jóvenes adultos (20-30 años) que viven en EE.UU. y desean ahorrar en productos y servicios cotidianos. Por solo 48 USD anuales, acceden a descuentos exclusivos de hasta el 50% en miles de marcas reconocidas.

### Propuesta de valor
- Descuentos de hasta el 50%
- Ahorro estimado de hasta $2,000 USD al año
- Miles de marcas top en EE.UU.
- Uso ilimitado de los descuentos
- Funciona para toda la familia
- App integrada para redimir desde el mapa y explorar beneficios locales

### Categorías principales
- 🛍️ **Shop**: Ropa, electrodomésticos, zapatillas, tecnología
- 🍽️ **Dining**: Comida rápida y restaurantes
- ✈️ **Travel**: Hoteles, vuelos y renta de autos
- 🎭 **Entertainment**: Parques temáticos, conciertos, deportes

## Stack Tecnológico

- **Framework:** React 19.1
- **Lenguaje:** TypeScript
- **Routing:** React Router DOM
- **State & Context:** React Context API
- **HTTP Queries:** Axios
- **Estilos:** Tailwind CSS (temas claro y oscuro)
- **Animaciones:** Framer Motion (Scroll / InView)
- **Internacionalización:** Global State switcher (en/es)
- **Slider:** keen-slider
- **Build tool:** Vite
- **Métricas:** Google Analytics

## Patrón de Diseño

El proyecto está organizado de forma modular para escalar fácilmente:

```
src/
├── assets/          # Imágenes, logos e íconos
├── components/      # Componentes reutilizables globales
├── hooks/           # Hooks personalizados (tema, idioma, discount code)
├── context/         # Contextos globales (afiliados, idioma, tema)
├── features/        # Cada landing con lógica y vistas encapsuladas
├── languages/       # Archivos de texto por idioma (en.json, es.json)
├── lib/             # Funciones auxiliares (API calls)
├── routes/          # Definición de rutas
├── styles/          # Configuración de Tailwind y estilos base
└── types/           # Interfaces TypeScript
```

## Modelo de Adquisición

100% basado en afiliados. Los usuarios llegan a través de links con códigos en la URL:
```
uchooseit.us?code=stv20
```

El código sirve para:
- Brindar descuento exclusivo en la membresía
- Personalizar la sección de pricing
- Mostrar beneficios exclusivos por referido
- Persistir durante la navegación

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## Características Técnicas

- **Mobile-first**: Diseño responsivo optimizado para móviles
- **Internacionalización**: Soporte para inglés y español
- **Temas**: Modo claro y oscuro
- **Sistema de afiliados**: Códigos de descuento personalizados
- **Animaciones**: Transiciones fluidas con Framer Motion
- **Performance**: Optimizado con Vite y React 19
