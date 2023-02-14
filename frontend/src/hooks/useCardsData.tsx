import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useCardStore } from "../stores/CardStore";

const getCards = async () => {
  const response = await axios.get("http://localhost:4000/api/v1/cards/");
  return response.data;
};

const useCardsData = () => {
  return useQuery("cards", getCards);
};

export const useCardData = () => {
  const productBacklog = useCardStore((state: any) => state.productBacklog);
  const setProductBacklog = useCardStore(
    (state: any) => state.setProductBacklog
  );

  const splittingProductBacklogItems = useCardStore(
    (state: any) => state.splittingProductBacklogItems
  );
  const setSplittingProductBacklogItems = useCardStore(
    (state: any) => state.setSplittingProductBacklogItems
  );

  const relativeEstimating = useCardStore(
    (state: any) => state.relativeEstimating
  );
  const setRelativeEstimating = useCardStore(
    (state: any) => state.setRelativeEstimating
  );

  const { isLoading, error, data } = useCardsData();

  useEffect(() => {
    if (data != null) {
      setProductBacklog(data);
      setSplittingProductBacklogItems(data);
      setRelativeEstimating(data);
    }
  }, [data, productBacklog, relativeEstimating, splittingProductBacklogItems]);

  return {
    isLoading,
    error,
    data,
    productBacklog,
    splittingProductBacklogItems,
    relativeEstimating,
  };
};
