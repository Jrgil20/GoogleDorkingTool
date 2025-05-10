# Guía para Contribuir

¡Gracias por tu interés en contribuir a Google Dorking Tool! Esta guía te ayudará a entender el proceso de contribución y los estándares que seguimos en este proyecto.

## Índice

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
- [Estilo de Código](#estilo-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Solicitar Funcionalidades](#solicitar-funcionalidades)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Código de Conducta

Este proyecto y todos sus participantes están regidos por nuestro [Código de Conducta](CODE_OF_CONDUCT.md). Al participar, se espera que respetes este código. Por favor, reporta comportamientos inaceptables a [email@example.com](mailto:email@example.com).

## Cómo Contribuir

Hay muchas formas de contribuir a Google Dorking Tool:

1. **Reportar bugs**: Si encuentras un error, por favor crea un issue detallado.
2. **Sugerir mejoras**: Las ideas para nuevas funcionalidades son siempre bienvenidas.
3. **Mejorar la documentación**: Ayúdanos a mantener la documentación clara, completa y actualizada.
4. **Contribuir con código**: Implementa nuevas funcionalidades o corrige bugs existentes.
5. **Añadir nuevos dorks**: Expande nuestra base de datos de dorks con nuevos ejemplos útiles.

## Configuración del Entorno de Desarrollo

Para configurar el entorno de desarrollo:

\`\`\`bash
# Clonar el repositorio
git clone https://github.com/yourusername/google-dorking-tool.git

# Navegar al directorio
cd google-dorking-tool

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
\`\`\`

El servidor de desarrollo estará disponible en `http://localhost:3000`.

## Estilo de Código

Seguimos un conjunto de reglas de estilo para mantener el código consistente:

### JavaScript/TypeScript

- Usamos TypeScript para todo el código nuevo
- Seguimos las reglas de ESLint configuradas en el proyecto
- Utilizamos Prettier para el formato del código

### Convenciones de Nomenclatura

- **Archivos**: Utilizamos kebab-case para nombres de archivos (ej. `dork-service.ts`)
- **Componentes React**: Utilizamos PascalCase para componentes (ej. `DorkCard.tsx`)
- **Funciones y variables**: Utilizamos camelCase (ej. `getDorkById`)
- **Interfaces y tipos**: Utilizamos PascalCase (ej. `DorkCategory`)
- **Constantes**: Utilizamos UPPER_SNAKE_CASE para constantes globales

### Estructura de Componentes

Para componentes React, seguimos esta estructura:

\`\`\`tsx
// Imports
import { useState } from "react";
import { ComponentProps } from "./types";

// Definición de tipos/interfaces (si no están en un archivo separado)
interface Props {
  // ...
}

// Componente
export function MyComponent({ prop1, prop2 }: Props) {
  // Estado y hooks
  const [state, setState] = useState(initialState);
  
  // Funciones auxiliares
  const handleEvent = () => {
    // ...
  };
  
  // Renderizado
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
\`\`\`

## Proceso de Pull Request

1. **Fork el repositorio** y crea una rama desde `main`
2. **Nombra tu rama** de forma descriptiva (ej. `feature/add-new-dorks` o `fix/search-functionality`)
3. **Implementa tus cambios** siguiendo las guías de estilo
4. **Escribe tests** para nuevas funcionalidades o bugs corregidos
5. **Actualiza la documentación** si es necesario
6. **Asegúrate de que los tests pasan** ejecutando `npm test`
7. **Crea un Pull Request** con una descripción clara de los cambios

### Plantilla de Pull Request

\`\`\`markdown
## Descripción
[Descripción clara y concisa de los cambios]

## Tipo de Cambio
- [ ] Nueva funcionalidad
- [ ] Corrección de bug
- [ ] Mejora de rendimiento
- [ ] Refactorización de código
- [ ] Actualización de documentación
- [ ] Otro (especificar)

## ¿Cómo se ha probado?
[Describe las pruebas que has realizado]

## Capturas de pantalla (si aplica)
[Añade capturas de pantalla aquí]

## Checklist
- [ ] Mi código sigue las guías de estilo del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código, especialmente en áreas complejas
- [ ] He actualizado la documentación correspondiente
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He añadido tests que prueban que mi corrección es efectiva o que mi funcionalidad trabaja
- [ ] Los tests unitarios nuevos y existentes pasan localmente con mis cambios
\`\`\`

## Reportar Bugs

Al reportar un bug, por favor incluye:

- **Título claro y descriptivo**
- **Pasos detallados para reproducir el problema**
- **Comportamiento esperado y comportamiento actual**
- **Capturas de pantalla** si es posible
- **Información del entorno** (navegador, sistema operativo, etc.)
- **Contexto adicional** que pueda ser relevante

## Solicitar Funcionalidades

Para solicitar una nueva funcionalidad:

- **Describe claramente la funcionalidad** que te gustaría ver
- **Explica por qué sería útil** para el proyecto y sus usuarios
- **Proporciona ejemplos** de cómo funcionaría
- **Considera si la funcionalidad podría tener implicaciones éticas o de seguridad**

## Estructura del Proyecto

\`\`\`
google-dorking-tool/
├── app/                  # Código principal de la aplicación Next.js
│   ├── components/       # Componentes React reutilizables
│   ├── data/             # Datos estáticos (JSON)
│   ├── lib/              # Utilidades y servicios
│   ├── page.tsx          # Página principal
│   └── layout.tsx        # Layout principal
├── docs/                 # Documentación
├── public/               # Archivos estáticos
├── styles/               # Estilos globales
├── tests/                # Tests
├── .eslintrc.js          # Configuración de ESLint
├── .prettierrc           # Configuración de Prettier
├── next.config.js        # Configuración de Next.js
├── package.json          # Dependencias y scripts
├── README.md             # Documentación principal
└── tsconfig.json         # Configuración de TypeScript
\`\`\`

### Directorios Clave

- **`app/components/`**: Componentes React reutilizables
- **`app/data/`**: Archivos JSON con dorks predefinidos
- **`app/lib/`**: Servicios y utilidades para manejar dorks y consultas
- **`docs/`**: Documentación detallada del proyecto

## Añadir Nuevos Dorks

Para añadir nuevos dorks al proyecto:

1. Identifica la categoría adecuada en `app/data/dorks.json`
2. Añade un nuevo objeto siguiendo la estructura existente:

\`\`\`json
{
  "id": "unique_id",
  "name": "Nombre descriptivo",
  "query": "consulta de google dorking",
  "description": "Descripción detallada de lo que busca",
  "operatorsUsed": ["operador1", "operador2"],
  "risk": "Alto|Medio|Bajo"
}
\`\`\`

3. Asegúrate de que el ID sea único dentro de su categoría
4. Verifica que la consulta funciona correctamente en Google
5. Actualiza la documentación en `docs/dorks.md` si es necesario

---

¡Gracias por contribuir a Google Dorking Tool! Tu ayuda es fundamental para mejorar esta herramienta y hacerla más útil para la comunidad.
