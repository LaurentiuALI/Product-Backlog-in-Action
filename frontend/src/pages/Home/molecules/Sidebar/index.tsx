import Logo from "../../atoms/Logo/Logo";
import ChecklistItem from "../../atoms/ChecklistItem";
import ChecklistParent from "../../atoms/ChecklistParent";
import AddAlpha from "../../atoms/AddAlpha/AddAlpha";
import Card from "../Card";

import { useCardData } from "../../../../hooks/useCardsData";

const Sidebar = (props: any) => {
  const { productBacklog } = useCardData();

  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 w-[30rem] h-220 rounded-3xl m-8 overflow-hidden relative">


      <div className="flex flex-col items-center" key="unique">
        <Logo />

        <div className="mb-14">
          <AddAlpha addActive={props.addActive} />
        </div>

        <div>
        <ChecklistParent />
        {productBacklog.states != null &&
          productBacklog.states.map((state: any) => (
            <div key={state.name}>
              <ChecklistItem state={state} />
            </div>
          ))}
        </div>

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
