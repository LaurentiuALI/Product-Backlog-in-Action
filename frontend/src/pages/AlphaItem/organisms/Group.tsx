import DefinitionOfDoneCluster from "../molecules/DefinitionOfDoneCluster";
import ProductBacklogItem from "../molecules/ProductBacklogItem";
import TestCaseCluster from "../molecules/TestCaseCluster";

const Group = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <ProductBacklogItem />
      <TestCaseCluster />
      <DefinitionOfDoneCluster />
    </div>
  );
};

export default Group;
