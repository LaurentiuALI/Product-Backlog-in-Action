import Alpha from "../icons/alpha.svg";
import { useComponentStore } from "../store/ComponentStore";

const Activity = (props: any) => {
  const setComponent = useComponentStore((state: any) => state.setComponent);

  return (
    <div
      className="flex items-center h-fit w-fit"
      style={props.style}
      onClick={() => setComponent(props.card)}
    >
      <img
        src={Alpha}
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

export default Activity;
