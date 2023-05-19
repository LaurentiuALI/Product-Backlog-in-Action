import workproduct from "../../icons/workProduct.svg";
import { useComponentStore } from "../../../../stores/ComponentStore";
import { useCardData } from "../../../../hooks/useCardsData";

const ChecklistParent: React.FC = () => {
  const { productBacklog } = useCardData();

  const { setComponent, setComponentState } = useComponentStore(
    (state) => state
  );

  return (
    <div
      className="flex flex-row items-center ml-4 mb-6 cursor-pointer"
      onClick={() => {
        setComponentState(null);
        setComponent(productBacklog);
      }}
    >
      <img
        src={workproduct}
        alt="Work Product"
        className="ml-10 opacity-90 mr-5"
      />
      <p className="text-lg text-white opacity-80 font-semibold font-inter">
        {productBacklog != null && productBacklog.title}
      </p>
    </div>
  );
};

export default ChecklistParent;
