import { type IComponent } from "../../../../stores/ComponentStore";

interface ITypeCardProps {
  component: IComponent;
}
export const TypeCard: React.FC<ITypeCardProps> = ({ component }) => {
  const text = component.description.includes("\\n")
    ? component.description.split("\\n")
    : component.description;

  return (
    <div className="bg-white w-[22rem] h-[25rem] rounded-t-xl flex flex-col items-center justify-evenly 2k:w-[23rem] 2k:h-[35rem] 4k:w-[43rem] 4k:h-[50rem]">
      <h1 className=" font-bold mt-6 text-center text-2xl 2k:text-4xl 2k:max-w-[14rem] 4k:max-w-fit 4k:text-5xl">
        {component.title}
      </h1>
      <h2 className="text-center font-semibold text-lg mb-6 pr-8 pl-8 2k:text-2xl 4k:text-4xl">
        {typeof text == "object"
          ? text.map((item) => {
              return (
                <p className="text-[1rem] 2k:text-2xl 4k:text-3xl" key={item}>
                  {item}
                </p>
              );
            })
          : component.description}
      </h2>
      <div>
        {component.states.map((item) => (
          <div className="mb-4 mt-2 4k:mb-8" key={item.name}>
            <h2 className="underline decoration-primary-100 decoration-2 2k:decoration-4 4k:decoration-4 font-semibold text-2xl text-center 2k:text-3xl 4k:text-5xl">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
