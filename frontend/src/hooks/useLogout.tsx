import { useUserStore } from "../stores/UserStore";

export const useLogout = () => {
  const { setUser } = useUserStore();
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return { logout };
};
