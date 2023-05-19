import pattern from "../../icons/pattern.svg";
import { useCardData } from "../../../../hooks/useCardsData";
import { useComponentStore } from "../../../../stores/ComponentStore";
import { useUserStore } from "../../../../stores/UserStore";
import { BiLogOut } from "react-icons/bi";
import { useLogout } from "../../../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { logout } = useLogout();
  const { relativeEstimating, splittingProductBacklogItems } = useCardData();
  const setComponent = useComponentStore((state) => state.setComponent);

  return (
    <div className="bg-gradient-to-r from-primary-100 to-primary-200 h-32 mt-8 rounded-3xl w-[calc(100vw-500px)]">
      <div className="flex justify-around">
        <div className="flex flex-col items-center cursor-pointer">
          <img
            src={pattern}
            alt="splittingProductBacklogItems"
            className="w-24 h-24"
            onClick={() => {
              setComponent(splittingProductBacklogItems);
            }}
          />
          <p
            className="text-white font-semibold text-lg"
            onClick={() => {
              setComponent(splittingProductBacklogItems);
            }}
          >
            {splittingProductBacklogItems?.title}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-white font-bold text-2xl">
            {user && user.projectName}
          </p>
        </div>
        <div className="flex flex-col items-center  cursor-pointer">
          <img
            src={pattern}
            alt="relativeEstimating"
            className="w-24 h-24"
            onClick={() => {
              setComponent(relativeEstimating);
            }}
          />
          <p
            className="text-white font-semibold text-lg"
            onClick={() => {
              setComponent(relativeEstimating);
            }}
          >
            {relativeEstimating?.title}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center cursor-pointer"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <BiLogOut className="w-12 h-12 text-white" />
          <p className="text-white font-bold text-2xl">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
