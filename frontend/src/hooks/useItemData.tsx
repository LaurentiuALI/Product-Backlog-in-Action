import axios from "axios";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useAlphaItemStore } from "../stores/AlphaItemStore";
import { type IComponent } from "../stores/ComponentStore";

export interface IAlphaItem {
  _id: string;
  cards: IComponent[];
  description: string;
  name: string;
  priority: number;
  state: string;
  storyPoints: number;
}

const getAlphaItem = async (_id: string) => {
  const response = await axios.get<IAlphaItem>(
    `http://localhost:4000/api/v1/alphaItems/${_id}`
  );
  return response.data;
};

export const useItemsData = (_id: string) => {
  return useQuery("cards", () => getAlphaItem(_id));
};

const updateAlphaItem = async ({
  alphaItem,
  _id,
}: {
  alphaItem: IAlphaItem;
  _id: string;
}) => {
  //change alpha item states based on inner checklists

  const alphaComponent = alphaItem.cards.filter(
    (card) => card.type === "Alpha"
  )[0];
  let status_alpha = 0;
  for (const state of alphaComponent.states) {
    if (state.status === state.checklist.length) {
      status_alpha += 1;
    }
  }

  alphaComponent.status = status_alpha;
  if (alphaComponent.status === 0 || alphaComponent.status === 1) {
    alphaItem.state = "Identified";
  } else if (alphaComponent.status === 2) {
    alphaItem.state = "Ready For Development";
  } else {
    alphaItem.state = "Done";
  }

  // send patch request to backend with the new values to be changed
  return await axios.patch<IAlphaItem>(
    `http://localhost:4000/api/v1/alphaItems/${_id}`,
    alphaItem
  );
};

const useUpdateAlphaItem = () => {
  return useMutation(updateAlphaItem);
};

export const useItemData = (_id: string) => {
  const prepareAProductBacklogItem = useAlphaItemStore(
    (state) => state.prepareAProductBacklogItem
  );
  const setPrepareAProductBacklogItem = useAlphaItemStore(
    (state) => state.setPrepareAProductBacklogItem
  );

  const definitionOfDone = useAlphaItemStore((state) => state.definitionOfDone);
  const setDefinitionOfDone = useAlphaItemStore(
    (state) => state.setDefinitionOfDone
  );

  const testCase = useAlphaItemStore((state) => state.testCase);
  const setTestCase = useAlphaItemStore((state) => state.setTestCase);

  const productBacklogItem = useAlphaItemStore(
    (state) => state.productBacklogItem
  );
  const setProductBacklogItem = useAlphaItemStore(
    (state) => state.setProductBacklogItem
  );

  const agreeDefinitionOfDone = useAlphaItemStore(
    (state) => state.agreeDefinitionOfDone
  );
  const setAgreeDefinitionOfDone = useAlphaItemStore(
    (state) => state.setAgreeDefinitionOfDone
  );

  const invest = useAlphaItemStore((state) => state.invest);
  const setInvest = useAlphaItemStore((state) => state.setInvest);

  const alphaItem = useAlphaItemStore((state) => state.alphaItem);
  const setAlphaItem = useAlphaItemStore((state) => state.setAlphaItem);

  const { isLoading, error, data } = useItemsData(_id);

  const { mutate: patchAlphaItem } = useUpdateAlphaItem();

  useEffect(() => {
    if (data != null) {
      setPrepareAProductBacklogItem(data.cards);
      setDefinitionOfDone(data.cards);
      setTestCase(data.cards);
      setProductBacklogItem(data.cards);
      setAgreeDefinitionOfDone(data.cards);
      setInvest(data.cards);
      setAlphaItem(data);
    }
  }, [
    data,
    setAgreeDefinitionOfDone,
    setAlphaItem,
    setDefinitionOfDone,
    setInvest,
    setPrepareAProductBacklogItem,
    setProductBacklogItem,
    setTestCase,
  ]);

  return {
    isLoading,
    error,
    prepareAProductBacklogItem,
    definitionOfDone,
    testCase,
    productBacklogItem,
    agreeDefinitionOfDone,
    invest,
    alphaItem,
    setAlphaItem,
    patchAlphaItem,
  };
};
