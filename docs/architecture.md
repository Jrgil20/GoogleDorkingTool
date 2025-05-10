# Arquitectura del Sistema

Este documento describe la arquitectura técnica de la herramienta Google Dorking Tool, incluyendo sus componentes principales, interacciones y decisiones de diseño.

## Diagrama de Arquitectura

\`\`\`
+---------------------------------------------------+
|                                                   |
|                  CLIENTE (BROWSER)                |
|                                                   |
+---------------------+---------------------------+--+
                      |                           |
                      | HTTP/HTTPS                |
                      |                           |
+---------------------v---------------------------v--+
|                                                   |
|                   NEXT.JS APP                     |
|                                                   |
|  +----------------+  +-------------------------+  |
|  |                |  |                         |  |
|  |  COMPONENTES   |  |      SERVICIOS          |  |
|  |  DE INTERFAZ   |  |                         |  |
|  |                |  |  - Gestión de Dorks     |  |
|  |  - Accordion   |  |  - Construcción de      |  |
|  |  - Cards       |  |    Consultas            |  |
|  |  - Inputs      |  |  - Búsqueda             |  |
|  |  - Buttons     |  |                         |  |
|  |                |  |                         |  |
|  +----------------+  +-------------------------+  |
|                                                   |
|  +----------------+  +-------------------------+  |
|  |                |  |                         |  |
|  |  ESTADO Y      |  |      DATOS              |  |
|  |  LÓGICA        |  |                         |  |
|  |                |  |  - JSON de Dorks        |  |
|  |  - React       |  |  - Operadores           |  |
|  |    Hooks       |  |  - Categorías           |  |
|  |  - Context     |  |                         |  |
|  |                |  |                         |  |
|  +----------------+  +-------------------------+  |
|                                                   |
+---------------------------------------------------+
\`\`\`

## Componentes Principales

### 1. Frontend (Next.js)

La aplicación está construida con Next.js, un framework de React que proporciona renderizado del lado del servidor, generación estática y otras características avanzadas.

#### Componentes de Interfaz

- **Accordion**: Organiza las categorías de dorks en secciones plegables
- **Cards**: Muestra información detallada sobre cada dork
- **Inputs**: Permite la entrada de parámetros para los operadores
- **Buttons**: Facilita acciones como copiar y ejecutar consultas

#### Estado y Lógica

- **React Hooks**: Gestiona el estado de la aplicación (useState, useEffect)
- **Context API**: Comparte datos entre componentes (opcional para futuras expansiones)

### 2. Servicios

#### Gestión de Dorks

- Carga y procesa los dorks desde archivos JSON
- Organiza los dorks por categorías
- Proporciona funciones de búsqueda y filtrado

#### Construcción de Consultas

- Combina operadores y parámetros para generar consultas válidas
- Valida la sintaxis de las consultas
- Proporciona vista previa en tiempo real

#### Búsqueda

- Redirige al usuario a Google con la consulta construida
- Gestiona la codificación adecuada de los parámetros de URL

### 3. Datos

#### JSON de Dorks

- Almacena definiciones de dorks predefinidos
- Organiza los dorks en categorías
- Incluye metadatos como descripción, riesgo y operadores utilizados

#### Operadores

- Define los operadores básicos y avanzados de Google Dorking
- Incluye información sobre sintaxis y ejemplos de uso

## Flujo de Datos

1. El usuario interactúa con la interfaz seleccionando operadores o dorks predefinidos
2. La aplicación actualiza el estado con los parámetros seleccionados
3. El servicio de construcción de consultas genera la consulta en tiempo real
4. El usuario puede copiar la consulta o ejecutarla directamente en Google
5. Si se ejecuta, el navegador abre una nueva pestaña con los resultados de Google

## Decisiones Técnicas

### Elección de Next.js

- **Rendimiento**: Ofrece renderizado del lado del servidor para carga rápida
- **SEO**: Mejora la indexación por motores de búsqueda
- **Desarrollo**: Facilita la creación de rutas y API endpoints

### Estructura Modular

- **Componentes Reutilizables**: Facilita el mantenimiento y las pruebas
- **Separación de Responsabilidades**: Divide la lógica de negocio de la interfaz de usuario
- **Escalabilidad**: Permite añadir nuevas categorías y funcionalidades fácilmente

### Almacenamiento de Datos

- **JSON Estático**: Simplifica la distribución y elimina dependencias de bases de datos
- **Estructura Jerárquica**: Organiza los dorks en categorías para facilitar la navegación
- **Metadatos Enriquecidos**: Incluye información contextual para cada dork

## Consideraciones Futuras

- **Autenticación**: Implementar sistema de usuarios para guardar consultas personalizadas
- **API Backend**: Desarrollar endpoints para gestionar dorks personalizados
- **Análisis de Resultados**: Integrar herramientas para procesar y visualizar resultados de búsquedas
- **Internacionalización**: Soporte para múltiples idiomas
