"use client"

import type { Dork } from "../lib/types"
import { basicOperators } from "../lib/operators"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface DorkCardProps {
  dork: Dork
  onUse: (query: string) => void
}

/**
 * Componente para mostrar un dork individual como una tarjeta
 */
export function DorkCard({ dork, onUse }: DorkCardProps) {
  return (
    <Card key={dork.id} className="overflow-hidden">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base">{dork.name}</CardTitle>
          <Badge variant={dork.risk === "Alto" ? "destructive" : "outline"}>Riesgo: {dork.risk}</Badge>
        </div>
        <CardDescription>{dork.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="bg-muted rounded-md p-2 font-mono text-xs overflow-x-auto">{dork.query}</div>
        <div className="mt-2 flex flex-wrap gap-1">
          {dork.operatorsUsed.map((opId) => (
            <Badge key={opId} variant="secondary" className="text-xs">
              {basicOperators[opId]?.name || opId}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-2 bg-muted/30 flex justify-end">
        <Button size="sm" onClick={() => onUse(dork.query)}>
          Usar
        </Button>
      </CardFooter>
    </Card>
  )
}
