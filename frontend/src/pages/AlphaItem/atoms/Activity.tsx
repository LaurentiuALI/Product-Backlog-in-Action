import activityIcon from "../icons/activityIcon.svg";
import type { IComponent } from "../../../stores/ComponentStore";
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
      className="flex flex-col items-center h-fit w-fit relative mr-[5rem]"
      onClick={() => {
        setComponent(props.card);
      }}
    >
      <img
        id={props.id}
        src={activityIcon}
        alt="activity"
        className="w-max h-auto object-cover 2k:w-36 4k:w-60"
      />
      <h1 className="text-lg text-orange-500 max-w-[30rem] font-semibold font-inter text-center 4k:text-3xl break-words">
        {props.card.title}
      </h1>
    </div>
  );
};

export default Activity;
