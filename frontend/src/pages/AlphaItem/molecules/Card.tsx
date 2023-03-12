import { useEffect, useState } from "react";
import { useComponentStore } from "../store/ComponentStore";
import { useItemData } from "../../../hooks/useItemData";
import { useParams } from "react-router-dom";

const Card = (props: any) => {
  const { id } = useParams<{ id: string }>();

  const component = useComponentStore((state: any) => state.component);
  const { alphaItem, patchAlphaItem, setAlphaItem } = useItemData(id);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (component != null) {
      patchAlphaItem({ alphaItem: { ...alphaItem }, _id: id });
      setAlphaItem({ ...alphaItem });
    }
  }, [flag, component]);

  if (component != null && component.hasOwnProperty("type")) {
    return (
      <div className="border-2 border-white absolute bottom-0 right-0 w-100 h-3/6 flex flex-col items-center">
        <h1 className="font-semibold mt-4 mb-6 text-center text-2xl">
          {component.title}
        </h1>
        <p className="text-center font-semibold text-l mb-10">
          {component.description}
        </p>
        {component.states.map((item: any) => (
          <div className="mb-3" key={item.name}>
            <h2 className="font-semibold text-xl">{item.name}</h2>
            <div className="h-px bg-primary-100 ml-4" />
          </div>
        ))}
      </div>
    );
  } else if (component != null && !component.hasOwnProperty("type")) {
    return (
      <div className="border-2 border-white absolute bottom-0 right-0 w-100 h-3/6 flex flex-col items-center">
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
                      if (e.target.checked == true) {
                        component.status += 1;
                      } else {
                        component.status -= 1;
                      }
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
  } else {
    return <div></div>;
  }
};

export default Card;
