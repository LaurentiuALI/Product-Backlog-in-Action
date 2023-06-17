import { useQuery } from "react-query";
import { getAlphaItems } from "../../../../api/AlphaItemApi";
import { useUserStore } from "../../../../stores/UserStore";
import IssuesTab from "./IssuesTab";

const ItemsList = () => {
  const { user } = useUserStore();
  const { data } = useQuery(["alphaItems"], () => getAlphaItems(user));

  const readyEntry =
    data != null
      ? data.filter((item) => item.state == "Ready For Development")
      : null;
  const doneEntry =
    data != null ? data.filter((item) => item.state == "Done") : null;
  const identifiedEntry =
    data != null ? data.filter((item) => item.state == "Identified") : null;

  const identifiedStoryPoints = identifiedEntry?.reduce((acc, item) => {
    return acc + item.storyPoints.valueOf();
  }, 0);
  const readyStoryPoints = readyEntry?.reduce((acc, item) => {
    return acc + item.storyPoints.valueOf();
  }, 0);
  const doneStoryPoints = doneEntry?.reduce((acc, item) => {
    return acc + item.storyPoints.valueOf();
  }, 0);

  return (
    <div className="overflow-auto h-[calc(100vh - 120px)] mt-2">
      <IssuesTab
        entries={identifiedEntry}
        title="Identified"
        totalIssues={data?.length}
        storyPoints={identifiedStoryPoints}
      />
      <div className="flex 3xl:flex-row flex-col 4k:flex-col">
        <div className="mr-6 basis-0 grow shrink">
          <IssuesTab
            entries={readyEntry}
            title="Ready For Development"
            totalIssues={data?.length}
            storyPoints={readyStoryPoints}
          />
        </div>
        <div className="basis-0 grow shrink">
          <IssuesTab
            entries={doneEntry}
            title="Done"
            totalIssues={data?.length}
            storyPoints={doneStoryPoints}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
