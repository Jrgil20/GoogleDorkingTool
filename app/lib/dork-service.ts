import type { DorkData, DorkCategory, Dork } from "./types"

/**
 * Servicio para cargar y gestionar los dorks
 */
export async function loadDorkData(): Promise<DorkData> {
  try {
    // En un entorno real, esto podría ser una llamada a una API o fetch
    // Para Next.js, usamos import dinámico para cargar el JSON
    const data = await import("../data/dorks.json").then((module) => module.default)
    return data as DorkData
  } catch (error) {
    console.error("Error al cargar los datos de dorks:", error)
    // Devolver una estructura vacía en caso de error
    return { categories: [] }
  }
}

/**
 * Obtiene todas las categorías de dorks
 */
export async function getDorkCategories(): Promise<DorkCategory[]> {
  const data = await loadDorkData()
  return data.categories
}

/**
 * Obtiene una categoría específica por su ID
 */
export async function getDorkCategoryById(categoryId: string): Promise<DorkCategory | undefined> {
  const categories = await getDorkCategories()
  return categories.find((category) => category.id === categoryId)
}

/**
 * Obtiene un dork específico por su ID y categoría
 */
export async function getDorkById(categoryId: string, dorkId: string): Promise<Dork | undefined> {
  const category = await getDorkCategoryById(categoryId)
  if (!category) return undefined

  return category.dorks.find((dork) => dork.id === dorkId)
}

/**
 * Busca dorks que coincidan con un término de búsqueda
 */
export async function searchDorks(searchTerm: string): Promise<Dork[]> {
  const categories = await getDorkCategories()
  const results: Dork[] = []

  for (const category of categories) {
    const matchingDorks = category.dorks.filter(
      (dork) =>
        dork.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dork.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dork.query.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    results.push(...matchingDorks)
  }

  return results
}
