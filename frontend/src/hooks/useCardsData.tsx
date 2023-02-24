import axios from "axios";
import { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { useCardStore } from "../stores/CardStore";

const getCards = async () => {
  const response = await axios.get("http://localhost:4000/api/v1/cards/");
  return response.data;
};

const useCardsData = () => {
  return useQuery("cards", getCards);
};

const updateCard = async ({ card, _id }: any) => {
  return await axios.patch(`http://localhost:4000/api/v1/cards/${_id}`, card);
};
const useUpdateCard = () => {
  return useMutation(updateCard);
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

  const { mutate } = useUpdateCard();

  useEffect(() => {
    if (data != null) {
      setProductBacklog(data);
      setSplittingProductBacklogItems(data);
      setRelativeEstimating(data);
    }
  }, [data]);

  return {
    isLoading,
    error,
    data,
    productBacklog,
    splittingProductBacklogItems,
    relativeEstimating,
    mutate,
  };
};
