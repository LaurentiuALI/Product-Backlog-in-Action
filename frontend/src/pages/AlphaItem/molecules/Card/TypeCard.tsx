import { type IComponent } from "../../../../stores/ComponentStore";

interface ITypeCardProps {
  component: IComponent;
}
export const TypeCard: React.FC<ITypeCardProps> = ({ component }) => {
  const text = component.description.includes("\\n")
    ? component.description.split("\\n")
    : component.description;

  return (
    <div className="bg-white w-[22rem] h-[25rem] rounded-t-xl flex flex-col items-center justify-evenly 2k:w-[25rem] 2k:h-[35rem] 4k:w-[40rem] 4k:h-[45rem]">
      <h1 className=" font-bold mt-6 text-center text-2xl 2k:text-3xl 4k:text-4xl">
        {component.title}
      </h1>
      <p className="text-center font-semibold text-lg mb-6 pr-8 pl-8 2k:text-xl 4k:text-3xl">
        {typeof text == "object"
          ? text.map((item) => {
              return (
                <p className="text-[1rem] 2k:text-xl 4k:text-3xl" key={item}>
                  {item}
                </p>
              );
            })
          : component.description}
      </p>
      <div>
        {component.states.map((item) => (
          <div className="mb-4 mt-4" key={item.name}>
            <h2 className="underline decoration-primary-100 decoration-2 font-semibold text-2xl text-center 4k:text-4xl">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
