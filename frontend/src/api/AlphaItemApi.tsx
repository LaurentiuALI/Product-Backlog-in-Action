import axios from "axios";
import { type IAlphaItem } from "../hooks/useItemData";
import { type IUser } from "../stores/UserStore";

interface IAlphaItemUser extends IAlphaItem {
  user: IUser | null;
}
const BaseURL = "https://product-backlog-in-action.onrender.com";
// const BaseURL = "localhost:4000";
export const getAlphaItems = async (user: IUser | null) => {
  const response = await axios.get<IAlphaItem[]>(
    `${BaseURL}/api/v1/alphaItems/`,
    {
      headers: {
        Authorization: `Bearer ${user?.token as string}`,
      },
    }
  );

  return response.data;
};

export const addAlphaItem = async (
  item: Omit<IAlphaItemUser, "_id" | "cards" | "priority" | "state">
) => {
  const token = item.user?.token;
  const response = await axios.post<IAlphaItem>(
    `${BaseURL}/api/v1/alphaItems/`,
    item,
    {
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    }
  );
  return response.data;
};

export const deleteAlphaItem = async ({
  id,
  user,
}: {
  id: string;
  user: IUser | null;
}) => {
  await axios.delete(`${BaseURL}/api/v1/alphaItems/${id}`, {
    headers: {
      Authorization: `Bearer ${user?.token as string}`,
    },
  });
};
