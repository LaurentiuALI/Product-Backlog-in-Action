import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Xarrow, { refType } from "react-xarrows";
import { useItemData } from "../../../hooks/useItemData";
import Activity from "../atoms/Activity";
import State from "../atoms/State";
import TestCase from "../atoms/TestCase";
import { useComponentStore } from "../store/ComponentStore";

const lines = [
  { from: "testCaseBox1", to: "testCaseBox2" },
  { from: "testCaseBox2", to: "testCaseBox3" },
];

const TestCaseCluster = () => {
  const { id } = useParams<{ id: string }>();

  const [ready, setready] = useState(false);

  const { prepareAProductBacklogItem, testCase, alphaItem } = useItemData(id);

  const setComponent = useComponentStore((state: any) => state.setComponent);

  useEffect(() => {
    if (prepareAProductBacklogItem != null && testCase != null) {
      setTimeout(() => {
        setready(true);
      }, 100);
    }
  }, [prepareAProductBacklogItem, testCase, alphaItem]);

  return (
    <div className="w-full h-3/6 aboslute flex items-center justify-center">
      {prepareAProductBacklogItem != null && (
        <Activity id="testCaseBox1" card={prepareAProductBacklogItem} />
      )}
      {testCase != null && (
        <TestCase
          id="testCaseBox2"
          name={testCase.title}
          style={{ marginLeft: 30 }}
          card={testCase}
        />
      )}

      {testCase != null &&
        testCase.states.map(
          (state: any, index: any) =>
            (index == 0 ||
              testCase.states[index - 1].checklist.length ==
                testCase.states[index - 1].status) && (
              <State
                id={`testCaseBox${index + 3}`}
                index={index}
                name={state.name}
                style={{ marginLeft: 30 }}
                card={state}
              />
            )
        )}

      {ready == true &&
        lines.map((line: { from: refType; to: refType }) => (
          <Xarrow
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
};

export default TestCaseCluster;
