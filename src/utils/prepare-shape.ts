import type { Shape } from "../types/shape.type";

export const prepareShape = (shape: string): Shape => shape.trim().split("\n").map(line => line.trim().split(""))
