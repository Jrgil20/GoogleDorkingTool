# Catálogo de Dorks

Este documento proporciona un catálogo completo de los dorks (consultas de Google Dorking) incluidos en la herramienta, organizados por categorías.

## Índice

- [Operadores Básicos](#operadores-básicos)
- [Dorks para Archivos Específicos](#dorks-para-archivos-específicos)
- [Dorks para Directorios Expuestos](#dorks-para-directorios-expuestos)
- [Dorks para Paneles de Administración y Login](#dorks-para-paneles-de-administración-y-login)
- [Dorks de OSINT y Otros Usos](#dorks-de-osint-y-otros-usos)
- [Dorks Especializados](#dorks-especializados)
- [Creación de Dorks Personalizados](#creación-de-dorks-personalizados)

## Operadores Básicos

Los operadores básicos son los bloques fundamentales para construir consultas de Google Dorking.

| Operador | Descripción | Ejemplo | Uso |
|----------|-------------|---------|-----|
| `site:` | Limita los resultados a un dominio específico | `site:example.com vulnerabilidad` | Buscar contenido en un sitio web específico |
| `filetype:` | Busca archivos de un tipo específico | `filetype:pdf "información confidencial"` | Encontrar documentos de un formato particular |
| `intitle:` | Busca páginas con palabras específicas en el título | `intitle:index.of "contraseñas"` | Encontrar páginas con títulos específicos |
| `inurl:` | Busca páginas con palabras específicas en la URL | `inurl:admin inurl:login` | Encontrar páginas con patrones específicos en la URL |
| `intext:` | Busca páginas con palabras específicas en el texto | `intext:"información privada"` | Encontrar páginas que contienen texto específico |
| `cache:` | Muestra la versión en caché de una página web | `cache:example.com` | Ver versiones anteriores de una página |
| `ext:` | Similar a filetype, busca por extensión de archivo | `ext:sql intext:password` | Encontrar archivos con extensiones específicas |

## Dorks para Archivos Específicos

Consultas predefinidas para encontrar archivos específicos con información potencialmente sensible.

### Archivos .env con credenciales
\`\`\`
filetype:env "DB_PASSWORD"
\`\`\`
**Descripción**: Busca archivos de entorno con credenciales de base de datos.  
**Riesgo**: Alto  
**Operadores**: filetype, intext

### Logs de acceso expuestos
\`\`\`
filetype:log inurl:"access.log"
\`\`\`
**Descripción**: Localiza logs de acceso expuestos que pueden contener información sensible.  
**Riesgo**: Medio  
**Operadores**: filetype, inurl

### Volcados de phpMyAdmin
\`\`\`
filetype:sql intext:"phpMyAdmin dump"
\`\`\`
**Descripción**: Encuentra volcados de base de datos de phpMyAdmin que pueden contener datos sensibles.  
**Riesgo**: Alto  
**Operadores**: filetype, intext

### Archivos de configuración con contraseñas
\`\`\`
filetype:conf intext:"password"
\`\`\`
**Descripción**: Busca archivos de configuración que contengan contraseñas en texto plano.  
**Riesgo**: Alto  
**Operadores**: filetype, intext

### Archivos de configuración Git
\`\`\`
intext:"remote" filetype:git-config
\`\`\`
**Descripción**: Encuentra archivos de configuración Git que pueden contener URLs de repositorios privados.  
**Riesgo**: Medio  
**Operadores**: filetype, intext

## Dorks para Directorios Expuestos

Consultas predefinidas para encontrar directorios expuestos y listados de archivos que pueden contener información sensible.

### Listado principal de un directorio raíz
\`\`\`
intitle:"Index of /"
\`\`\`
**Descripción**: Encuentra servidores web con listados de directorios habilitados en la raíz, exponiendo potencialmente toda la estructura de archivos.  
**Riesgo**: Alto  
**Operadores**: intitle

### Directorios de respaldo
\`\`\`
allinurl:"/backup/"
\`\`\`
**Descripción**: Localiza directorios de respaldo o backup que pueden contener copias de seguridad de bases de datos, configuraciones o código fuente.  
**Riesgo**: Alto  
**Operadores**: allinurl

### Directorios de administración
\`\`\`
intitle:"Index of /admin"
\`\`\`
**Descripción**: Encuentra directorios de administración expuestos que pueden contener paneles de control o interfaces administrativas.  
**Riesgo**: Alto  
**Operadores**: intitle

### Directorios de archivos subidos
\`\`\`
inurl:"/uploads/" intitle:"Index of"
\`\`\`
**Descripción**: Localiza directorios de carga de archivos que pueden contener documentos sensibles, imágenes u otros archivos subidos por usuarios.  
**Riesgo**: Medio  
**Operadores**: inurl, intitle

## Dorks para Paneles de Administración y Login

Consultas predefinidas para encontrar paneles de administración y páginas de login que podrían ser vulnerables a ataques.

### Páginas de login genéricas
\`\`\`
inurl:login OR inurl:signin OR inurl:admin intitle:"login" OR intitle:"admin"
\`\`\`
**Descripción**: Encuentra páginas de inicio de sesión que podrían ser vulnerables a ataques de fuerza bruta o inyección SQL.  
**Riesgo**: Alto  
**Operadores**: inurl, intitle

### Paneles de WordPress
\`\`\`
inurl:wp-login.php OR inurl:wp-admin
\`\`\`
**Descripción**: Localiza paneles de administración de WordPress que podrían tener vulnerabilidades o plugins desactualizados.  
**Riesgo**: Alto  
**Operadores**: inurl

### Paneles phpMyAdmin
\`\`\`
intitle:"phpMyAdmin" intext:"Welcome to phpMyAdmin"
\`\`\`
**Descripción**: Encuentra paneles de phpMyAdmin que podrían permitir acceso a bases de datos si no están correctamente protegidos.  
**Riesgo**: Alto  
**Operadores**: intitle, intext

## Dorks de OSINT y Otros Usos

Consultas predefinidas para realizar investigaciones OSINT (Open Source Intelligence) y encontrar información pública sobre personas, organizaciones o documentos.

### Documentos con información personal
\`\`\`
filetype:pdf OR filetype:doc OR filetype:xlsx "nombre" "dirección" "teléfono" "email"
\`\`\`
**Descripción**: Encuentra documentos que contienen información personal como nombres, direcciones, números de teléfono o correos electrónicos.  
**Riesgo**: Medio  
**Operadores**: filetype

### Perfiles en redes sociales
\`\`\`
site:linkedin.com OR site:twitter.com OR site:facebook.com OR site:instagram.com "John Doe"
\`\`\`
**Descripción**: Busca perfiles en redes sociales asociados a un nombre o alias específico.  
**Riesgo**: Medio  
**Operadores**: site

### Correos electrónicos filtrados
\`\`\`
intext:"@gmail.com" OR intext:"@hotmail.com" OR intext:"@yahoo.com" filetype:txt OR filetype:csv OR filetype:xls
\`\`\`
**Descripción**: Encuentra correos electrónicos que pueden haber sido filtrados en documentos o páginas web.  
**Riesgo**: Alto  
**Operadores**: intext, filetype

## Dorks Especializados

Consultas avanzadas que utilizan operadores especiales o combinaciones complejas para búsquedas muy específicas.

### Versiones en caché de páginas
\`\`\`
cache:example.com
\`\`\`
**Descripción**: Encuentra versiones en caché de páginas web que pueden haber sido modificadas o eliminadas recientemente.  
**Riesgo**: Bajo  
**Operadores**: cache

### Enlaces a un sitio específico
\`\`\`
link:example.com
\`\`\`
**Descripción**: Encuentra páginas que contienen enlaces a un sitio web específico, útil para análisis de backlinks.  
**Riesgo**: Bajo  
**Operadores**: link

### Combinación avanzada para vulnerabilidades
\`\`\`
intext:"sql syntax near" -inurl:forum -inurl:blog -inurl:community -inurl:post -site:stackoverflow.com -site:github.com
\`\`\`
**Descripción**: Búsqueda avanzada que combina múltiples operadores para encontrar posibles vulnerabilidades en aplicaciones web.  
**Riesgo**: Alto  
**Operadores**: intext, inurl, site

## Creación de Dorks Personalizados

### Estructura de un Dork

Para crear dorks personalizados efectivos, sigue esta estructura:

1. **Identificar el objetivo**: Determina qué tipo de información estás buscando
2. **Seleccionar operadores adecuados**: Elige los operadores que mejor se adapten a tu búsqueda
3. **Combinar operadores**: Utiliza operadores booleanos (AND, OR) para refinar la búsqueda
4. **Excluir falsos positivos**: Usa el operador `-` para excluir resultados no deseados

### Ejemplo de Creación

Para buscar posibles fugas de información en GitHub:

\`\`\`
site:github.com "password" "api_key" "secret" "token" -"example" -"sample" -"test"
\`\`\`

Este dork:
- Busca en GitHub (`site:github.com`)
- Busca términos relacionados con credenciales (`"password" "api_key" "secret" "token"`)
- Excluye resultados de prueba (`-"example" -"sample" -"test"`)

### Mejores Prácticas

- **Especificidad**: Cuanto más específico sea el dork, mejores resultados obtendrás
- **Iteración**: Refina tus dorks basándote en los resultados iniciales
- **Combinación**: Mezcla diferentes operadores para búsquedas más precisas
- **Documentación**: Registra tus dorks efectivos para uso futuro
- **Uso Ético**: Utiliza estas técnicas solo con fines legítimos y autorizados
