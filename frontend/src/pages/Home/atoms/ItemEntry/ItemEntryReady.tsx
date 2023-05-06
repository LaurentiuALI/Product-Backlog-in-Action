import { type To, useNavigate } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import { useComponentStore } from "../../../../stores/ComponentStore";
import { type IAlphaItem } from "../../../../hooks/useItemData";

interface IItemEntryProps {
  item: IAlphaItem;
  index: number;
}

const ItemEntry: React.FC<IItemEntryProps> = (props) => {
  const [setComponent, setComponentState] = useComponentStore((state) => [
    state.setComponent,
    state.setComponentState,
  ]);
  const navigate = useNavigate();
  const myNavigate = (url: To) => {
    setComponent(null);
    setComponentState(null);
    navigate(url);
  };

  return (
    <Draggable draggableId={props.item._id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            className={`flex bg-${
              props.index % 2 ? "primary-100 bg-opacity-10" : "transparent"
            } items-center justify-evenly  h-20 min-w-[38rem] max-w-[100%]`}
            onClick={() => myNavigate(`/${props.item._id}`)}
          >
            <div className="group basis-0 flex-grow flex-shrink ml-8 mr-6">
              <div className="max-h-[3rem] overflow-hidden relativ">
                {props.item.name}
              </div>
            </div>
            <div className="basis-0 flex-grow flex-shrink ">
              <h3>{props.item.storyPoints}</h3>
            </div>
            <div className="basis-0 flex-grow flex-shrink">
              <h4>{props.item.state}</h4>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ItemEntry;
