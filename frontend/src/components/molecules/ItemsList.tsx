import React, { useEffect } from "react";

import { useQuery } from "react-query";
import { getAlphaItems } from "../../api/AlphaItemApi";
import ItemEntry from "../atoms/ItemEntry";

const ItemsList: any = () => {
  const { isLoading, error, data } = useQuery(["alphaItems"], getAlphaItems);

  // useEffect(() => {
  //   // console.log(data);
  // }, [data]);

  return (
    <div>
      {data &&
        data.map((item: any) => <ItemEntry item={item} key={item._id} />)}
    </div>
  );
};

export default ItemsList;
