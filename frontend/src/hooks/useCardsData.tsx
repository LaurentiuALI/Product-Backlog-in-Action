import axios from "axios";
import { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { useCardStore } from "../stores/CardStore";
import { type IComponent } from "../stores/ComponentStore";

const getCards = async () => {
  const response = await axios.get("http://localhost:4000/api/v1/cards/");
  return response.data as IComponent[];
};

const useCardsData = () => {
  return useQuery("cards", getCards);
};

const updateCard = async ({ card, _id }: { card: IComponent; _id: string }) => {
  return await axios.patch(`http://localhost:4000/api/v1/cards/${_id}`, card);
};
const useUpdateCard = () => {
  return useMutation(updateCard);
};

export const useCardData = () => {
  const productBacklog = useCardStore((state) => state.productBacklog);

  const setProductBacklog = useCardStore((state) => state.setProductBacklog);

  const splittingProductBacklogItems = useCardStore(
    (state) => state.splittingProductBacklogItems
  );
  const setSplittingProductBacklogItems = useCardStore(
    (state) => state.setSplittingProductBacklogItems
  );

  const relativeEstimating = useCardStore((state) => state.relativeEstimating);
  const setRelativeEstimating = useCardStore(
    (state) => state.setRelativeEstimating
  );

  const { isLoading, error, data } = useCardsData();

  const { mutate: patchCard } = useUpdateCard();

  useEffect(() => {
    if (data != null) {
      setProductBacklog(data);
      setSplittingProductBacklogItems(data);
      setRelativeEstimating(data);
    }
  }, [
    data,
    setProductBacklog,
    setRelativeEstimating,
    setSplittingProductBacklogItems,
  ]);

  return {
    isLoading,
    error,
    data,
    productBacklog,
    splittingProductBacklogItems,
    relativeEstimating,
    patchCard,
    setProductBacklog,
  };
};
