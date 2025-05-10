# Registro de Cambios (Changelog)

Todas las modificaciones notables a este proyecto serán documentadas en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2023-05-10

### Añadido
- Interfaz inicial con diseño responsivo
- Implementación de operadores básicos de Google Dorking
- Categorías de dorks predefinidos:
  - Dorks para Archivos Específicos
  - Dorks para Directorios Expuestos
  - Dorks para Paneles de Administración y Login
  - Dorks de OSINT y Otros Usos
  - Dorks Especializados
- Funcionalidad para copiar consultas al portapapeles
- Funcionalidad para ejecutar consultas directamente en Google
- Vista previa en tiempo real de consultas
- Documentación completa del proyecto

### Características Técnicas
- Implementación con Next.js y React
- Estructura modular para facilitar extensiones
- Componentes reutilizables para la interfaz de usuario
- Sistema de carga dinámica de dorks desde archivos JSON
- Servicios para gestionar y buscar dorks

## [0.2.0] - 2023-04-15

### Añadido
- Prototipo inicial de la interfaz de usuario
- Implementación básica de operadores de Google Dorking
- Sistema de construcción de consultas
- Estructura de datos para dorks predefinidos

### Cambiado
- Mejora en la organización del código
- Refinamiento de la interfaz de usuario

### Corregido
- Problemas de renderizado en diferentes navegadores
- Errores en la construcción de consultas complejas

## [0.1.0] - 2023-03-20

### Añadido
- Concepto inicial del proyecto
- Investigación sobre operadores de Google Dorking
- Documentación preliminar
- Configuración básica del entorno de desarrollo

---

## Guía de Versionado

Utilizamos [SemVer](https://semver.org/) para el versionado. Para las versiones disponibles, consulta las [etiquetas en este repositorio](https://github.com/yourusername/google-dorking-tool/tags).

### Formato de Versión

- **MAJOR**: Cambios incompatibles con versiones anteriores
- **MINOR**: Funcionalidades añadidas de manera compatible
- **PATCH**: Correcciones de errores compatibles

### Etiquetas Pre-release

Para versiones en desarrollo, utilizamos etiquetas adicionales:
- **alpha**: Versiones muy tempranas, posiblemente inestables
- **beta**: Versiones para pruebas, más estables que alpha
- **rc**: Candidatos a release, casi listos para producción

Ejemplo: `1.0.0-beta.1`
