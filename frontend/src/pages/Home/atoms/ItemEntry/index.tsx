import { type To, useNavigate } from "react-router-dom";
import { type IAlphaItem } from "../../../../hooks/useItemData";

const ItemEntry: React.FC<{ item: IAlphaItem }> = (props) => {
  const navigate = useNavigate();
  const myNavigate = (url: To) => navigate(url);

  return (
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
  );
};

export default ItemEntry;
