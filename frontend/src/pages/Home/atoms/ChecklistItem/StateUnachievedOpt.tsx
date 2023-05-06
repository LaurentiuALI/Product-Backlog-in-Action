import stateUnachievedOpt from "../../icons/stateUnachievedOpt.svg";
import {
  type IComponentState,
  useComponentStore,
} from "../../../../stores/ComponentStore";

export const StateUnachievedOpt: React.FC<{ state: IComponentState }> = ({
  state,
}) => {
  const { setComponent, setComponentState } = useComponentStore(
    (state) => state
  );
  return (
    <div
      className="flex flex-row items-center ml-4 mb-6"
      onClick={() => {
        setComponentState(state);
        setComponent(null);
      }}
    >
      <img
        src={stateUnachievedOpt}
        alt="State Unachieved"
        className="ml-10 opacity-90 mr-5"
      />
      <p className="text-lg text-white opacity-80 font-semibold font-inter">
        {state.name}
      </p>
    </div>
  );
};
