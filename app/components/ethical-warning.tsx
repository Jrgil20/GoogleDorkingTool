import React, { useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

/**
 * Muestra una advertencia ética sobre el uso de Google Dorks.
 * Solo debe mostrarse cuando se genera una nueva consulta y puede ser cerrada manualmente.
 */
export function EthicalWarning() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <Alert className="relative pr-12 mt-4">
      <AlertTitle>Advertencia Ética</AlertTitle>
      <AlertDescription>
        ⚠️ Los Google Dorks pueden revelar información sensible o privada. Utiliza estas consultas de manera ética y responsable, respetando la privacidad y la legalidad.
      </AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2"
        aria-label="Cerrar advertencia"
        onClick={() => setVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  )
} 