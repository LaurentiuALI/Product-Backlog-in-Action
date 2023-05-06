import stateAchieved from "../../icons/stateAchieved.svg";
import {
  type IComponentState,
  useComponentStore,
} from "../../../../stores/ComponentStore";

export const StateAchieved: React.FC<{ state: IComponentState }> = ({
  state,
}) => {
  const [setComponentState, setComponent] = useComponentStore((state) => [
    state.setComponentState,
    state.setComponent,
  ]);
  return (
    <div
      className="flex flex-row items-center ml-4 mb-6"
      onClick={() => {
        setComponentState(state);
        setComponent(null);
      }}
    >
      <img
        src={stateAchieved}
        alt="State Achieved"
        className="ml-10 opacity-90 mr-5"
      />
      <p className="text-lg text-white opacity-80 font-semibold font-inter">
        {state.name}
      </p>
    </div>
  );
};
