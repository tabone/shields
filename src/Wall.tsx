import { useMemo, type ComponentProps } from "react";
import { Shield } from "./Shield";
import type { Hex } from "./types/hex.type"
import { pickOne } from "./utils";
import type { Shape } from "./types";
import { useWindowSize } from "./hooks";

type WallProps = {
  border: Hex,
  size: number;
  colors: Hex[];
  shield: Shape;
  divisions: Shape[];
  ordinaries: Shape[];
}

export const Wall = ({ size, border, colors, shield, divisions, ordinaries }: WallProps) => {
  const windowSize = useWindowSize()

  const amount = Math.ceil(windowSize.width * windowSize.height / Math.pow(size * 8, 2))

  const shields = useMemo(
    () => Array(amount).fill(null).map<Pick<ComponentProps<typeof Shield>, "divisions" | "ordinaries">>(
      () => ({
        divisions: [{
          color: pickOne(colors),
          shape: pickOne(divisions)
        }],
        ordinaries: [{
          color: pickOne(colors),
          shape: pickOne(ordinaries)
        }]
      })
  ), [amount, colors, divisions, ordinaries])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      gap: `${size * 1}px`,
      flexDirection: 'row',
      background: '#e1e1e1',
      padding: `${size * 1}px`,
      justifyContent: 'space-between'
    }}>
      {
        shields.map(({ divisions, ordinaries }, index) => (
          <Shield
            key={index}
            size={size}
            shield={shield}
            border={border}
            divisions={divisions}
            ordinaries={ordinaries}
          />
        ))
      }
    </div>
  )
}
