import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Xarrow from "react-xarrows";
import { useItemData } from "../../../hooks/useItemData";
import Alpha from "../atoms/Alpha";
import State from "../atoms/State";
import type { IComponent } from "../../../stores/ComponentStore";

const lines = [
  { from: "ProductBacklogItemBox1", to: "ProductBacklogItemBox2" },
  { from: "ProductBacklogItemBox2", to: "ProductBacklogItemBox3" },
  { from: "ProductBacklogItemBox3", to: "ProductBacklogItemBox4" },
];

const InnerProductBacklogItem: React.FC<{ id: string }> = ({ id }) => {
  const { productBacklogItem } = useItemData(id);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (productBacklogItem != null) {
      setTimeout(() => {
        setReady(true);
      }, 100);
    }
  }, [productBacklogItem, ready]);

  if (!productBacklogItem) return <div>Loading...</div>;
  return (
    <div className="flex items-center mt-16 2k:mb-[10rem] 4k:mt-32">
      <Alpha
        id="ProductBacklogItemBox1"
        name={productBacklogItem.title}
        style={{ marginRight: 100 }}
        card={productBacklogItem}
      />

      {productBacklogItem.states.map((state, index) => {
        let done = true;
        if (index == 1) {
          done = computePrevStat(productBacklogItem, index);
        } else if (index == 2) {
          done =
            computePrevStat(productBacklogItem, index) &&
            computePrevStat(productBacklogItem, index - 1);
        }
        return (
          <State
            key={`ProductBacklogItemBox${index + 2}`}
            id={`ProductBacklogItemBox${index + 2}`}
            name={state.name}
            card={state}
            prevState={done}
            style={{ marginLeft: 80, flexDirection: "column" }}
          />
        );
      })}

      {ready &&
        lines.map((line, index) => (
          <Xarrow
            key={`line-${index}`}
            start={line.from}
            end={line.to}
            color="#FB760D"
            strokeWidth={5}
            path="grid"
            showHead={false}
          />
        ))}
    </div>
  );
};

const ProductBacklogItem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Invalid ID</div>;
  return <InnerProductBacklogItem id={id} />;
};

function computePrevStat(component: IComponent, index: number) {
  return (
    component.states[index - 1].status ==
    component.states[index - 1].checklist.length
  );
}

export default ProductBacklogItem;
