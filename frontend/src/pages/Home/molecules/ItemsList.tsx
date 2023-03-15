import { useQuery } from "react-query";
import { getAlphaItems } from "../../../api/AlphaItemApi";
import ItemEntry from "../atoms/ItemEntry";

const ItemsList: any = () => {
  const { isLoading, error, data } = useQuery(["alphaItems"], getAlphaItems);

  return (
    <div>
      {data &&
        data.map((item: any) => <ItemEntry item={item} key={item._id} />)}
    </div>
  );
};

export default ItemsList;
