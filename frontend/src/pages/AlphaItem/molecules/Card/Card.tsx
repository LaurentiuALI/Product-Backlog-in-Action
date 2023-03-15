import { useEffect, useState } from "react";
import { useComponentStore } from "../../store/ComponentStore";
import { useItemData } from "../../../../hooks/useItemData";
import { useParams } from "react-router-dom";
import { TypeCard } from "./TypeCard";
import { NonTypeCard } from "./NonTypeCard";

const Card = () => {
  const { id } = useParams<{ id: string }>();

  const component = useComponentStore((state: any) => state.component);
  const { alphaItem, patchAlphaItem, setAlphaItem } = useItemData(id);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (component != null) {
      patchAlphaItem({ alphaItem: { ...alphaItem }, _id: id });
      setAlphaItem({ ...alphaItem });
    }
  }, [flag, component]);

  if (component != null && component.hasOwnProperty("type")) {
    return <TypeCard component={component} />;
  } else if (component != null && !component.hasOwnProperty("type")) {
    return <NonTypeCard component={component} flag={flag} setFlag={setFlag} />;
  } else {
    return <div></div>;
  }
};

export default Card;
