import { useParams } from "react-router-dom";
import Topbar from "./Topbar";
import { useItemData } from "../../hooks/useItemData";

const AlphaItem = () => {
  const { id } = useParams<{ id: string }>();

  const { isLoading, error, data } = useItemData(id);
  console.log(data);

  return (
    <div className="bg-gradient-to-b from-primary-100 to-primary-200 h-screen">
      <Topbar />

      <div>
        <h1></h1>
      </div>
      <div>
        <h1>Alpha Item {id}</h1>
      </div>
      <div>
        <h1>Alpha Item {id}</h1>
      </div>
    </div>
  );
};

export default AlphaItem;
