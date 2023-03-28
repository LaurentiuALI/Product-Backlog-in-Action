import Logo from "../../atoms/Logo/Logo";
import ChecklistItem from "../../atoms/ChecklistItem";
import ChecklistParent from "../../atoms/ChecklistParent";
import AddAlpha from "../../atoms/AddAlpha/AddAlpha";
import Card from "../Card";

import { useCardData } from "../../../../hooks/useCardsData";

const Sidebar = (props: any) => {
  const { productBacklog } = useCardData();

  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 w-100 h-220 rounded-3xl m-8 overflow-hidden relative">
      <Logo />

      <AddAlpha addActive={props.addActive} />

      <div className="flex flex-col justify-center mt-14" key="unique">
        <ChecklistParent />
        {productBacklog.states != null &&
          productBacklog.states.map((state: any) => (
            <div key={state.name}>
              <ChecklistItem state={state} />
            </div>
          ))}
        <div className="flex justify-center mt-6 ">
          <div className="absolute bottom-0">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
