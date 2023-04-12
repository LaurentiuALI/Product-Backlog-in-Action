import { useQuery } from "react-query";
import { getAlphaItems } from "../../../../api/AlphaItemApi";
import ItemEntry from "../../atoms/ItemEntry";
import ListHeader from "../../atoms/ListHeader";
import Identified from "./Identified";
import Ready from "./Ready";
import Done from "./Done";

const ItemsList: any = () => {
  const { data } = useQuery(["alphaItems"], getAlphaItems);
  let readyEntry =
    data != null
      ? data.filter((item: any) => item.state == "Ready For Development")
      : null;
  let doneEntry =
    data != null ? data.filter((item: any) => item.state == "Done") : null;
  let identifiedEntry =
    data != null
      ? data.filter((item: any) => item.state == "Identified")
      : null;
  return (
    <div className="overflow-auto h-100">
      <Ready entries={readyEntry} />
      <div className="flex">
        <div className="mr-6">
          <Identified entries={identifiedEntry} />
        </div>
        <Done entries={doneEntry} />
      </div>
    </div>
  );
};

export default ItemsList;
