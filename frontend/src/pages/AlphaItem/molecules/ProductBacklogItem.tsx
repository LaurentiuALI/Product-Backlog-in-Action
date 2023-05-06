import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Xarrow from "react-xarrows";
import { useItemData } from "../../../hooks/useItemData";
import Alpha from "../atoms/Alpha";
import State from "../atoms/State";

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
    <div className="flex flex-col items-center mt-10 ml-40">
      <Alpha
        id="ProductBacklogItemBox1"
        name={productBacklogItem.title}
        style={{ marginBottom: 100 }}
        card={productBacklogItem}
      />

      {productBacklogItem.states.map((state, index) => (
        <State
          key={`ProductBacklogItemBox${index + 2}`}
          index={index}
          id={`ProductBacklogItemBox${index + 2}`}
          name={state.name}
          card={state}
          style={{ marginBottom: 100, flexDirection: "row" }}
        />
      ))}

      {ready &&
        lines.map((line, index) => (
          <Xarrow
            key={`line-${index}`}
            start={line.from}
            end={line.to}
            color="white"
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

export default ProductBacklogItem;
