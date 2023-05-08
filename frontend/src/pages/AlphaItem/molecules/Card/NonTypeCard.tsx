import { type IComponentState } from "../../../../stores/ComponentStore";
import { CustomSwitch } from "../../atoms/CustomSwitch";

interface INonTypeCardProps {
  stateComponent: IComponentState | null;
  flag: boolean;
  setFlag: (flag: boolean) => void;
}

export const NonTypeCard: React.FC<INonTypeCardProps> = ({
  stateComponent,
  flag,
  setFlag,
}) => {
  return (
    <div className="bg-white w-[22rem] h-[25rem] rounded-t-xl flex flex-col items-center justify-evenly  2k:w-[23rem] 2k:h-[35rem] 4k:w-[43rem] 4k:h-[50rem]">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl mt-2 text-center underline decoration-2 decoration-primary-100 mb-4 2k:mb-6 2k:mt-6 2k:text-4xl 4k:text-5xl 4k:pl-4 4k:pr-4 4k:mb-16">
          {stateComponent != null && stateComponent.name}
        </h2>
      </div>

      <div className="flex flex-col pl-4">
        {stateComponent != null &&
          stateComponent.checklist.map((item) => {
            return (
              <div
                className="flex mb-4 items-center 2k:mb-8 4k:mb-16"
                key={item.name}
              >
                <div className="min-w-[3rem] min-h-[3rem] flex 4k:min-w-[5rem] 4k:min-h-[5rem]">
                  <CustomSwitch
                    stateChecklist={item}
                    flag={flag}
                    setFlag={setFlag}
                    componentState={stateComponent}
                  />
                </div>
                <div className="font-semibold 2k:text-xl 4k:text-3xl">
                  {item.name}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
