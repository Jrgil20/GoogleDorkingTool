"use client"

import type { DorkOperator } from "../lib/operators"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

interface OperatorInputProps {
  operator: DorkOperator
  value: string
  onChange: (operatorId: string, value: string) => void
}

/**
 * Componente para mostrar un operador con su campo de entrada y tarjeta de información
 */
export function OperatorInput({ operator, value, onChange }: OperatorInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <label htmlFor={operator.id} className="text-sm font-medium mr-2">
          {operator.name}
        </label>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
              <Info className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Info sobre {operator.name}</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">{operator.name}</h4>
              <p className="text-sm">{operator.description}</p>
              <div className="rounded-md bg-muted p-2">
                <code className="text-xs">Ejemplo: {operator.example}</code>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <Input
        id={operator.id}
        placeholder={operator.placeholder}
        value={value}
        onChange={(e) => onChange(operator.id, e.target.value)}
      />
    </div>
  )
}
