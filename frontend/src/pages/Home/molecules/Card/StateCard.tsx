import { CustomSwitch } from "../../atoms/CustomSwitch";

export const StateCard = ({ component, flag, setFlag }: any) => {
  return (
    <div className="bg-white flex flex-col h-[23rem] w-[23rem] border rounded-t-3xl">
      <div className="flex flex-col items-center">
        <h2 className="decoration-2 decoration-primary-100 mb-5 underline font-semibold text-xl mt-5">
          {component != null && component.name}
        </h2>
      </div>

      <div className="flex flex-col">
        {component != null &&
          component.checklist.map((item: any) => {
            return (
              <div className="flex mb-3 " key={item.name}>
                <div className="min-w-[3rem] min-h-[3rem] flex justify-center">
                  <CustomSwitch
                    item={item}
                    flag={flag}
                    setFlag={setFlag}
                    component={component}
                  />
                </div>
                <div className="font-semibold">{item.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
