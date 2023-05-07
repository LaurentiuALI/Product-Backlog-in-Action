import { useQuery } from "react-query";
import { getAlphaItems } from "../../../../api/AlphaItemApi";
import IssuesTab from "./IssuesTab";

const ItemsList = () => {
  const { data } = useQuery(["alphaItems"], getAlphaItems);
  const readyEntry =
    data != null
      ? data.filter((item) => item.state == "Ready For Development")
      : null;
  const doneEntry =
    data != null ? data.filter((item) => item.state == "Done") : null;
  const identifiedEntry =
    data != null ? data.filter((item) => item.state == "Identified") : null;
  return (
    <div className="overflow-auto h-[calc(100vh - 120px)] mt-2">
      <IssuesTab entries={identifiedEntry} title="Identified" />
      <div className="flex 3xl:flex-row flex-col 4k:flex-col">
        <div className="mr-6 basis-0 grow shrink">
          <IssuesTab entries={readyEntry} title="Ready For Development" />
        </div>
        <div className="basis-0 grow shrink">
          <IssuesTab entries={doneEntry} title="Done" />
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
