import stateAchieved from "../../icons/stateAchieved.svg";
import { useComponentStore } from "../../../../stores/ComponentStore";

export const StateAchieved = ({ state }: any) => {
  const { setComponent } = useComponentStore((state: any) => state);
  return (
    <div className="flex flex-row items-center ml-4 mb-6">
      <img
        onClick={() => setComponent(state)}
        src={stateAchieved}
        alt="State Achieved"
        className="ml-10 opacity-90 mr-5"
      />
      <p
        onClick={() => setComponent(state)}
        className="text-lg text-white opacity-80 font-semibold font-inter"
      >
        {state.name}
      </p>
    </div>
  );
};
