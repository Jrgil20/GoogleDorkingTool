"use client"

import { useState, useEffect } from "react"
import { Search, Copy, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { EthicalWarning } from "./components/ethical-warning"

// Importar tipos y servicios
import type { DorkCategory } from "./lib/types"
import { dorkingOperators } from "./lib/operators"
import { getDorkCategories } from "./lib/dork-service"
import { DorkCard } from "./components/dork-card"
import { OperatorInput } from "./components/operator-input"

export default function GoogleDorkingTool() {
  // Estado para la consulta y operadores seleccionados
  const [query, setQuery] = useState("")
  const [selectedOperators, setSelectedOperators] = useState<{ [key: string]: string }>({})
  const [keywords, setKeywords] = useState("")

  // Estado para las categorías de dorks cargadas dinámicamente
  const [dorkCategories, setDorkCategories] = useState<DorkCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Estado para mostrar advertencia ética
  const [showEthicalWarning, setShowEthicalWarning] = useState(false)

  // Cargar las categorías de dorks al montar el componente
  useEffect(() => {
    async function loadCategories() {
      try {
        setIsLoading(true)
        const categories = await getDorkCategories()
        setDorkCategories(categories)
        setError(null)
      } catch (err) {
        console.error("Error al cargar las categorías de dorks:", err)
        setError("No se pudieron cargar las categorías de dorks. Por favor, intenta de nuevo más tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    loadCategories()
  }, [])

  // Construir la consulta completa
  const buildQuery = () => {
    let finalQuery = ""

    // Añadir operadores seleccionados
    Object.entries(selectedOperators).forEach(([key, value]) => {
      if (value.trim()) {
        finalQuery += `${key}:${value} `
      }
    })

    // Añadir palabras clave
    if (keywords.trim()) {
      finalQuery += keywords
    }

    return finalQuery.trim()
  }

  // Actualizar la consulta cuando cambian los operadores o palabras clave
  const updateQuery = () => {
    setQuery(buildQuery())
    setShowEthicalWarning(true) // Mostrar advertencia al generar nueva consulta
  }

  // Manejar cambios en los valores de los operadores
  const handleOperatorChange = (operatorId: string, value: string) => {
    setSelectedOperators((prev) => ({
      ...prev,
      [operatorId]: value,
    }))

    setTimeout(updateQuery, 0)
  }

  // Manejar cambios en las palabras clave
  const handleKeywordsChange = (value: string) => {
    setKeywords(value)
    setTimeout(updateQuery, 0)
  }

  // Establecer una consulta predefinida
  const handleUseDork = (dorkQuery: string) => {
    setQuery(dorkQuery)
  }

  // Copiar la consulta al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(query)
  }

  // Abrir la consulta en Google
  const searchInGoogle = () => {
    if (query) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank")
    }
  }

  const basicOperators = dorkingOperators.reduce((acc: any, operator: any) => {
    acc[operator.id] = operator
    return acc
  }, {})

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Herramienta de Google Dorking</h1>
      <p className="text-center text-muted-foreground mb-8">
        Construye consultas avanzadas para encontrar información específica en Google
      </p>

      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        {/* Panel de operadores */}
        <Card>
          <CardHeader>
            <CardTitle>Operadores</CardTitle>
            <CardDescription>Selecciona los operadores para tu consulta</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="operators">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="operators">Operadores</TabsTrigger>
                <TabsTrigger value="info">Información</TabsTrigger>
              </TabsList>
              <TabsContent value="operators" className="space-y-4 pt-4">
                <Accordion type="single" collapsible className="w-full">
                  {/* Operadores Básicos */}
                  <AccordionItem value="basic-operators">
                    <AccordionTrigger>
                      Operadores Básicos
                      <Badge variant="outline" className="ml-2">
                        {dorkingOperators.length}
                      </Badge>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        {dorkingOperators.map((operator) => (
                          <OperatorInput
                            key={operator.id}
                            operator={operator}
                            value={selectedOperators[operator.id] || ""}
                            onChange={handleOperatorChange}
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Categorías de Dorks cargadas dinámicamente */}
                  {isLoading ? (
                    <AccordionItem value="loading">
                      <AccordionTrigger>Cargando categorías...</AccordionTrigger>
                      <AccordionContent>
                        <div className="py-4 text-center text-muted-foreground">Cargando datos de dorks...</div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : error ? (
                    <AccordionItem value="error">
                      <AccordionTrigger>Error al cargar categorías</AccordionTrigger>
                      <AccordionContent>
                        <Alert variant="destructive">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    dorkCategories.map((category) => (
                      <AccordionItem key={category.id} value={category.id}>
                        <AccordionTrigger>
                          {category.name}
                          <Badge variant="outline" className="ml-2">
                            {category.dorks.length}
                          </Badge>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                            <p className="text-sm text-muted-foreground mb-4">
                              {category.description}. Haz clic en "Usar" para aplicar la consulta.
                            </p>

                            {category.dorks.map((dork) => (
                              <DorkCard key={dork.id} dork={dork} onUse={handleUseDork} />
                            ))}

                            <div className="bg-muted/30 rounded-md p-4 text-sm">
                              <h4 className="font-medium mb-2">Notas sobre {category.name}:</h4>
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                <li>
                                  Estas consultas están diseñadas con fines educativos y de auditoría de seguridad.
                                </li>
                                <li>Utiliza siempre estas técnicas de manera ética y responsable.</li>
                                <li>Los resultados pueden variar según la indexación de Google.</li>
                                <li>Puedes personalizar estas consultas combinando diferentes operadores.</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))
                  )}
                </Accordion>

                <div className="space-y-2 pt-2">
                  <label htmlFor="keywords" className="text-sm font-medium">
                    Palabras clave adicionales
                  </label>
                  <Input
                    id="keywords"
                    placeholder="Términos adicionales de búsqueda"
                    value={keywords}
                    onChange={(e) => handleKeywordsChange(e.target.value)}
                  />
                </div>
              </TabsContent>
              <TabsContent value="info">
                <div className="space-y-4 pt-2">
                  <Alert>
                    <AlertDescription>
                      Google Dorking es una técnica que utiliza operadores especiales de búsqueda para encontrar
                      información específica indexada por Google. Úsala de manera ética y responsable.
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <h3 className="font-medium">Operadores disponibles:</h3>
                    <div className="flex flex-wrap gap-2">
                      {dorkingOperators.map((operator) => (
                        <Badge key={operator.id} variant="outline">
                          {operator.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Panel de consulta */}
        <Card>
          <CardHeader>
            <CardTitle>Consulta de Google Dorking</CardTitle>
            <CardDescription>
              Tu consulta se construirá automáticamente a medida que selecciones operadores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  value={query}
                  readOnly
                  className="pr-10 font-mono text-sm"
                  placeholder="Tu consulta aparecerá aquí..."
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="absolute right-0 top-0" onClick={copyToClipboard}>
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copiar consulta</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copiar al portapapeles</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Vista previa:</h3>
                <div className="border rounded-md p-4 min-h-[100px] bg-muted/30">
                  {query ? (
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mr-2">
                          G
                        </div>
                        <div className="text-lg font-medium">Google</div>
                      </div>
                      <div className="border rounded-full px-4 py-2 flex items-center bg-white">
                        <Search className="h-4 w-4 text-muted-foreground mr-2" />
                        <div className="font-mono text-sm">{query}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-muted-foreground text-center py-8">
                      La vista previa de tu consulta aparecerá aquí
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-2">
            <div className="flex justify-between">
              <Button variant="outline" onClick={copyToClipboard} disabled={!query}>
                <Copy className="h-4 w-4 mr-2" />
                Copiar
              </Button>
              <Button onClick={searchInGoogle} disabled={!query}>
                <Search className="h-4 w-4 mr-2" />
                Buscar en Google
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
            {/* Advertencia ética solo si hay consulta y showEthicalWarning es true */}
            {query && showEthicalWarning && (
              <EthicalWarning key={query} />
            )}
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Notas y Documentación Adicional</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Uso Responsable</h3>
                <p className="text-muted-foreground">
                  Google Dorking es una técnica poderosa que debe utilizarse de manera ética y responsable. No utilices
                  estas técnicas para acceder a información privada o protegida sin autorización.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Combinación de Operadores</h3>
                <p className="text-muted-foreground">
                  Puedes combinar múltiples operadores para refinar tus búsquedas. Por ejemplo:{" "}
                  <code>site:example.com filetype:pdf intext:confidencial</code>
                </p>
              </div>
              <div>
                <h3 className="font-medium">Operadores Avanzados</h3>
                <p className="text-muted-foreground">
                  Existen otros operadores avanzados como <code>before:</code>, <code>after:</code>,{" "}
                  <code>related:</code>, <code>link:</code>, entre otros, que puedes utilizar para búsquedas más
                  específicas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
