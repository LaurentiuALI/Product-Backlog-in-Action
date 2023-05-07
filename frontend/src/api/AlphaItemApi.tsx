import axios from "axios";
import { type IAlphaItem } from "../hooks/useItemData";

export const getAlphaItems = async () => {
  const response = await axios.get<IAlphaItem[]>(
    "http://localhost:4000/api/v1/alphaItems/"
  );
  return response.data;
};

export const addAlphaItem = async (
  item: Omit<IAlphaItem, "_id" | "cards" | "priority" | "state">
) => {
  const response = await axios.post<IAlphaItem>(
    "http://localhost:4000/api/v1/alphaItems/",
    item
  );
  return response.data;
};

export const deleteAlphaItem = async (id: string) => {
  await axios.delete(`http://localhost:4000/api/v1/alphaItems/${id}`);
}