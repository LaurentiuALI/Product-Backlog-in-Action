import Card from "../molecules/Card";
import InnerDefinitionOfDoneCluster from "../molecules/DefinitionOfDoneCluster";
import ProductBacklogItem from "../molecules/ProductBacklogItem";
import TestCaseCluster from "../molecules/TestCaseCluster";

const Group = () => {
  return (
    <div className="h-full w-full flex">
      <div className="h-full w-3/6">
        <TestCaseCluster />
        <InnerDefinitionOfDoneCluster />
      </div>
      <div className="w-1/2 h-full flex">
        <ProductBacklogItem />
        <Card />
      </div>
    </div>
  );
};

export default Group;
