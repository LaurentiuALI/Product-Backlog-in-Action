import pattern from "../../icons/pattern.svg";
import { useCardData } from "../../../../hooks/useCardsData";
import { useComponentStore } from "../../../../stores/ComponentStore";

const Topbar = (props: any) => {
  const { relativeEstimating, splittingProductBacklogItems } = useCardData();
  const setComponent = useComponentStore((state: any) => state.setComponent);

  return (
    <div className="bg-gradient-to-r from-primary-100 to-primary-200 w-full h-32 mt-8 rounded-3xl ">
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <img
            src={pattern}
            alt="splittingProductBacklogItems"
            className="w-24 h-24"
            onClick={() => {
              setComponent(splittingProductBacklogItems, "pattern");
            }}
          />
          <p
            className="text-white font-semibold text-lg"
            onClick={() => {
              setComponent(splittingProductBacklogItems, "pattern");
            }}
          >
            {splittingProductBacklogItems.title}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={pattern}
            alt="relativeEstimating"
            className="w-24 h-24"
            onClick={() => {
              setComponent(relativeEstimating, "pattern");
            }}
          />
          <p
            className="text-white font-semibold text-lg"
            onClick={() => {
              setComponent(relativeEstimating, "pattern");
            }}
          >
            {relativeEstimating.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
