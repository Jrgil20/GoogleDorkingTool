/**
 * Tipos para las estructuras de datos de Google Dorking
 */

/**
 * Interfaz para un dork individual
 */
export interface Dork {
  id: string
  name: string
  query: string
  description: string
  operatorsUsed: string[]
  risk: "Alto" | "Medio" | "Bajo"
}

/**
 * Interfaz para un dork de directorio expuesto
 */
export interface DirectoryDork extends Dork {
  // Propiedades específicas para dorks de directorios expuestos
  // Actualmente usa las mismas propiedades que Dork
}

/**
 * Interfaz para una categoría de dorks
 */
export interface DorkCategory {
  id: string
  name: string
  description: string
  dorks: Dork[]
}

/**
 * Interfaz para el archivo JSON completo de dorks
 */
export interface DorkData {
  categories: DorkCategory[]
}
