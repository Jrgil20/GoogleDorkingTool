/**
 * Definición de operadores básicos de Google Dorking
 * Cada operador incluye su identificador, nombre, descripción, ejemplo y placeholder
 */
export interface DorkOperator {
  id: string
  name: string
  description: string
  example: string
  placeholder: string
}

/**
 * Objeto que contiene todos los operadores básicos de Google Dorking
 * Exportado para ser reutilizado en diferentes partes de la aplicación
 */
export const basicOperators: Record<string, DorkOperator> = {
  site: {
    id: "site",
    name: "site:",
    description: "Limita los resultados a un dominio específico",
    example: "site:example.com vulnerabilidad",
    placeholder: "dominio.com",
  },
  filetype: {
    id: "filetype",
    name: "filetype:",
    description: "Busca archivos de un tipo específico",
    example: 'filetype:pdf "información confidencial"',
    placeholder: "pdf, doc, xls, etc.",
  },
  intitle: {
    id: "intitle",
    name: "intitle:",
    description: "Busca páginas con palabras específicas en el título",
    example: 'intitle:index.of "contraseñas"',
    placeholder: "término en el título",
  },
  inurl: {
    id: "inurl",
    name: "inurl:",
    description: "Busca páginas con palabras específicas en la URL",
    example: "inurl:admin inurl:login",
    placeholder: "término en la URL",
  },
  intext: {
    id: "intext",
    name: "intext:",
    description: "Busca páginas con palabras específicas en el texto",
    example: 'intext:"información privada"',
    placeholder: "término en el texto",
  },
  cache: {
    id: "cache",
    name: "cache:",
    description: "Muestra la versión en caché de una página web",
    example: "cache:example.com",
    placeholder: "dominio.com",
  },
  ext: {
    id: "ext",
    name: "ext:",
    description: "Similar a filetype, busca por extensión de archivo",
    example: "ext:sql intext:password",
    placeholder: "sql, log, bak, etc.",
  },
}

/**
 * Lista de todos los operadores básicos para uso en componentes
 */
export const dorkingOperators = Object.values(basicOperators)
