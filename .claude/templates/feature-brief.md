# Feature: [NOMBRE]

## Estado: [PENDIENTE | ACTIVA | COMPLETADA | BLOQUEADA]
## Prioridad: [P0 | P1 | P2]
## Rol asignado: [Feature Dev | otro]

---

## Objetivo
[Que problema resuelve esta feature y por que es necesaria. 2-3 lineas max.]

## Alcance

### Incluido
- [Que SI se va a hacer]

### Excluido
- [Que NO se va a hacer y por que]

## Estado actual del codigo
[Que existe hoy. Archivos relevantes, estado de cada uno, dependencias.]

## Archivos permitidos (scope)
```
CREAR:
  [archivos nuevos]

MODIFICAR:
  [archivos existentes que se pueden tocar]

NO TOCAR:
  [archivos fuera del scope]
```

## Dependencias
- [Otras features o tareas que deben estar completas antes]

## Criterios de aceptacion
1. [Criterio verificable 1]
2. [Criterio verificable 2]
3. [...]

## Estructura de la feature
```
features/{nombre}/
  brief.md      → este archivo
  tasks.md      → backlog de tareas
  doc/                → registro de tareas completadas (usar templates/task-doc.md)
    {task-titulo}.md  → una entrada por tarea ejecutada, nombrada por su titulo
```

---

*Creado por: Arquitecto*
*Fecha: [YYYY-MM-DD]*
