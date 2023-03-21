import pbIcon from "../icons/pbIcon.svg";
import pattern from "../icons/pattern.svg";
import { useComponentStore } from "../../../stores/ComponentStore";

const Topbar = (props: any) => {
  const setComponent = useComponentStore((state: any) => state.setComponent);

  return (
    <div className="border-b-2 border-b-white flex justify-around">
      <img src={pbIcon} className="p-4" />
      <img
        src={pattern}
        className="p-4"
        onClick={() => setComponent(props.card)}
      />
    </div>
  );
};

export default Topbar;
