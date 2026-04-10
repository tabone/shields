import type { Shape } from "../types/shape.type";

type DrawShapeProps = {
  shape: Shape;
  size?: number;
  color: string;
  ctx: CanvasRenderingContext2D;
}

export const drawShape = ({ ctx, shape, color, size = 10 }: DrawShapeProps) => {
  shape.forEach(
    (line, y) => {
      line.forEach(
        (char, x) => {
          if (char === ".") return
          ctx.fillStyle = char === "W" ? "#FFFFFF" : color;
          ctx.fillRect(x * size, y * size, size, size);
        }
      )
    }
  )
}
