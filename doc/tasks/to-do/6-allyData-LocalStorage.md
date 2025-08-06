# Plan de Implementación - AllyContext LocalStorage

## Objetivo
Modificar el AllyContext para:
1. Si existe código en la URL: hacer consulta fetchAllyData y actualizar LocalStorage
2. Si no existe código en la URL: buscar en LocalStorage y hacer consulta si existe
3. Si no existe en ningún lado: no hacer nada

## Análisis del código actual

El archivo `src/context/AllyContext.tsx` tiene una función `extractCodeFromURL` (líneas 32-56) que actualmente:
- Extrae el parámetro `code` de la URL
- Si existe `codeParam`, hace fetch de datos
- **No maneja el caso cuando no hay código en la URL**

## Cambios específicos requeridos

### 1. Agregar localStorage.setItem cuando hay código en URL
**Ubicación**: Después de la línea 37 (`setCode(codeParam);`)
**Código a agregar**:
```typescript
localStorage.setItem('ally-code', codeParam);
```

### 2. Modificar el condicional para agregar else
**Ubicación**: Línea 55
**Cambio**: Cambiar `}` por `} else {`

### 3. Agregar lógica del else para consultar LocalStorage
**Ubicación**: Después de la línea 55
**Código a agregar**:
```typescript
// Buscar código en LocalStorage
const storedCode = localStorage.getItem('ally-code');
if (storedCode) {
  setCode(storedCode);
  // Marcar como loading mientras se hace la consulta
  setAllyData(prev => ({ ...prev, isLoading: true }));
  
  // Hacer la consulta a la API con el código almacenado
  fetchAllyData(storedCode)
    .then((data) => {
      setAllyData(data);
    })
    .catch((error) => {
      console.error('Error loading ally data:', error);
      setAllyData(prev => ({ 
        ...prev, 
        isLoading: false, 
        userNotFound: true,
        alliedCuponCode: storedCode
      }));
    });
}
// Si no existe código en LocalStorage, no hacer nada (return implícito)
```

## Código completo de la función modificada

```typescript
const extractCodeFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const codeParam = urlParams.get('code');
  
  if (codeParam) {
    setCode(codeParam);
    // Actualizar LocalStorage con el nuevo código
    localStorage.setItem('ally-code', codeParam);
    // Marcar como loading mientras se hace la consulta
    setAllyData(prev => ({ ...prev, isLoading: true }));
    
    // Hacer la consulta a la API
    fetchAllyData(codeParam)
      .then((data) => {
        setAllyData(data);
      })
      .catch((error) => {
        console.error('Error loading ally data:', error);
        setAllyData(prev => ({ 
          ...prev, 
          isLoading: false, 
          userNotFound: true,
          alliedCuponCode: codeParam
        }));
      });
  } else {
    // Buscar código en LocalStorage
    const storedCode = localStorage.getItem('ally-code');
    if (storedCode) {
      setCode(storedCode);
      // Marcar como loading mientras se hace la consulta
      setAllyData(prev => ({ ...prev, isLoading: true }));
      
      // Hacer la consulta a la API con el código almacenado
      fetchAllyData(storedCode)
        .then((data) => {
          setAllyData(data);
        })
        .catch((error) => {
          console.error('Error loading ally data:', error);
          setAllyData(prev => ({ 
            ...prev, 
            isLoading: false, 
            userNotFound: true,
            alliedCuponCode: storedCode
          }));
        });
    }
    // Si no existe código en LocalStorage, no hacer nada
  }
};
```

## Flujo de ejecución

1. **Código en URL existe** → Guardar en LocalStorage + fetchAllyData
2. **Código en URL no existe** → Buscar en LocalStorage
   - **Existe en LocalStorage** → fetchAllyData con código almacenado
   - **No existe en LocalStorage** → No hacer nada

## Próximos pasos

1. Cambiar al modo Code para implementar estos cambios
2. Aplicar las modificaciones específicas al archivo AllyContext.tsx
3. Probar la funcionalidad para verificar que funciona correctamente