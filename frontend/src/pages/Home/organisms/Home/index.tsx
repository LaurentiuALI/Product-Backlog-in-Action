import { useState, useEffect } from "react";

import Sidebar from "../../molecules/Sidebar";
import Topbar from "../../molecules/Topbar";
import Add from "../../molecules/Add";
import ItemsList from "../../molecules/ItemsList";

import { useCardData } from "../../../../hooks/useCardsData";
import { useComponentStore } from "../../../../stores/ComponentStore";

import { type IAxiosError } from "./interface";

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
    return (
      <div
        role="status"
        className="flex justify-center items-center h-screen w-screen"
      >
        <svg
          aria-hidden="true"
          className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-200"
          viewBox="0 0 100 101"
          fill="none"
        >
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  } else if (error) {
    return (
      <div className="flex-col text-5xl bg-orange-300 text-white h-screen w-screen flex justify-center items-center">
        <p className="text-5xl text-white mb-10">
          Something went wrong. Please try again later.
        </p>
        <p>{`Error: ${(error as IAxiosError).response.data.error}`}</p>
      </div>
    );
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
