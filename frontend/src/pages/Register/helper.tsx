import axios from "axios";
import {
  productBacklogCard,
  relativeEstimating,
  splittingProductBacklogItems,
} from "./constants";
const BaseURL =
  "https://product-backlog-in-action-ts-production.up.railway.app";

export const registerUserCards = async (token: string | null) => {
  try {
    await axios.post(`${BaseURL}/api/v1/cards`, productBacklogCard, {
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    });

    await axios.post(`${BaseURL}/api/v1/cards`, splittingProductBacklogItems, {
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    });

    await axios.post(`${BaseURL}/api/v1/cards`, relativeEstimating, {
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    });
  } catch {
    console.log("Error in registering product backlog card");
  }
};
