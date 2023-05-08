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
      className="flex flex-col items-center h-fit w-fit mr-20 2k:mr-[25rem]"
      onClick={() => setComponent(props.card)}
    >
      <img
        src={AlphaIcon}
        id={props.id}
        alt="activity"
        className="w-28 h-auto object-cover 2k:w-32 4k:w-60"
      />
      <h1 className="text-lg text-orange-500 font-semibold font-inter 4k:text-3xl">
        {props.name}
      </h1>
    </div>
  );
};

export default Alpha;
