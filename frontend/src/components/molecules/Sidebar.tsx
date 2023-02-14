import Logo from "../atoms/Logo";
import ChecklistItem from "../atoms/ChecklistItem";
import ChecklistParent from "../atoms/ChecklistParent";
import AddAlpha from "../atoms/AddAlpha";
import Card from "../molecules/Card";

import { useCardData } from "../../hooks/useCardsData";
import { useComponentStore } from "../../stores/ComponentStore";

const Sidebar = (props: any) => {
  const { productBacklog } = useCardData();
  const component = useComponentStore((state: any) => state.component);
  const setComponent = useComponentStore((state: any) => state.setComponent);
  

  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 w-100 h-220 rounded-3xl m-8 overflow-hidden relative">
      <Logo />

      <AddAlpha addActive={props.addActive} />

      <div className="flex flex-col justify-center mt-14">
        <ChecklistParent
          text={productBacklog.title}
          customClick={() =>
            props.changeComponent({
              ...productBacklog,
              type: "component",
            })
          }
        />
        {productBacklog.states.map((state: any) => (
          <div key={state._id}>
            <ChecklistItem
              title={state.name}
              status={state.status}
              optional={state.optional}
              customClick={() => {
                console.log({ ...state });
                props.changeComponent({
                  ...state,
                  title: productBacklog.title,
                  type: "state",
                });
              }}
            />
          </div>
        ))}
        <div className="flex justify-center mt-6 ">
          <div className="absolute bottom-0">
            <Card component={component} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
