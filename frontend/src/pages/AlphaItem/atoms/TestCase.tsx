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
      className="flex flex-col items-center h-fit w-fit relative 2k:ml-[30rem]"
      onClick={() => setComponent(props.card)}
    >
      <img
        id={props.id}
        src={workProduct}
        alt="activity"
        className="w-max h-auto object-cover 2k:w-24 4k:w-40 "
      />
      <h1 className="text-lg text-orange-500 font-semibold font-inter text-center 4k:text-3xl">
        {props.name}
      </h1>
    </div>
  );
};

export default TestCase;
