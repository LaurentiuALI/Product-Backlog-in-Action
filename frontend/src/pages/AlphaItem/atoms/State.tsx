import stateAchieved from "../icons/stateAchieved.svg";
import stateUnachieved from "../icons/stateUnachieved.svg";
import { useComponentStore } from "../store/ComponentStore";

const State = (props: any) => {
  const setComponent = useComponentStore((state: any) => state.setComponent);

  return (
    <div
      className="flex flex-col items-center h-fit w-fit"
      style={props.style}
      onClick={() => {
        setComponent(props.card);
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
