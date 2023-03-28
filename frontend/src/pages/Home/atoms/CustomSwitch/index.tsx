import { useState } from "react";
import SwitchOff from "../../../icons/switchOff.svg";
import SwitchOn from "../../../icons/switchOn.svg";

export const CustomSwitch = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <img
        src={active ? SwitchOn : SwitchOff}
        onClick={(event) => {
          event.currentTarget.classList.add(
            "transform",
            "ease-in",
            "duration-300"
          );
          setActive(!active);
        }}
        className="transfrom ease-in duration-300"
      />
    </div>
  );
};
