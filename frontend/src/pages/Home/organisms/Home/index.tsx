import { useState, useEffect } from "react";

import Sidebar from "../../molecules/Sidebar";
import Topbar from "../../molecules/Topbar";
import Add from "../../molecules/Add";
import ItemsList from "../../molecules/ItemsList";

import { useCardData } from "../../../../hooks/useCardsData";
import { useComponentStore } from "../../../../stores/ComponentStore";

const Home = () => {
  const { setComponent, setComponentState } = useComponentStore();
  const {
    isLoading,
    error,
    productBacklog,
    splittingProductBacklogItems,
    relativeEstimating,
  } = useCardData();

  useEffect(() => {
    setComponent(null);
    setComponentState(null);
  }, [setComponent, setComponentState]);

  const [addActive, setaddActive] = useState(false);

  const toggleAdd = () => {
    setaddActive(!addActive);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="bg-white-100 h-screen w-screen flex">
      {productBacklog != null && <Sidebar addActive={toggleAdd} />}
      {splittingProductBacklogItems != null && relativeEstimating != null && (
        <div className="min-w-[30rem] h-screen flex flex-col mr-12">
          <Topbar />
          {!addActive && <ItemsList />}
          {addActive && <Add toggleAdd={toggleAdd} />}
        </div>
      )}
    </div>
  );
};

export { Home };
