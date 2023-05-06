import pattern from "../../icons/pattern.svg";
import { useCardData } from "../../../../hooks/useCardsData";
import { useComponentStore } from "../../../../stores/ComponentStore";

const Topbar = () => {
  const { relativeEstimating, splittingProductBacklogItems } = useCardData();
  const setComponent = useComponentStore((state) => state.setComponent);

  return (
    <div className="bg-gradient-to-r from-primary-100 to-primary-200 h-32 mt-8 rounded-3xl w-[calc(100vw-500px)]">
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
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
        <div className="flex flex-col items-center">
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
      </div>
    </div>
  );
};

export default Topbar;
