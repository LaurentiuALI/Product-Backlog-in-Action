import { useQuery } from "react-query";
import { getAlphaItems } from "../../../../api/AlphaItemApi";
import IssuesTab from "./IssuesTab";

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
      <IssuesTab entries={readyEntry} title="Ready For Development" />
      <div className="flex">
        <div className="mr-6">
          <IssuesTab entries={identifiedEntry} title="Identified" />
        </div>
        <IssuesTab entries={doneEntry} title="Done" />
      </div>
    </div>
  );
};

export default ItemsList;
