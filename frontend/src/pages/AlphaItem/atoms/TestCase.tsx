import workProduct from "../icons/workProduct.svg";
import { useComponentStore } from "../../../stores/ComponentStore";

const Activity = (props: any) => {
  const setComponent = useComponentStore((state: any) => state.setComponent);

  return (
    <div
      className="flex flex-col items-center h-fit w-fit relative "
      style={props.style}
      onClick={() => setComponent(props.card)}
    >
      <img
        id={props.id}
        src={workProduct}
        alt="activity"
        className="w-max h-auto object-cover"
      />
      <h1 className="text-lg text-white font-semibold font-inter text-center">
        {props.name}
      </h1>
    </div>
  );
};

export default Activity;
