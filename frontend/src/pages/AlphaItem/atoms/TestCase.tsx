import workProduct from "../icons/workProduct.svg";
import {
  type IComponent,
  useComponentStore,
} from "../../../stores/ComponentStore";

interface ITestCaseProps {
  id: string;
  name: string;
  card: IComponent;
  style?: React.CSSProperties;
}

const TestCase: React.FC<ITestCaseProps> = (props) => {
  const setComponent = useComponentStore((state) => state.setComponent);

  return (
    <div
      className="flex flex-col items-center h-fit w-fit relative "
      style={props.style}
      onClick={() => setComponent(props.card)}
    >
      <img
        id={props.id}
        src={workProduct}
        alt="activity"
        className="w-max h-auto object-cover"
      />
      <h1 className="text-lg text-white font-semibold font-inter text-center">
        {props.name}
      </h1>
    </div>
  );
};

export default TestCase;
