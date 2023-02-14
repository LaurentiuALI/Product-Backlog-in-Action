import { useState, useEffect } from "react";

import Sidebar from "../components/molecules/Sidebar";
import Topbar from "../components/molecules/Topbar";
import Add from "../components/molecules/Add";
import ItemsList from "../components/molecules/ItemsList";

import { useCardData } from "../hooks/useCardsData";

const Home = () => {
  const {
    isLoading,
    error,
    productBacklog,
    splittingProductBacklogItems,
    relativeEstimating,
  } = useCardData();

  const [component, setcomponent] = useState(null);
  const [addActive, setaddActive] = useState(false);

  const toggleAdd = () => {
    setaddActive(!addActive);
  };

  const changeComponent = (title: any) => {
    setcomponent(title);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div className="bg-white-100 h-screen w-screen flex ">
      {productBacklog != null && (
        <Sidebar
          changeComponent={changeComponent}
          component={
            component == null
              ? { ...productBacklog, type: "component" }
              : component
          }
          addActive={toggleAdd}
        />
      )}
      {splittingProductBacklogItems != null && relativeEstimating != null && (
        <div className="w-9/12 flex flex-col">
          <Topbar
            SPBI={splittingProductBacklogItems}
            RE={relativeEstimating}
            changeComponent={changeComponent}
          />
          {!addActive && <ItemsList className="absolute" />}
          {addActive && <Add className="relative" />}
        </div>
      )}
    </div>
  );
};

export default Home;
