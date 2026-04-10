import { useEffect, useRef } from "react"
import { drawShape } from "./utils"
import type { Hex, Shape } from "./types"

type ShieldProps = {
  size: number;
  border: Hex;
  shield: Shape
  divisions: Array<{
    color: Hex;
    shape: Shape;
  }>
  ordinaries: Array<{
    color: Hex;
    shape: Shape;
  }>
}

export const Shield = ({ size, shield, border, divisions, ordinaries }: ShieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")

    if (!ctx) return

    drawShape({
      ctx,
      size,
      shape: shield,
      color: border,
    })

    divisions.forEach(
      ({ shape, color }) => drawShape({ ctx, size, shape, color })
    )

    ordinaries.forEach(
      ({ shape, color }) => drawShape({ ctx, size, shape, color })
    )
  }, [size, shield, border, divisions, ordinaries])

  return <canvas ref={canvasRef} width={`${size * 8}px`} height={`${size * 8}px`} />
}
