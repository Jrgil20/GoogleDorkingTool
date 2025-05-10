/**
 * Dorks para OSINT (Open Source Intelligence) y otros usos
 * Consultas predefinidas para realizar investigaciones y encontrar información pública
 * sobre personas, organizaciones o documentos.
 */
export const osintDorks = [
  {
    id: "personal_documents",
    name: "Documentos con información personal",
    query: 'filetype:pdf OR filetype:doc OR filetype:xlsx "nombre" "dirección" "teléfono" "email"',
    description:
      "Encuentra documentos que contienen información personal como nombres, direcciones, números de teléfono o correos electrónicos.",
    operatorsUsed: ["filetype"],
    risk: "Medio",
  },
  {
    id: "social_profiles",
    name: "Perfiles en redes sociales",
    query: 'site:linkedin.com OR site:twitter.com OR site:facebook.com OR site:instagram.com "John Doe"',
    description: "Busca perfiles en redes sociales asociados a un nombre o alias específico.",
    operatorsUsed: ["site"],
    risk: "Medio",
  },
  {
    id: "leaked_emails",
    name: "Correos electrónicos filtrados",
    query:
      'intext:"@gmail.com" OR intext:"@hotmail.com" OR intext:"@yahoo.com" filetype:txt OR filetype:csv OR filetype:xls',
    description: "Encuentra correos electrónicos que pueden haber sido filtrados en documentos o páginas web.",
    operatorsUsed: ["intext", "filetype"],
    risk: "Alto",
  },
]

/**
 * Dorks para Paneles de Administración y Login
 * Consultas predefinidas para encontrar paneles de administración y páginas de login
 * que podrían ser vulnerables a ataques.
 */
export const adminLoginDorks = [
  {
    id: "generic_login_pages",
    name: "Páginas de login genéricas",
    query: 'inurl:login OR inurl:signin OR inurl:admin intitle:"login" OR intitle:"admin"',
    description:
      "Encuentra páginas de inicio de sesión que podrían ser vulnerables a ataques de fuerza bruta o inyección SQL.",
    operatorsUsed: ["inurl", "intitle"],
    risk: "Alto",
  },
  {
    id: "wordpress_panels",
    name: "Paneles de WordPress",
    query: "inurl:wp-login.php OR inurl:wp-admin",
    description:
      "Localiza paneles de administración de WordPress que podrían tener vulnerabilidades o plugins desactualizados.",
    operatorsUsed: ["inurl"],
    risk: "Alto",
  },
  {
    id: "phpmyadmin_panels",
    name: "Paneles phpMyAdmin",
    query: 'intitle:"phpMyAdmin" intext:"Welcome to phpMyAdmin"',
    description:
      "Encuentra paneles de phpMyAdmin que podrían permitir acceso a bases de datos si no están correctamente protegidos.",
    operatorsUsed: ["intitle", "intext"],
    risk: "Alto",
  },
]

/**
 * Dorks Especializados
 * Consultas avanzadas que utilizan operadores especiales o combinaciones complejas
 * para búsquedas muy específicas.
 */
export const specializedDorks = [
  {
    id: "cached_pages",
    name: "Versiones en caché de páginas",
    query: "cache:example.com",
    description:
      "Encuentra versiones en caché de páginas web que pueden haber sido modificadas o eliminadas recientemente.",
    operatorsUsed: ["cache"],
    risk: "Bajo",
  },
  {
    id: "backlinks",
    name: "Enlaces a un sitio específico",
    query: "link:example.com",
    description: "Encuentra páginas que contienen enlaces a un sitio web específico, útil para análisis de backlinks.",
    operatorsUsed: ["link"],
    risk: "Bajo",
  },
  {
    id: "advanced_vulnerability",
    name: "Combinación avanzada para vulnerabilidades",
    query:
      'intext:"sql syntax near" -inurl:forum -inurl:blog -inurl:community -inurl:post -site:stackoverflow.com -site:github.com',
    description:
      "Búsqueda avanzada que combina múltiples operadores para encontrar posibles vulnerabilidades en aplicaciones web.",
    operatorsUsed: ["intext", "inurl", "site"],
    risk: "Alto",
  },
]

/**
 * Función para obtener todos los dorks disponibles
 * @returns Un objeto con todas las colecciones de dorks
 */
export function getAllDorks() {
  return {
    osint: osintDorks,
    adminLogin: adminLoginDorks,
    specialized: specializedDorks,
  }
}

/**
 * Función para buscar dorks por término
 * @param searchTerm El término a buscar en los dorks
 * @returns Un array con los dorks que coinciden con el término de búsqueda
 */
export function searchDorksByTerm(searchTerm: string) {
  const term = searchTerm.toLowerCase()
  const results = [
    ...osintDorks.filter(
      (dork) =>
        dork.name.toLowerCase().includes(term) ||
        dork.description.toLowerCase().includes(term) ||
        dork.query.toLowerCase().includes(term),
    ),
    ...adminLoginDorks.filter(
      (dork) =>
        dork.name.toLowerCase().includes(term) ||
        dork.description.toLowerCase().includes(term) ||
        dork.query.toLowerCase().includes(term),
    ),
    ...specializedDorks.filter(
      (dork) =>
        dork.name.toLowerCase().includes(term) ||
        dork.description.toLowerCase().includes(term) ||
        dork.query.toLowerCase().includes(term),
    ),
  ]

  return results
}
