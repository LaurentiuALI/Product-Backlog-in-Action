import { useState } from "react";
import SwitchOff from "../../icons/switchOff.svg";
import SwitchOn from "../../icons/switchOn.svg";
import {
  type IComponentState,
  type IStateChecklist,
} from "../../../../stores/ComponentStore";

interface ICustomSwitchProps {
  stateChecklist: IStateChecklist;
  flag: boolean;
  setFlag: (flag: boolean) => void;
  componentState: IComponentState;
}

export const CustomSwitch: React.FC<ICustomSwitchProps> = ({
  stateChecklist,
  flag,
  setFlag,
  componentState,
}) => {
  const [active, setActive] = useState(stateChecklist.checked);
  return (
    <button
      onClick={() => {
        if (!active == true) {
          componentState.status += 1;
        } else {
          componentState.status -= 1;
        }
        stateChecklist.checked = !active;
        setActive(!active);
        setFlag(!flag);
      }}
    >
      {active ? (
        <img src={SwitchOn} alt="switch on" />
      ) : (
        <img src={SwitchOff} alt="switch off" />
      )}
    </button>
  );
};
