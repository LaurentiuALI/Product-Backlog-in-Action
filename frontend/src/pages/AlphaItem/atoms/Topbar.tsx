import pbIcon from "../icons/pbIcon.svg";
import pattern from "../icons/pattern.svg";
import { useComponentStore } from "../../../stores/ComponentStore";
import { useItemData } from "../../../hooks/useItemData";
import { useParams } from "react-router-dom";

const InnerTopbar: React.FC<{ id: string }> = ({ id }) => {
  const { alphaItem, invest } = useItemData(id);
  const setComponent = useComponentStore((state) => state.setComponent);
  return (
    <div className="border-b-2 border-b-white flex justify-around items-center">
      <img src={pbIcon} className="p-4" />
      <div className="flex flex-col items-center max-w-[60rem] overflow-x-auto">
        <p className="text-white font-semibold text-2xl mb-4 break-all text-center">
          {alphaItem != null && alphaItem.name}
        </p>
        <p className="text-white font-semibold text-l text-center break-all">
          {alphaItem != null && alphaItem.description}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={pattern}
          className="p-4"
          onClick={() => setComponent(invest)}
        />

        <p
          className="text-white font-semibold text-2xl"
          onClick={() => {
            setComponent(invest);
          }}
        >
          {invest !== null && invest.title}
        </p>
      </div>
    </div>
  );
};

const Topbar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div> Invalid ID </div>;
  return <InnerTopbar id={id} />;
};

export default Topbar;
