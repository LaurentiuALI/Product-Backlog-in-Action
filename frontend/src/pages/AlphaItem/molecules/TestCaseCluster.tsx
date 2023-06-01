import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Xarrow, { useXarrow } from "react-xarrows";
import { useItemData } from "../../../hooks/useItemData";
import Activity from "../atoms/Activity";
import State from "../atoms/State";
import TestCase from "../atoms/TestCase";

const lines = [
  { from: "testCaseBox1", to: "testCaseBox2" },
  { from: "testCaseBox2", to: "testCaseBox3" },
  { from: "testCaseBox3", to: "testCaseBox4" },
  { from: "testCaseBox4", to: "testCaseBox5" },
];

const InnerTestCaseCluster: React.FC<{ id: string }> = ({ id }) => {
  const [ready, setready] = useState(false);

  const { prepareAProductBacklogItem, testCase, alphaItem } = useItemData(id);

  useEffect(() => {
    if (prepareAProductBacklogItem != null && testCase != null) {
      setTimeout(() => {
        setready(true);
      }, 100);
    }
  }, [prepareAProductBacklogItem, testCase, alphaItem]);

  return (
    <div
      onLoad={useXarrow()}
      className="aboslute flex items-center mt-16 2k:mb-[10rem] 4k:mb-[12rem] 4k:mt-[12rem]"
    >
      {prepareAProductBacklogItem != null && (
        <Activity
          id="testCaseBox1"
          card={prepareAProductBacklogItem}
          style={{ marginRight: 200 }}
        />
      )}
      {testCase != null && (
        <TestCase
          key={testCase.title}
          id="testCaseBox2"
          name={testCase.title}
          style={{ marginLeft: 0, marginRight: 80 }}
          card={testCase}
        />
      )}

      {testCase != null &&
        testCase.states.map((state, index) => (
          <State
            key={state.name}
            id={`testCaseBox${index + 3}`}
            name={state.name}
            style={{ marginRight: 50 }}
            card={state}
          />
        ))}

      {ready == true &&
        lines.map((line) => (
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
};

const TestCaseCluster = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Invalid ID</div>;
  return <InnerTestCaseCluster id={id} />;
};

export default TestCaseCluster;
