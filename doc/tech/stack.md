# Tech Stack

Este proyecto es una aplicación web mobile-first frontend que utiliza un stack moderno y esta enfocado en brindar rendimiento, modularidad, escalabilidad, interactividad para el usuario, internacionalizacion y personalización visual (temas claro y oscuro). Ademas cuenta con soporte para afiliados que personaliza la vista del usuario si la url trae un query param llamado code, ejemplo: "uchooseit.us?code=stv20". De esta manera leemos el codigo y realizamos dos acciones, lo pegamos al final de cada cta de compra que redirecciona a una pasarela de pagos externa y hacemos una consulta api de tipo GET para obtener los datos del afiliado y dejarlos a disposicion de la vista de manera persistente a la navegacion.

---

- **Framework:** React Latest version: 19.1 
- **Lenguaje:** TypeScript
- **Routing:** React Router DOM
- **State & Context** React Context API
- **Internationalization** Global state - json switch context
- **HTTP Queries** Comunicación asincrónica con APIs externas con AXIOS
- **Estilos:** Tailwind CSS (temas claro y oscuro)
- **Framer Motion** Animaciones fluidas e interactivas (Scroll / InView)
- **Internationalization** Global State switcher: (en/es)
- **Temas** Claro y oscuro (tailwindcss) - global state
- **Build tool:** Vite
- **Metrics** Google Analytics
- **Slider library** keen-slider https://keen-slider.io/docs#usage-in-react
---

## 🔍 Pendientes / A considerar

- Tooling para testing de interfaces (ej: Testing Library, Cypress)
- Análisis de bundle final con `vite-plugin-inspect` o `webpack-bundle-analyzer`

---