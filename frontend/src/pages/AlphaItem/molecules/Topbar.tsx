import { useParams } from "react-router-dom";
import { useItemData } from "../../../hooks/useItemData";

const InnerTopbar: React.FC<{ id: string }> = ({ id }) => {
  const { alphaItem } = useItemData(id);

  return (
    <div className="bg-gradient-to-r from-primary-100 to-primary-200 h-32 mb-8 rounded-3xl mr-2 w-[calc(100vw-500px)] flex justify-center items-center 4k:h-56 4k:w-[calc(100vw-800px)] 4k:mt-20">
      <p className="text-white text-3xl 4k:text-4xl font-bold text-center">
        {alphaItem != null && alphaItem.name}
      </p>
    </div>
  );
};

const Topbar: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div> Invalid ID </div>;
  return <InnerTopbar id={id} />;
};

export default Topbar;
