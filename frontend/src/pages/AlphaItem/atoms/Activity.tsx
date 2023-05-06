import activityIcon from "../icons/activityIcon.svg";
import type { IComponent} from "../../../stores/ComponentStore";
import { useComponentStore } from "../../../stores/ComponentStore";

interface IActivityProps {
  id: string;
  card: IComponent;
  style?: React.CSSProperties;
}

const Activity: React.FC<IActivityProps> = (props) => {
  const setComponent = useComponentStore((state) => state.setComponent);

  return (
    <div
      className="flex flex-col items-center h-fit w-fit relative"
      style={props.style}
      onClick={() => {
        setComponent(props.card)
      }
    }

    >
      <img
        id={props.id}
        src={activityIcon}
        alt="activity"
        className="w-max h-auto object-cover"
      />
      <h1 className="text-lg text-white font-semibold font-inter text-center">
        {props.card.title}
      </h1>
    </div>
  );
};

export default Activity;
