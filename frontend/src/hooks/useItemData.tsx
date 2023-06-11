import axios from "axios";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useAlphaItemStore } from "../stores/AlphaItemStore";
import { type IComponent } from "../stores/ComponentStore";
import { type IUser, useUserStore } from "../stores/UserStore";

const BaseURL =
  "https://product-backlog-in-action-ts-production.up.railway.app";
// const BaseURL = "localhost:4000";
export interface IAlphaItem {
  _id: string;
  cards: IComponent[];
  description: string;
  name: string;
  priority: number;
  state: string;
  storyPoints: number;
  user: IUser | null;
}

const getAlphaItem = async (_id: string, user: IUser | null) => {
  const token = user?.token;

  const response = await axios.get<IAlphaItem>(
    `${BaseURL}/api/v1/alphaItems/${_id}`,
    {
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    }
  );
  return response.data;
};

export const useItemsData = (_id: string, user: IUser | null) => {
  return useQuery("cards", () => getAlphaItem(_id, user));
};

const updateAlphaItem = async ({
  alphaItem,
  _id,
}: {
  alphaItem: IAlphaItem;
  _id: string;
}) => {
  //keep cards status in sync based on inner checklists
  syncCardsStatus(alphaItem);

  //change done state accesibility based on ready for development state, definition of done and test case work product completness
  manageDoneStateAccesibility(alphaItem);

  //change alpha item states based on inner checklists
  manageAlphaItemStates(alphaItem);

  // send patch request to backend with the new values to be changed
  return await axios.patch<IAlphaItem>(
    `${BaseURL}/api/v1/alphaItems/${_id}`,
    alphaItem,
    {
      headers: {
        Authorization: `Bearer ${alphaItem.user?.token as string}`,
      },
    }
  );
};

const useUpdateAlphaItem = () => {
  return useMutation(updateAlphaItem);
};

export const useItemData = (_id: string) => {
  const { user } = useUserStore();

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

  const { isLoading, error, data } = useItemsData(_id, user);

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

function syncCardsStatus(alphaItem: IAlphaItem) {
  for (const card of alphaItem.cards) {
    if (card.states.length > 0) {
      let status = 0;
      for (const state of card.states) {
        if (state.status == state.checklist.length) {
          status += 1;
        }
      }
      card.status = status;
    }
  }
}

function manageAlphaItemStates(alphaItem: IAlphaItem) {
  const alphaComponent = alphaItem.cards.filter(
    (card) => card.type === "Alpha"
  )[0];

  for (const state of alphaComponent.states) {
    if (state.name == "Identified") {
      alphaItem.state = "Identified";
    }
    if (
      state.name == "Ready for Development" &&
      state.status === state.checklist.length
    ) {
      alphaItem.state = "Ready For Development";
    }
    if (state.name == "Done" && state.status === state.checklist.length) {
      alphaItem.state = "Done";
    }
  }
}

function manageDoneStateAccesibility(alphaItem: IAlphaItem) {
  const testCase = alphaItem.cards.filter(
    (card) => card.title === "Test Case"
  )[0].status;
  const definitionOfDone = alphaItem.cards.filter(
    (card) => card.title === "Definition of Done"
  )[0].status;
  const ready = alphaItem.cards
    .filter((card) => card.type === "Alpha")[0]
    .states.filter((state) => state.name === "Ready for Development")[0].status;

  const checklist = alphaItem.cards
    .filter((card) => card.type === "Alpha")[0]
    .states.filter((state) => state.name === "Done")[0].checklist;

  if (testCase != 3 || definitionOfDone != 2 || ready != 4) {
    for (const checklistItem of checklist) {
      checklistItem.checked = false;
    }

    alphaItem.cards
      .filter((card) => card.type === "Alpha")[0]
      .states.filter((state) => state.name === "Done")[0].status = 0;
  }
}
