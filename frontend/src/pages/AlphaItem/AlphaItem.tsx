import Topbar from "./atoms/Topbar";
import Group from "./organisms/Group";

const AlphaItem = () => {
  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 h-screen overflow-hidden cursor-default">
      <Topbar />
      <Group />
    </div>
  );
};

export default AlphaItem;
