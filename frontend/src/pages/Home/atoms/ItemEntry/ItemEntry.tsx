import { type To, useNavigate } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import { useComponentStore } from "../../../../stores/ComponentStore";
import { type IAlphaItem } from "../../../../hooks/useItemData";
import { useMutation, useQueryClient } from "react-query";
import { deleteAlphaItem } from "../../../../api/AlphaItemApi";
import { useUserStore } from "../../../../stores/UserStore";

interface IItemEntryProps {
  item: IAlphaItem;
  index: number;
}

const ItemEntry: React.FC<IItemEntryProps> = (props) => {
  const [setComponent, setComponentState] = useComponentStore((state) => [
    state.setComponent,
    state.setComponentState,
  ]);

  const { user } = useUserStore();

  const queryClient = useQueryClient();
  const handleDelete = useMutation(deleteAlphaItem, {
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["alphaItems"] });
    },
  });
  const navigate = useNavigate();
  const myNavigate = (url: To) => {
    setComponent(null);
    setComponentState(null);
    navigate(url);
  };
  console.log("🚀 ~ file: ItemEntry.tsx:35 ~ props.item:", props.item);

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
          >
            <div
              className="group basis-0 flex-grow flex-shrink ml-8 mr-6"
              onDoubleClick={() => myNavigate(`/${props.item._id}`)}
            >
              <div className="max-h-[3rem] overflow-hidden relativ">
                {props.item.name}
              </div>
            </div>
            <div
              className="basis-0 flex-grow flex-shrink "
              onDoubleClick={() => myNavigate(`/${props.item._id}`)}
            >
              <h3>{props.item.storyPoints}</h3>
            </div>
            <div
              className="basis-0 flex-grow flex-shrink"
              onDoubleClick={() => myNavigate(`/${props.item._id}`)}
            >
              <h4>{props.item.state}</h4>
            </div>
            <div
              className="relative mr-8 text-primary-100 font-extrabold text-xl cursor-pointer"
              onClick={() =>
                handleDelete.mutate({ id: props.item._id, user: user })
              }
            >
              X
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ItemEntry;
