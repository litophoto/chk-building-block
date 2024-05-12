import { useState } from "react";
import { Rnd } from "react-rnd";
import "./RndBlockStyle.css";

type Props = {
  default: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
};

export default function RndBlcok(props: Props) {
  const [state, setState] = useState({
    width: props.default.width,
    height: props.default.height,
    x: props.default.x,
    y: props.default.y,
  });

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
