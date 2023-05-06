import { type IComponent } from "../../../../stores/ComponentStore";

interface IWorkProductCardProps {
  component: IComponent;
}

export const WorkProductCard: React.FC<IWorkProductCardProps> = ({
  component,
}) => {
  console.log(
    "🚀 ~ file: WorkProductCard.tsx:8 ~ WorkProductCard ~ component:",
    component
  );
  return (
    <div className="bg-white flex flex-col h-[23rem] w-[23rem] border rounded-t-3xl 4k:h-[40rem]">
      <div className="flex flex-col items-center">
        <h1 className="font-bold mt-4 mb-6 4k:mb-20 text-2xl">
          {component.title}
        </h1>

        <h2 className="text-center font-semibold text-l mb-10 pl-4 pr-4">
          {component != null && component.description}
        </h2>

        {component.states.map((item) => {
          return (
            <div className="mb-3" key={item.name}>
              <h2 className="font-semibold text-xl">{item.name}</h2>
              <div className="h-px bg-primary-100 ml-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
