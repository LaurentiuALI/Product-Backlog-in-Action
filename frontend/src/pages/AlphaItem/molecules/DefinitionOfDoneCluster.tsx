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

const DefinitionOfDoneCluster = () => {
  const { id } = useParams<{ id: string }>();
  const { definitionOfDone, agreeDefinitionOfDone } = useItemData(id);
  const [ready, setready] = useState(false);

  useEffect(() => {
    if (agreeDefinitionOfDone != null && definitionOfDone != null) {
      setTimeout(() => {
        setready(true);
      }, 100);
    }
  }, [agreeDefinitionOfDone, definitionOfDone, ready]);

  if (ready)
    return (
      <div className="w-full h-1/3 flex justify-center items-center">
        <Activity
          id="DefOfDoneBox1"
          card={agreeDefinitionOfDone}
          style={{ marginRight: 100 }}
        />
        <TestCase
          id="DefOfDoneBox2"
          name={definitionOfDone.title}
          card={definitionOfDone}
        />
        {definitionOfDone.states.map((state: any, index: any) => (
          <State
            key={index}
            index={index}
            id={`DefOfDoneBox${index + 3}`}
            name={state.name}
            card={state}
            style={{ marginLeft: 30 }}
          />
        ))}
        {lines.map((line) => (
          <Xarrow
            key={line.from + line.to}
            start={line.from}
            end={line.to}
            color="white"
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

export default DefinitionOfDoneCluster;
