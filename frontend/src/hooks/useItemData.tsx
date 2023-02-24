import axios from "axios";
import { useQuery } from "react-query";

const getAlphaItem = async (_id: string | undefined) => {
  const response = await axios.get(
    `http://localhost:4000/api/v1/alphaItems/${_id}`
  );
  return response.data;
};

export const useItemData = (_id: string | undefined) => {
  return useQuery("cards", () => getAlphaItem(_id));
};


