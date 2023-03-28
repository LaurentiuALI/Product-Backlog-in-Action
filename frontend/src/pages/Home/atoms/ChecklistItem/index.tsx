import { StateAchieved } from "./StateAchieved";
import { StateUnachieved } from "./StateUnachieved";
import { StateUnachievedOpt } from "./StateUnachievedOpt";

const ChecklistItem = ({ state }: any) => {
  if (state.status == state.checklist.length) {
    return <StateAchieved state={state} />;
  } else if (state.optional == true) {
    return <StateUnachievedOpt state={state} />;
  } else if (state.optional == false) {
    return <StateUnachieved state={state} />;
  } else {
    return <></>;
  }
};

export default ChecklistItem;
