import ItemEntryReady from "../../atoms/ItemEntry/ItemEntryReady";
import ListHeader from "../../atoms/ListHeader";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import axios from "axios";

const Ready = ({ entries }: any) => {
  const updateAlphaItem = async ({ alphaItem, _id }: any) => {
    //change alpha item states based on inner checklists
    return await axios.patch(
      `http://localhost:4000/api/v1/alphaItems/${_id}`,
      alphaItem
    );
  };

  const [issues, setIssues] = useState<any[]>([]);
  useEffect(() => {
    if (entries != null) {
      setIssues(entries.sort((a: any, b: any) => a.priority - b.priority));
    }
  }, [entries]);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items: any = issues;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    for (const item in items) {
      items[item].priority = Number(item);
    }
    setIssues(items);
    for (const item in issues) {
      updateAlphaItem({ alphaItem: issues[item], _id: issues[item]._id });
    }
  }
  return (
    entries && (
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="min-w-[35vw] max-w-[100vw]">
          <ListHeader header="Ready For Development" />

          <Droppable droppableId="readyIssues">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {issues &&
                  issues.map((item: any, index: any) => {
                    return (
                      <ItemEntryReady
                        item={item}
                        key={item._id}
                        index={index}
                      />
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    )
  );
};

export default Ready;
