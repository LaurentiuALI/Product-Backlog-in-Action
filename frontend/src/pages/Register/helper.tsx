import axios from "axios";
import {
  productBacklogCard,
  relativeEstimating,
  splittingProductBacklogItems,
} from "./constants";

export const registerUserCards = async (token: string | null) => {
  try {
    await axios.post("http://localhost:4000/api/v1/cards", productBacklogCard, {
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    });

    await axios.post(
      "http://localhost:4000/api/v1/cards",
      splittingProductBacklogItems,
      {
        headers: {
          Authorization: `Bearer ${token as string}`,
        },
      }
    );

    await axios.post("http://localhost:4000/api/v1/cards", relativeEstimating, {
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    });
  } catch {
    console.log("Error in registering product backlog card");
  }
};
