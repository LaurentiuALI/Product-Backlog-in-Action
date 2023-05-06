import stateAchieved from "../icons/stateAchieved.svg";
import stateUnachieved from "../icons/stateUnachieved.svg";
import {
  type IComponentState,
  useComponentStore,
} from "../../../stores/ComponentStore";

interface IStateProps {
  id: string;
  name: string;
  style?: React.CSSProperties;
  card: IComponentState;
  index: number;
}

const State: React.FC<IStateProps> = (props) => {
  const setComponentState = useComponentStore(
    (state) => state.setComponentState
  );
  const setComponent = useComponentStore((state) => state.setComponent);

  return (
    <div
      className="flex flex-col items-center h-fit w-fit"
      style={props.style}
      onClick={() => {
        setComponentState(props.card);
        setComponent(null);
      }}
    >
      <img
        id={props.id}
        src={
          props.index == 0 || props.card.status == props.card.checklist.length
            ? stateAchieved
            : stateUnachieved
        }
        alt="activity"
        className="w-max h-auto object-cover"
      />
      <h1 className="text-lg text-white font-semibold font-inter text-center ml-2">
        {props.name}
      </h1>
    </div>
  );
};

export default State;
