import AlphaIcon from "../icons/alpha.svg";
import {
  type IComponent,
  useComponentStore,
} from "../../../stores/ComponentStore";

interface IAlphaProps {
  id: string;
  name: string;
  card: IComponent;
  style?: React.CSSProperties;
}

const Alpha: React.FC<IAlphaProps> = (props) => {
  const setComponent = useComponentStore((state) => state.setComponent);

  return (
    <div
      className="flex items-center h-fit w-fit"
      style={props.style}
      onClick={() => setComponent(props.card)}
    >
      <img
        src={AlphaIcon}
        id={props.id}
        alt="activity"
        className="w-28 h-auto object-cover"
      />
      <h1 className="text-lg text-white font-semibold font-inter">
        {props.name}
      </h1>
    </div>
  );
};

export default Alpha;
