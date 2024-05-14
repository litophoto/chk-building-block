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
  const [state, setState] = useState<BlockState>(blockState);
  useEffect(() => {
    setBlockState(state);
  }, [state]);

  return (
    <Rnd
      size={{ width: state.width, height: state.height }}
      position={{ x: state.x, y: state.y }}
      onDragStop={(_e, d) => {
        setState({ ...state, x: d.x, y: d.y });
      }}
      onResizeStop={(_e, _direction, ref, _delta, position) => {
        setState({
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
