import { type IComponent } from "../../../../stores/ComponentStore";

interface ITypeCardProps {
  component: IComponent;
}
export const TypeCard: React.FC<ITypeCardProps> = ({ component }) => {
  console.log("🚀 ~ file: TypeCard.tsx:7 ~ component:", component);
  const text = component.description.includes("\\n")
    ? component.description.split("\\n")
    : component.description;

  return (
    <div className="bg-white absolute bottom-0 right-0 w-[25rem] h-[30rem] rounded-t-xl mr-4 flex flex-col items-center justify-around">
      <h1 className=" font-bold mt-14 text-center text-2xl">
        {component.title}
      </h1>
      <p className="text-center font-semibold text-lg mb-6 mt-10 pr-8 pl-8">
        {typeof text == "object"
          ? text.map((item) => {
              return (
                <p className="text-[1rem]" key={item}>
                  {item}
                </p>
              );
            })
          : component.description}
      </p>
      {component.states.map((item) => (
        <div className="mb-3 mt-3" key={item.name}>
          <h2 className="underline decoration-primary-100 decoration-2 font-semibold text-2xl text-center">
            {item.name}
          </h2>
        </div>
      ))}
    </div>
  );
};
