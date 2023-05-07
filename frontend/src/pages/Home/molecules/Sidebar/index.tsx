import Logo from "../../atoms/Logo/Logo";
import ChecklistItem from "../../atoms/ChecklistItem";
import ChecklistParent from "../../atoms/ChecklistParent";
import AddAlpha from "../../atoms/AddAlpha/AddAlpha";
import Card from "../Card";

import { useCardData } from "../../../../hooks/useCardsData";

const Sidebar: React.FC<{ addActive: () => void }> = (props) => {
  const { productBacklog } = useCardData();

  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 min-w-[25rem] h-[calc(100vh - 1rem)] rounded-3xl m-8 overflow-hidden relative">
      <div className="flex flex-col items-center" key="unique">
        <Logo />

        <div className="mb-12 2k:mb-[10rem] 4k:mb-[20rem] 4k:mt-16">
          <AddAlpha addActive={props.addActive} />
        </div>

        <div>
          <ChecklistParent />
          {productBacklog &&
            productBacklog.states != null &&
            productBacklog.states.map((state) => (
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
