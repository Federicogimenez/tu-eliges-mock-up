# Product Overview

## Nombre del producto
UChooseIt – Red privada de descuentos ilimitados

## Descripción breve
Una membresía digital dirigida a jóvenes adultos (20-30 años) que viven en EE.UU. y desean ahorrar en productos y servicios cotidianos. Por solo 48 USD anuales, acceden a descuentos exclusivos de hasta el 50% en miles de marcas reconocidas.

---

## Usuario objetivo
- Personas de 20 a 30 años, con o sin familia, que buscan ahorrar en su consumo diario y marcas top.
- Interesados en entretenimiento, viajes, compras, comida, y eventos.
- Sensibles a eventos estacionales como back to school, vacaciones, navidad, etc.

---

## Propuesta de valor
- Descuentos de hasta el 50%
- Ahorro estimado de hasta $2,000 USD al año
- Miles de marcas top en EE.UU.
- Uso ilimitado de los descuentos
- Funciona para toda la familia
- App integrada para redimir desde el mapa y explorar beneficios locales

### Pitch en menos de 10 segundos
**"Ahorra hasta un 50% en tus compras. Hazte miembro de esta red privada de descuentos para ahorrar como nunca antes. Paga $48 al año y ahorra más de $2,000 con tus gastos cotidianos. Miles de marcas adheridas, miles de beneficios en la app."**

---

## Categorías del producto

### 🛍️ Shop
Ahorros en ropa, electrodomésticos, zapatillas, tecnología (Apple, Samsung, Dell, Amazon, Costco, Calvin Klein, Forever 21)

### 🍽️ Dining
Descuentos en comida rápida y restaurantes (Burger King, Domino’s, Papa John’s, Subway, Hard Rock Café)

### ✈️ Travel
Ofertas en hoteles, vuelos y renta de autos (Toyota, Ford, agencias asociadas)

### 🎭 Entertainment
Ahorros en parques temáticos, conciertos, deportes y plataformas de entretenimiento (Disney, Universal, eventos)

---

## Modelo de adquisición
100% basado en afiliados.  
Los usuarios llegan a través de links con códigos en la URL, por ejemplo:  
`uchooseit.us?code=stv20`
Este codigo sirve para brindar un descuento exclusivo en la compra de la membresia

### Lógica de referidos:
- Se extrae el código mediante hook de contexto (`useRefCodeContext`) en React.
- Se hace una consulta a la API interna con ese código.
- Se obtienen los siguientes datos:
  - Porcentaje de descuento
  - Precio final de la membresía
  - Nombre del afiliado
  - Logo del afiliado
- Estos datos se usan para:
  - Personalizar sección de pricing
  - Aplicar el descuento al botón CTA
  - Mostrar beneficios exclusivos por ese referido
- El código debe persistir en la navegación.
- El botón de compra debe redirigir a Recurly incluyendo el código como parámetro en el URL.

---

## Pages del sitio

### 🔗 Landing Pages
1. **Home**  
   - Accesible a todo público  
   - Incluye navegación general  
   - Hero con propuesta de valor y presentacion de las 4 categorias
   - Seccion Top Brands
   - Seccion Categorias
   - Seccion Beneficios
   - Seccion Pricing
   - Seccion Gateway a product page
   - Footer

2. **Landing de categoría**  
   - Página clave para adquisición vía afiliados  
   - Contiene:  
     - Hero con productos relevantes por categoría  
     - Hero trendy contextualizado por tendencia  
     - Sección de Benefits
     - Pricing personalizado por referido
     - FAQs contextualizados por la categoria

3. **Product Page**  
   - Página de refuerzo de decisión  
   - Resuelve dudas y detalla beneficios  
   - Induce a comprar
   - Contiene:  
       - Seccion Testimonials  
       - Seccion How to  
       - Seccion Calculadora  
       - Seccion Pricing + descuento de afiliado si es que tiene  
       - FAQs generales


---

## Sistema de métricas y seguimiento

Se requiere implementación de un sistema de analítica:

- Contar visitas por código de referido
- Tiempo de permanencia en el sitio
- Mapa de calor y clics en botones clave
- Eventos específicos como clic en CTA o interacción con el hero

---

## Compra y pasarela de pago

- El botón de compra redirige directamente a la pasarela **Recurly**
- Si hay código en la URL, se pasa como query param para aplicar el descuento
- El usuario completa el pago colocando su email y creando una contraseña directamente allí
- No se necesita validación de email previa

---

## Consideraciones técnicas

- Implementar hook persistente para código de referido, el idioma y el tema
