import { useEffect, useState } from "react";
import { useCardData } from "../../hooks/useCardsData";
import { useComponentStore } from "../../stores/ComponentStore";

interface Props {
  component: any;
  type?: string;
}

const Card = () => {
  const component = useComponentStore((state: any) => state.component);
  const { productBacklog, mutate } = useCardData();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (component != null) {
      let newComponent = { ...component };
      delete newComponent.type;
      delete newComponent.id;
      delete newComponent.title;
      productBacklog.states = productBacklog.states.filter(
        (item: any) => item.name !== newComponent.name
      );
      productBacklog.states = [...productBacklog.states, newComponent];
      delete productBacklog.__v;
      mutate({ card: productBacklog, _id: productBacklog._id });
    }
  }, [flag]);

  if (component != null && component.type === "component") {
    return (
      <div className="bg-white flex flex-col h-80 w-80 border rounded-t-3xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold mt-4 mb-6 text-2xl">{component.title}</h1>

          <h2 className="text-center font-semibold text-l mb-10">
            {component != null && component.description}
          </h2>

          {component.states.map((item: any) => {
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
  } else if (component != null && component.type === "state") {
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
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => {
                      item.checked = e.target.checked;
                      setFlag(!flag);
                    }}
                  />
                  <p className="ml-2">{item != null && item.name}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  } else if (component != null && component.type === "pattern") {
    let text = component.description.split("\\n");

    return (
      <div className="bg-white flex flex-col h-80 w-80 border rounded-t-3xl">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold mt-4 mb-6 text-center text-2xl">
            {component != null && component.title}
          </h1>

          <h2 className="font-medium text-xs">
            {component != null &&
              text.map((item: any) => {
                return <p key={item}>{item}</p>;
              })}
          </h2>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Card;
