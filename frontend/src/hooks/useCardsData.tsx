import axios from "axios";
import { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { useCardStore } from "../stores/CardStore";
import { type IComponent } from "../stores/ComponentStore";
import { type IUser, useUserStore } from "../stores/UserStore";
const BaseURL =
  "https://product-backlog-in-action-ts-production.up.railway.app";
// const BaseURL = "localhost:4000";
const getCards = async (user: IUser | null) => {
  const token = user?.token;
  const response = await axios.get(`${BaseURL}/api/v1/cards/`, {
    headers: {
      Authorization: `Bearer ${token as string}`,
    },
  });
  return response.data as IComponent[];
};

const useCardsData = (user: IUser | null) => {
  return useQuery("cards", () => getCards(user));
};

const updateCard = async ({
  card,
  _id,
  user,
}: {
  card: IComponent;
  _id: string;
  user: IUser | null;
}) => {
  return await axios.patch(`${BaseURL}/api/v1/cards/${_id}`, card, {
    headers: {
      Authorization: `Bearer ${user?.token as string}`,
    },
  });
};
const useUpdateCard = () => {
  return useMutation(updateCard);
};

export const useCardData = () => {
  const { user, setUser } = useUserStore();

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

  const { isLoading, error, data } = useCardsData(user);

  const { mutate: patchCard } = useUpdateCard();

  useEffect(() => {
    if (isLoading || error || data == null) {
      // Data is still being fetched or an error occurred, so return early
      return;
    }

    if (data != null) {
      setProductBacklog(data);
      setSplittingProductBacklogItems(data);
      setRelativeEstimating(data);
    }
  }, [
    data,
    error,
    isLoading,
    setProductBacklog,
    setRelativeEstimating,
    setSplittingProductBacklogItems,
    setUser,
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
