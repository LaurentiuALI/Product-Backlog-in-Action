import stateUnachieved from "../../icons/stateUnachieved.svg";
import { useComponentStore } from "../../../../stores/ComponentStore";

export const StateUnachieved = ({ state }: any) => {
  const { setComponent } = useComponentStore((state: any) => state);
  return (
    <div className="flex flex-row items-center ml-4 mb-6">
      <img
        onClick={() => setComponent(state)}
        src={stateUnachieved}
        alt="State Unachieved"
        className="ml-10 opacity-90 mr-5"
      />
      <p
        className="text-lg text-white opacity-80 font-semibold font-inter"
        onClick={() => setComponent(state)}
      >
        {state.name}
      </p>
    </div>
  );
};
