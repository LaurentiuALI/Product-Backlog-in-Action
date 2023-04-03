import { CustomSwitch } from "../../atoms/CustomSwitch";

export const StateCard = ({ component, flag, setFlag }: any) => {
  return (
    <div className="bg-white flex flex-col h-80 w-80 border rounded-t-3xl">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold mt-4 mb-6 text-2xl">
          {component != null && component.title}
        </h1>

        <h2 className="font-semibold text-xl">
          {component != null && component.name}
        </h2>
        <div className="w-28 h-px bg-primary-100 ml-4"></div>
      </div>

      <div className="flex flex-col">
        {component != null &&
          component.checklist.map((item: any) => {
            return (
              <div className="flex mb-3 items-center" key={item.name}>
                <CustomSwitch item={item} flag={flag} setFlag={setFlag} component={component}/>
                <p className="ml-2">{item != null && item.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
