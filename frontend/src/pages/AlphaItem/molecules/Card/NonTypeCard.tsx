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
    <div className="bg-white absolute bottom-0 right-0 w-[25rem] h-[30rem] rounded-t-xl mr-4 flex flex-col items-center 2k:w-[30rem] 2k:h-[35rem] 4k:w-[40rem] 4k:h-[45rem]">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-2xl mt-4 text-center underline decoration-2 decoration-primary-100 mb-12 4k:text-4xl">
          {stateComponent != null && stateComponent.name}
        </h2>
      </div>

      <div className="flex flex-col pl-4 pr-4 ">
        {stateComponent != null &&
          stateComponent.checklist.map((item) => {
            return (
              <div className="flex mb-8 items-center" key={item.name}>
                <div className="min-w-[3rem] min-h-[3rem] flex 4k:min-w-[5rem] 4k:min-h-[5rem]">
                  <CustomSwitch
                    stateChecklist={item}
                    flag={flag}
                    setFlag={setFlag}
                    componentState={stateComponent}
                  />
                </div>
                <div className="font-semibold 4k:text-2xl">{item.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
