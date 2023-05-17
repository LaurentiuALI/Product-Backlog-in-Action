import { useEffect } from "react";
import { useUserStore, type IUser } from "../stores/UserStore";

export const useAuth = () => {
  const { user: something, setUser } = useUserStore();

  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (userString != null) {
      const user = JSON.parse(userString) as IUser;
      if (user) {
        setUser(user);
      }
    }
  }, [setUser]);
};
