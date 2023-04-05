import pbIcon from "../icons/pbIcon.svg";
import pattern from "../icons/pattern.svg";
import { useComponentStore } from "../../../stores/ComponentStore";

const Topbar = (props: any) => {
  const setComponent = useComponentStore((state: any) => state.setComponent);

  return (
    <div className="border-b-2 border-b-white flex justify-around">
      <img src={pbIcon} className="p-4" />
      <div className="flex flex-col items-center">
        <img
          src={pattern}
          className="p-4"
          onClick={() => setComponent(props.card)}
        />
        <p
          className="text-white font-semibold text-2xl"
          onClick={() => {
            setComponent(props.card);
          }}
        >
          {props.card !== null && props.card.title}
        </p>
      </div>
    </div>
  );
};

export default Topbar;
