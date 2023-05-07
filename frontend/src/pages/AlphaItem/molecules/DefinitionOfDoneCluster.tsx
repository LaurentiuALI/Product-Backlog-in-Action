import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Xarrow from "react-xarrows";
import { useItemData } from "../../../hooks/useItemData";
import Activity from "../atoms/Activity";
import State from "../atoms/State";
import TestCase from "../atoms/TestCase";

const lines = [
  { from: "DefOfDoneBox1", to: "DefOfDoneBox2" },
  { from: "DefOfDoneBox2", to: "DefOfDoneBox3" },
  { from: "DefOfDoneBox3", to: "DefOfDoneBox4" },
];

const InnerDefinitionOfDoneCluster: React.FC<{ id: string }> = ({ id }) => {
  const { definitionOfDone, agreeDefinitionOfDone } = useItemData(id);
  const [ready, setready] = useState(false);

  useEffect(() => {
    if (agreeDefinitionOfDone != null && definitionOfDone != null) {
      setTimeout(() => {
        setready(true);
      }, 100);
    }
  }, [agreeDefinitionOfDone, definitionOfDone, ready]);

  if (ready && agreeDefinitionOfDone && definitionOfDone)
    return (
      <div className="flex justify-center items-center mt-16">
        <Activity
          id="DefOfDoneBox1"
          card={agreeDefinitionOfDone}
          style={{ marginRight: 80 }}
        />
        <TestCase
          id="DefOfDoneBox2"
          name={definitionOfDone.title}
          card={definitionOfDone}
          style={{ marginLeft: 50, marginRight: 0 }}
        />
        {definitionOfDone.states.map((state, index) => (
          <State
            key={index}
            index={index}
            id={`DefOfDoneBox${index + 3}`}
            name={state.name}
            card={state}
            style={{ marginRight: 50, marginTop: 30 }}
          />
        ))}
        {lines.map((line) => (
          <Xarrow
            key={line.from + line.to}
            start={line.from}
            end={line.to}
            color="#FB760D"
            strokeWidth={5}
            path="smooth"
            showHead={false}
          />
        ))}
      </div>
    );
  else {
    return <div>Loading...</div>;
  }
};

const DefinitionOfDoneCluster = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div> Invalid ID </div>;
  return <InnerDefinitionOfDoneCluster id={id} />;
};

export default DefinitionOfDoneCluster;
