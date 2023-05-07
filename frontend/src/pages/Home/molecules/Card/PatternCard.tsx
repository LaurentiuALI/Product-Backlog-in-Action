import { type IComponent } from "../../../../stores/ComponentStore";

export const PatternCard: React.FC<{ component: IComponent }> = ({
  component,
}) => {
  const text = component.description.split("\\n");

  return (
    <div className="bg-white flex flex-col h-[23rem] w-[23rem] border rounded-t-3xl 2k:h-[30rem] 4k:h-[40rem]">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold mt-4 mb-6 text-center text-2xl underline decoration-primary-100 decoration-2 2k:mt-14 2k:mb-20">
          {component != null && component.title}
        </h1>

        <h2 className="font-semibold text-sm pl-5 pr-5">
          {component != null &&
            text.map((item) => {
              return <p key={item}>{item}</p>;
            })}
        </h2>
      </div>
    </div>
  );
};
