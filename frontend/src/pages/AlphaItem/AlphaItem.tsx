import { useParams } from "react-router-dom";
import Topbar from "./atoms/Topbar";
import { useItemData } from "../../hooks/useItemData";
import Group from "./organisms/Group";
import { useEffect } from "react";
import { useComponentStore } from "../../stores/ComponentStore";
const AlphaItem = () => {
  const setComponent = useComponentStore((state: any) => state.setComponent);

  useEffect(() => {
    setComponent(null);
  }, []);

  const { id } = useParams<{ id: string }>();

  const {
    isLoading,
    error,
    prepareAProductBacklogItem,
    definitionOfDone,
    testCase,
    productBacklogItem,
    agreeDefinitionOfDone,
    invest,
    alphaItem,
  } = useItemData(id);

  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 h-screen overflow-hidden cursor-default">
      <Topbar card={invest} />
      <Group />
    </div>
  );
};

export default AlphaItem;
