import Sidebar from "./atoms/Sidebar";
import Topbar from "./molecules/Topbar";
import Group from "./organisms/Group";

const AlphaItem = () => {
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
};

export default AlphaItem;
