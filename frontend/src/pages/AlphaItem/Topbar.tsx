import pbIcon from "../../icons/pbIcon.svg";
import pattern from "../../icons/pattern.svg";

const Topbar = () => {
  return (
    <div className="border-b-2 border-b-white flex justify-around">
      <img src={pbIcon} className="p-4" />
      <img src={pattern} className="p-4" />
    </div>
  );
};

export default Topbar;
