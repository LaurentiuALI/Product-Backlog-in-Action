import axios from "axios";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useAlphaItemStore } from "../stores/AlphaItemStore";

const getAlphaItem = async (_id: string | undefined) => {
  const response = await axios.get(
    `http://localhost:4000/api/v1/alphaItems/${_id}`
  );
  return response.data;
};

export const useItemsData = (_id: string | undefined) => {
  return useQuery("cards", () => getAlphaItem(_id));
};

const updateAlphaItem = async ({ alphaItem, _id }: any) => {

  //change alpha item states based on inner checklists

  const alpha = alphaItem.cards.filter((card: any) => card.type === "Alpha")[0];
  let status_alpha = 0;
  for (let state in alpha.states) {
    if (alpha.states[state].status === alpha.states[state].checklist.length) {
      status_alpha += 1;
    }
  }

  alpha.status = status_alpha;
  if (alpha.status === 0 || alpha.status === 1) {
    alphaItem.state = "Identified";
  } else if (alpha.status === 2) {
    alphaItem.state = "Ready For Development";
  } else {
    alphaItem.state = "Done";
  }


  // send patch request to backend with the new values to be changed
  return await axios.patch(
    `http://localhost:4000/api/v1/alphaItems/${_id}`,
    alphaItem
  );
};

const useUpdateAlphaItem = () => {
  return useMutation(updateAlphaItem);
};

export const useItemData = (_id: string | undefined) => {
  const prepareAProductBacklogItem = useAlphaItemStore(
    (state: any) => state.prepareAProductBacklogItem
  );
  const setPrepareAProductBacklogItem = useAlphaItemStore(
    (state: any) => state.setPrepareAProductBacklogItem
  );

  const definitionOfDone = useAlphaItemStore(
    (state: any) => state.definitionOfDone
  );
  const setDefinitionOfDone = useAlphaItemStore(
    (state: any) => state.setDefinitionOfDone
  );

  const testCase = useAlphaItemStore((state: any) => state.testCase);
  const setTestCase = useAlphaItemStore((state: any) => state.setTestCase);

  const productBacklogItem = useAlphaItemStore(
    (state: any) => state.productBacklogItem
  );
  const setProductBacklogItem = useAlphaItemStore(
    (state: any) => state.setProductBacklogItem
  );

  const agreeDefinitionOfDone = useAlphaItemStore(
    (state: any) => state.agreeDefinitionOfDone
  );
  const setAgreeDefinitionOfDone = useAlphaItemStore(
    (state: any) => state.setAgreeDefinitionOfDone
  );

  const invest = useAlphaItemStore((state: any) => state.invest);
  const setInvest = useAlphaItemStore((state: any) => state.setInvest);

  const alphaItem = useAlphaItemStore((state: any) => state.alphaItem);
  const setAlphaItem = useAlphaItemStore((state: any) => state.setAlphaItem);

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
  }, [data]);

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
