import workproduct from "../../icons/workProduct.svg";
import { useComponentStore } from "../../../../stores/ComponentStore";
import { useCardData } from "../../../../hooks/useCardsData";

const ChecklistParent = (props: any) => {
  const { productBacklog } = useCardData();

  const setComponent = useComponentStore((state: any) => state.setComponent);

  return (
    <div className="flex flex-row items-center ml-4 mb-6">
      <img
        src={workproduct}
        alt="Work Product"
        className="ml-10 opacity-90 mr-5"
        onClick={() => setComponent(productBacklog)}
      />
      <p
        className="text-lg text-white opacity-80 font-semibold font-inter"
        onClick={() => setComponent(productBacklog)}
      >
        {productBacklog != null && productBacklog.title}
      </p>
    </div>
  );
};

export default ChecklistParent;
