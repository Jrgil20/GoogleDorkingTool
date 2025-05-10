# Google Dorking Tool

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Una herramienta interactiva para construir, gestionar y ejecutar consultas de Google Dorking de manera segura y educativa. Diseñada para profesionales de seguridad informática, investigadores OSINT y administradores de sistemas.

![Google Dorking Tool Screenshot](/docs/images/screenshot.png)

## 🔍 ¿Qué es Google Dorking?

Google Dorking (también conocido como Google Hacking) es una técnica que utiliza operadores avanzados de búsqueda de Google para encontrar información específica que normalmente no es fácilmente accesible a través de búsquedas regulares. Esta herramienta facilita la creación y ejecución de estas consultas especializadas.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso Rápido](#uso-rápido)
- [Documentación](#documentación)
- [Consideraciones Éticas](#consideraciones-éticas)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## ✨ Características

- **Constructor de Consultas Interactivo**: Interfaz gráfica para construir consultas de Google Dorking.
- **Categorías Predefinidas**: Acceso a dorks organizados por categorías (archivos, directorios, paneles admin, OSINT).
- **Operadores Básicos y Avanzados**: Soporte para todos los operadores de Google Search.
- **Vista Previa en Tiempo Real**: Visualización inmediata de la consulta construida.
- **Ejecución Directa**: Búsqueda con un solo clic en Google.
- **Diseño Responsivo**: Funciona en dispositivos móviles y de escritorio.

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/yourusername/google-dorking-tool.git

# Navegar al directorio
cd google-dorking-tool

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 🎮 Uso Rápido

1. Selecciona operadores básicos o categorías de dorks predefinidos
2. Personaliza los parámetros según tus necesidades
3. Visualiza la consulta generada en tiempo real
4. Copia la consulta o ejecútala directamente en Google

```
+-----------------------------------------------+
|  Herramienta de Google Dorking                |
+-----------------------------------------------+
|                                               |
|  +-------------------+  +-------------------+ |
|  | Operadores        |  | Consulta          | |
|  +-------------------+  +-------------------+ |
|  | site: [example.com]  |                   | |
|  | ℹ️                |  | site:example.com  | |
|  |                   |  | filetype:pdf      | |
|  | filetype: [pdf  ] |  | "confidencial"    | |
|  | ℹ️                |  |                   | |
|  |                   |  |                   | |
|  | intitle: [      ] |  |                   | |
|  | ℹ️                |  |                   | |
|  |                   |  |                   | |
|  | inurl: [        ] |  | [Copiar] [Buscar] | |
|  | ℹ️                |  |                   | |
|  +-------------------+  +-------------------+ |
|                                               |
+-----------------------------------------------+
```

## 📚 Documentación

Para información detallada sobre la herramienta, consulta nuestra documentación:

- [Arquitectura del Sistema](/docs/architecture.md)
- [Requisitos Funcionales](/docs/functional-requirements.md)
- [Catálogo de Dorks](/docs/dorks.md)
- [API de Referencia](/docs/api.md)
- [Guía para Contribuir](/docs/contributing.md)
- [Registro de Cambios](/docs/changelog.md)

## ⚠️ Consideraciones Éticas

Esta herramienta está diseñada con fines educativos y de seguridad defensiva. El uso de Google Dorking para acceder a información no autorizada puede ser ilegal. Siempre:

- Utiliza estas técnicas solo en sistemas donde tengas autorización explícita
- Respeta la privacidad y los términos de servicio de Google y otros sitios web
- Reporta responsablemente cualquier vulnerabilidad que encuentres

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Consulta nuestra [guía para contribuir](/docs/contributing.md) para más detalles sobre:

- Proceso de pull requests
- Estándares de código
- Pruebas
- Documentación

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Desarrollado con ❤️ por v0