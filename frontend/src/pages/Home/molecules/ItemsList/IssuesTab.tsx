import ItemEntry from "../../atoms/ItemEntry/ItemEntry";
import ListHeader from "../../atoms/ListHeader";
import {
  DragDropContext,
  type DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import axios from "axios";
import { type IAlphaItem } from "../../../../hooks/useItemData";
import { useUserStore } from "../../../../stores/UserStore";
const BaseURL =
  "https://product-backlog-in-action-ts-production.up.railway.app";
interface IIssuesTabProps {
  entries: IAlphaItem[] | null;
  title: string;
}

const IssuesTab: React.FC<IIssuesTabProps> = ({ entries, title }) => {
  const { user } = useUserStore();
  const token = user?.token;
  const updateAlphaItem = async ({
    alphaItem,
    _id,
  }: {
    alphaItem: IAlphaItem;
    _id: string;
  }) => {
    //change alpha item states based on inner checklists
    return await axios.patch(`${BaseURL}/api/v1/alphaItems/${_id}`, alphaItem, {
      headers: {
        Authorization: `Bearer ${token as string}`,
      },
    });
  };

  const [issues, setIssues] = useState<IAlphaItem[]>([]);

  useEffect(() => {
    if (entries != null) {
      setIssues(entries.sort((a, b) => a.priority - b.priority));
    }
  }, [entries]);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = issues;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    items.forEach((item, index) => {
      item.priority = index;
    });

    setIssues(items);
    for (const item of issues) {
      void updateAlphaItem({ alphaItem: item, _id: item._id });
    }
  }
  return (
    entries && (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="max-w-[100vw] rounded-2xl">
          <ListHeader header={title} />

          <div className="border-2 border-primary-200">
            <div>
              <div className="flex items-center justify-evenly border-b-2 text-white border-primary-100 h-10 text-xl bg-primary-100">
                <div className="basis-0 flex-grow flex-shrink ml-6 break-all mr-6 font-bold">
                  <h2>Name</h2>
                </div>
                <div className="basis-0 flex-grow flex-shrink font-bold">
                  <h3>Story Points</h3>
                </div>
                <div className="basis-0 flex-grow flex-shrink font-bold">
                  <h4>State</h4>
                </div>
              </div>
            </div>
            <Droppable droppableId="readyIssues">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {issues &&
                    issues.map((item, index) => {
                      return (
                        <ItemEntry item={item} key={item._id} index={index} />
                      );
                    })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    )
  );
};

export default IssuesTab;
