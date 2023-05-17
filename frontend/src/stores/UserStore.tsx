import { create } from "zustand";

const getUser = () => {
  const userString = localStorage.getItem("user");

  if (userString != null) {
    const user = JSON.parse(userString) as IUser;
    return user;
  }
  return null;
};

export interface IUser {
  projectName: string;
  token: string;
}

interface IStore {
  user: IUser | null;
  setUser: (_user: IUser | null) => void;
}

export const useUserStore = create<IStore>()((set) => ({
  user: getUser(),
  setUser: (_user: IUser | null) => set(() => ({ user: _user })),
}));
