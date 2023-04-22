import { useNavigate } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";

const ItemEntry = (props: any) => {
  const navigate = useNavigate();
  const myNavigate = (url: any) => navigate(url);

  return (
    <Draggable draggableId={props.item._id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            className="flex items-center justify-evenly border-b-2 border-primary-100 h-20"
            onClick={() => myNavigate(`/${props.item._id}`)}
          >
            <div className="group basis-0 flex-grow flex-shrink ml-8 mr-6">
              <div className="max-h-[3rem] overflow-hidden relative">
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
