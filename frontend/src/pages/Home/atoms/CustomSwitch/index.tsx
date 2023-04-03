import { useState } from "react";
import SwitchOff from "../../icons/switchOff.svg";
import SwitchOn from "../../icons/switchOn.svg";

export const CustomSwitch = ({item, flag, setFlag, component}: any) => {
  const [active, setActive] = useState(item.checked);
  return (
    <div>
      <button onClick={ () => {
        if (!active == true) {
          component.status += 1;
        } else {
          component.status -= 1;
        }
        item.checked = !active
        setActive(!active);
        setFlag(!flag);
        }} >
        { active ? <img src={SwitchOn} alt="switch on"  /> : <img src={SwitchOff} alt="switch off"  />}
      </button>
    </div>
  );
};
