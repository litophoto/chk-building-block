import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import "./RndBlockStyle.css";

export type BlockState = {
  width: number;
  height: number;
  x: number;
  y: number;
};

type Props = {
  blockState: BlockState;
  setBlockState: (blockState: BlockState) => void;
};

export default function RndBlcok({ blockState, setBlockState }: Props) {
  const [localState, setLocalState] = useState<BlockState>(blockState);
  useEffect(() => {
    setBlockState(localState);
  }, [localState]);

  return (
    <Rnd
      size={{ width: localState.width, height: localState.height }}
      position={{ x: localState.x, y: localState.y }}
      onDragStop={(_e, d) => {
        setLocalState({ ...localState, x: d.x, y: d.y });
      }}
      onResizeStop={(_e, _direction, ref, _delta, position) => {
        setLocalState({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          ...position,
        });
      }}
      className="rnd-block"
    >
      <div>001</div>
    </Rnd>
  );
}
