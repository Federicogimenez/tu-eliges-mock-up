# Brief — <NNNN-slug>

> Lo escribe el **Architect** antes de tocar código. Es la raíz: si esto no está claro, no se implementa todavía.

## Peso
`liviana` | `completa` — **liviana** salta secciones: llená solo *El problema*, *El enfoque elegido*, *Scope de archivos* y *Criterio de éxito*. **Completa** llena todo. (El Leader calibra su gate según esto.)

## El problema
<¿Qué dolor o fricción existe? ¿Qué proceso se quiere agilizar?>

## La raíz
<¿Por qué existe ese problema? El problema de fondo, no el síntoma.>

## La necesidad de esta etapa
<¿Qué necesita el proyecto resolver *ahora*? No lo que necesitará después.>

## El enfoque elegido
<La solución propuesta, en términos de cómo responde a la necesidad de arriba.>

## La skill del Dev (el enfoque)
<Qué enfoque carga el Dev para esta task (`implement`, `test`, una instalada, o uno nuevo a definir). La skill es solo el enfoque; la instrucción condensada + punteros se la pasás en el handoff al delegar.>

## Vínculo externo
> Solo si esta task toca o cambia un contrato con un sistema externo (backend `api.tueliges.us`, Recurly, HubSpot, analytics, proyectos hermanos de `tu-eliges/`) o el lenguaje visual. Si no, "ninguno".
- **Contrato afectado:** <cuál y en qué dirección (este sitio expone/consume)>
- **Registro:** <qué debe quedar actualizado en `contracts/business.md` o `contracts/design-system.md`>
- **Coordinación:** <si el otro lado (backend, mailing…) necesita un cambio, quién lo hace y cuándo>

## Scope de archivos
> Las fronteras que el Dev respeta. Lo no listado en CREAR/MODIFICAR es NO TOCAR por defecto.
```
CREAR:
  <archivos nuevos>
MODIFICAR:
  <archivos existentes que se pueden tocar>
NO TOCAR:
  <archivos sensibles fuera del scope, si hace falta nombrarlos>
```

## Alternativas descartadas
<Qué otros caminos se consideraron y por qué no. (Esto es lo que el Leader evalúa para juzgar coherencia.)>

## Tecnología / investigación
<Hallazgos relevantes del estado actual de la tecnología, si la decisión dependió de ello.>

## Criterio de éxito
<¿Cómo sabemos que esta task resolvió la necesidad? Concreto y verificable.>
