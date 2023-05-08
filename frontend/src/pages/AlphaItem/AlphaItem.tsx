import Sidebar from "./atoms/Sidebar";
import Topbar from "./molecules/Topbar";
import Group from "./organisms/Group";
import { useItemData } from "../../hooks/useItemData";
import { useParams } from "react-router-dom";

const InnerAlphaItem: React.FC<{ id: string }> = ({ id }) => {
  const { alphaItem } = useItemData(id);

  if (alphaItem) {
    return (
      <div className="flex items-center h-screen overflow-hidden">
        <Sidebar />
        <div>
          <Topbar />
          <div className="h-[calc(100vh-190px)]">
            <Group />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-5xl bg-orange-300 text-white h-screen w-screen flex justify-center items-center">
        Issue not found
      </div>
    );
  }
};
const AlphaItem = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>404</div>;
  return <InnerAlphaItem id={id} />;
};

export default AlphaItem;
