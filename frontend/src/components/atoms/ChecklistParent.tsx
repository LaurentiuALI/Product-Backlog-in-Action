import workproduct from "../../icons/workProduct.svg";
import { useComponentStore } from "../../stores/ComponentStore";
import { useCardData } from "../../hooks/useCardsData";

const ChecklistItem = (props: any) => {
  const { productBacklog } = useCardData();

  console.log(productBacklog);

  const component = useComponentStore((state: any) => state.component);
  const setComponent = useComponentStore((state: any) => state.setComponent);

  return (
    <div className="flex flex-row items-center ml-4 mb-6">
      <img
        src={workproduct}
        alt="add"
        className="ml-10 opacity-90 mr-5"
        onClick={() => setComponent(productBacklog, "component")}
      />
      <p
        className="text-lg text-white opacity-80 font-semibold font-inter"
        onClick={() => setComponent(productBacklog, "component")}
      >
        {props.text}
      </p>
    </div>
  );
};

export default ChecklistItem;
