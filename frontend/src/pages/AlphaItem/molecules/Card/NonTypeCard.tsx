import { CustomSwitch } from "../../atoms/CustomSwitch";

export const NonTypeCard = ({ component, flag, setFlag }: any) => {
  return (
    <div className="bg-white absolute bottom-0 right-0 w-[25rem] h-[30rem] rounded-t-xl mr-4 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold mt-4 mb-6 text-2xl text-center">
          {component != null && component.title}
        </h1>

        <h2 className="font-semibold text-2xl text-center underline decoration-2 decoration-primary-100 mb-6">
          {component != null && component.name}
        </h2>
      </div>

      <div className="flex flex-col pl-4 pr-4">
        {component != null &&
          component.checklist.map((item: any) => {
            return (
              <div className="flex mb-8" key={item.name}>
                <div className="min-w-[3rem] min-h-[3rem] flex ">
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
