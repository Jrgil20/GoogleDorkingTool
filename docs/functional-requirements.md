# Requisitos Funcionales y No Funcionales

Este documento detalla los requisitos funcionales y no funcionales de la herramienta Google Dorking Tool.

## Requisitos Funcionales

### 1. Gestión de Operadores

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RF1.1 | El sistema debe permitir seleccionar operadores básicos de Google Dorking (site, filetype, inurl, intitle, intext) | Alta |
| RF1.2 | El sistema debe mostrar información detallada sobre cada operador al pasar el cursor sobre él | Media |
| RF1.3 | El sistema debe permitir ingresar valores para cada operador seleccionado | Alta |
| RF1.4 | El sistema debe permitir combinar múltiples operadores en una sola consulta | Alta |

### 2. Gestión de Dorks Predefinidos

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RF2.1 | El sistema debe organizar los dorks predefinidos en categorías (archivos, directorios, admin, OSINT, especializados) | Alta |
| RF2.2 | El sistema debe mostrar información detallada sobre cada dork (descripción, riesgo, operadores utilizados) | Alta |
| RF2.3 | El sistema debe permitir aplicar un dork predefinido con un solo clic | Alta |
| RF2.4 | El sistema debe permitir buscar dorks por palabras clave | Media |

### 3. Construcción de Consultas

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RF3.1 | El sistema debe construir automáticamente la consulta basada en los operadores seleccionados | Alta |
| RF3.2 | El sistema debe mostrar una vista previa en tiempo real de la consulta construida | Alta |
| RF3.3 | El sistema debe permitir añadir palabras clave adicionales a la consulta | Media |
| RF3.4 | El sistema debe validar la sintaxis de la consulta construida | Media |

### 4. Ejecución de Consultas

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RF4.1 | El sistema debe permitir copiar la consulta al portapapeles | Alta |
| RF4.2 | El sistema debe permitir ejecutar la consulta directamente en Google | Alta |
| RF4.3 | El sistema debe codificar correctamente los parámetros de URL para la búsqueda | Alta |
| RF4.4 | El sistema debe abrir los resultados de búsqueda en una nueva pestaña | Media |

### 5. Interfaz de Usuario

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RF5.1 | El sistema debe proporcionar una interfaz intuitiva con secciones claramente definidas | Alta |
| RF5.2 | El sistema debe ser responsivo y funcionar en dispositivos móviles y de escritorio | Alta |
| RF5.3 | El sistema debe proporcionar retroalimentación visual sobre las acciones del usuario | Media |
| RF5.4 | El sistema debe incluir una sección de información educativa sobre Google Dorking | Media |

## Requisitos No Funcionales

### 1. Rendimiento

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RNF1.1 | El sistema debe cargar completamente en menos de 3 segundos en conexiones estándar | Alta |
| RNF1.2 | El sistema debe actualizar la vista previa de la consulta en tiempo real sin retrasos perceptibles | Alta |
| RNF1.3 | El sistema debe manejar eficientemente grandes conjuntos de dorks predefinidos | Media |

### 2. Seguridad

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RNF2.1 | El sistema debe incluir advertencias sobre el uso ético de Google Dorking | Alta |
| RNF2.2 | El sistema no debe almacenar ni registrar las consultas ejecutadas por los usuarios | Alta |
| RNF2.3 | El sistema debe implementar protección contra inyección de código en los campos de entrada | Media |

### 3. Usabilidad

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RNF3.1 | El sistema debe ser utilizable sin capacitación previa para usuarios con conocimientos básicos de búsqueda en Internet | Alta |
| RNF3.2 | El sistema debe proporcionar información contextual y ejemplos para cada operador y dork | Alta |
| RNF3.3 | El sistema debe seguir principios de diseño accesible (WCAG 2.1) | Media |

### 4. Mantenibilidad

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RNF4.1 | El sistema debe seguir una arquitectura modular que facilite la adición de nuevas categorías de dorks | Alta |
| RNF4.2 | El sistema debe estar bien documentado, incluyendo comentarios en el código y documentación técnica | Alta |
| RNF4.3 | El sistema debe seguir estándares de codificación consistentes | Media |

### 5. Compatibilidad

| ID | Requisito | Prioridad |
|----|-----------|-----------|
| RNF5.1 | El sistema debe funcionar en los navegadores modernos (Chrome, Firefox, Safari, Edge) | Alta |
| RNF5.2 | El sistema debe ser compatible con las últimas dos versiones principales de cada navegador | Media |
| RNF5.3 | El sistema debe degradarse elegantemente en navegadores más antiguos | Baja |

## Matriz de Trazabilidad

| Requisito | Componente del Sistema | Prueba Asociada |
|-----------|------------------------|-----------------|
| RF1.1 | Componente de Operadores Básicos | Test de selección de operadores |
| RF2.1 | Componente de Categorías de Dorks | Test de navegación por categorías |
| RF3.1 | Servicio de Construcción de Consultas | Test de generación de consultas |
| RF4.2 | Componente de Ejecución de Búsqueda | Test de redirección a Google |
| RNF1.1 | Aplicación completa | Test de rendimiento de carga |
| RNF2.1 | Componente de Información | Revisión de contenido |
