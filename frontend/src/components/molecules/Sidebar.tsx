import { useState } from "react";

import { useQuery } from "react-query";
import { getCards } from "../../api/CardApi";

import Logo from "../atoms/Logo";
import ChecklistItem from "../atoms/ChecklistItem";
import ChecklistParent from "../atoms/ChecklistParent";
import AddAlpha from "../atoms/AddAlpha";
import Card from "../molecules/Card";

const Sidebar = (props: any) => {
  const [component, setcomponent] = useState(null);

  const changeComponent = (title: any) => {
    setcomponent(title);
  };

  const cardsQuery = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  if (cardsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (cardsQuery.isError) {
    return <div>{JSON.stringify(cardsQuery.error)}</div>;
  }

  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 w-100 h-220 rounded-3xl m-8 overflow-hidden relative">
      <Logo />

      <AddAlpha />

  
      {cardsQuery.data.map((card: any) => (
        <>
          <div className="flex flex-col justify-center mt-14">
            <ChecklistParent text={card.title} />
            {card.states.map((state: any) => (
              <>
                <ChecklistItem
                  key={state._id}
                  title={state.name}
                  status={state.status}
                  optional={state.optional}
                  customClick={() =>
                    changeComponent({ ...state, title: card.title })
                  }
                />
              </>
            ))}
            <div className="flex justify-center mt-6 ">
              <div className="absolute bottom-0">
                <Card component={component} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Sidebar;
