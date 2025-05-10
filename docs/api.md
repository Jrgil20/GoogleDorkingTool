# API de Referencia

Este documento describe la API interna de la herramienta Google Dorking Tool, incluyendo los servicios, funciones y estructuras de datos principales.

## Servicios de Dorks

### `getDorkCategories()`

Obtiene todas las categorías de dorks disponibles.

**Retorno**: `Promise<DorkCategory[]>`

**Ejemplo de uso**:
\`\`\`javascript
import { getDorkCategories } from "./lib/dork-service";

async function loadCategories() {
  try {
    const categories = await getDorkCategories();
    console.log(`Loaded ${categories.length} categories`);
  } catch (error) {
    console.error("Error loading dork categories:", error);
  }
}
\`\`\`

### `getDorkCategoryById(categoryId: string)`

Obtiene una categoría específica por su ID.

**Parámetros**:
- `categoryId`: ID único de la categoría

**Retorno**: `Promise<DorkCategory | undefined>`

**Ejemplo de uso**:
\`\`\`javascript
import { getDorkCategoryById } from "./lib/dork-service";

async function loadCategory(id) {
  const category = await getDorkCategoryById(id);
  if (category) {
    console.log(`Category: ${category.name} with ${category.dorks.length} dorks`);
  } else {
    console.log(`Category with ID ${id} not found`);
  }
}
\`\`\`

### `getDorkById(categoryId: string, dorkId: string)`

Obtiene un dork específico por su ID y categoría.

**Parámetros**:
- `categoryId`: ID de la categoría
- `dorkId`: ID del dork

**Retorno**: `Promise<Dork | undefined>`

**Ejemplo de uso**:
\`\`\`javascript
import { getDorkById } from "./lib/dork-service";

async function loadDork(categoryId, dorkId) {
  const dork = await getDorkById(categoryId, dorkId);
  if (dork) {
    console.log(`Dork: ${dork.name} - Query: ${dork.query}`);
  } else {
    console.log(`Dork not found`);
  }
}
\`\`\`

### `searchDorks(searchTerm: string)`

Busca dorks que coincidan con un término de búsqueda.

**Parámetros**:
- `searchTerm`: Término a buscar en los dorks

**Retorno**: `Promise<Dork[]>`

**Ejemplo de uso**:
\`\`\`javascript
import { searchDorks } from "./lib/dork-service";

async function search(term) {
  const results = await searchDorks(term);
  console.log(`Found ${results.length} dorks matching "${term}"`);
  results.forEach(dork => {
    console.log(`- ${dork.name}: ${dork.query}`);
  });
}
\`\`\`

## Colecciones de Dorks

### `getAllDorks()`

Obtiene todas las colecciones de dorks disponibles.

**Retorno**: `{ osint: Dork[], adminLogin: Dork[], specialized: Dork[] }`

**Ejemplo de uso**:
\`\`\`javascript
import { getAllDorks } from "./lib/dork-collections";

function displayAllDorks() {
  const allDorks = getAllDorks();
  console.log(`OSINT Dorks: ${allDorks.osint.length}`);
  console.log(`Admin Login Dorks: ${allDorks.adminLogin.length}`);
  console.log(`Specialized Dorks: ${allDorks.specialized.length}`);
}
\`\`\`

### `searchDorksByTerm(searchTerm: string)`

Busca dorks en todas las colecciones por un término específico.

**Parámetros**:
- `searchTerm`: Término a buscar

**Retorno**: `Dork[]`

**Ejemplo de uso**:
\`\`\`javascript
import { searchDorksByTerm } from "./lib/dork-collections";

function search(term) {
  const results = searchDorksByTerm(term);
  console.log(`Found ${results.length} dorks matching "${term}"`);
}
\`\`\`

## Estructuras de Datos

### `DorkOperator`

Interfaz que define un operador de Google Dorking.

\`\`\`typescript
interface DorkOperator {
  id: string;
  name: string;
  description: string;
  example: string;
  placeholder: string;
}
\`\`\`

### `Dork`

Interfaz que define un dork individual.

\`\`\`typescript
interface Dork {
  id: string;
  name: string;
  query: string;
  description: string;
  operatorsUsed: string[];
  risk: "Alto" | "Medio" | "Bajo";
}
\`\`\`

### `DorkCategory`

Interfaz que define una categoría de dorks.

\`\`\`typescript
interface DorkCategory {
  id: string;
  name: string;
  description: string;
  dorks: Dork[];
}
\`\`\`

### `DorkData`

Interfaz que define la estructura completa de datos de dorks.

\`\`\`typescript
interface DorkData {
  categories: DorkCategory[];
}
\`\`\`

## Componentes de UI

### `DorkCard`

Componente para mostrar un dork individual como una tarjeta.

**Props**:
- `dork`: Objeto Dork a mostrar
- `onUse`: Función callback cuando se hace clic en "Usar"

**Ejemplo de uso**:
\`\`\`jsx
import { DorkCard } from "./components/dork-card";

function DorkList({ dorks, onUseDork }) {
  return (
    <div className="space-y-4">
      {dorks.map((dork) => (
        <DorkCard key={dork.id} dork={dork} onUse={onUseDork} />
      ))}
    </div>
  );
}
\`\`\`

### `OperatorInput`

Componente para mostrar un campo de entrada para un operador.

**Props**:
- `operator`: Objeto DorkOperator
- `value`: Valor actual del campo
- `onChange`: Función callback cuando cambia el valor

**Ejemplo de uso**:
\`\`\`jsx
import { OperatorInput } from "./components/operator-input";

function OperatorsList({ operators, values, onChange }) {
  return (
    <div className="space-y-4">
      {operators.map((operator) => (
        <OperatorInput
          key={operator.id}
          operator={operator}
          value={values[operator.id] || ""}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
\`\`\`

## Funciones Utilitarias

### `buildQuery(operators, keywords)`

Construye una consulta de Google Dorking a partir de operadores y palabras clave.

**Parámetros**:
- `operators`: Objeto con operadores seleccionados y sus valores
- `keywords`: Palabras clave adicionales

**Retorno**: `string`

**Ejemplo de uso**:
\`\`\`javascript
function previewQuery() {
  const operators = {
    site: "example.com",
    filetype: "pdf",
  };
  const keywords = "confidential";
  
  const query = buildQuery(operators, keywords);
  console.log(`Generated query: ${query}`);
  // Output: "site:example.com filetype:pdf confidential"
}
\`\`\`

### `searchInGoogle(query)`

Abre una nueva pestaña con los resultados de búsqueda de Google para la consulta.

**Parámetros**:
- `query`: Consulta de Google Dorking

**Ejemplo de uso**:
\`\`\`javascript
function executeSearch(query) {
  if (query) {
    searchInGoogle(query);
    console.log(`Searching for: ${query}`);
  } else {
    console.log("Query is empty");
  }
}
