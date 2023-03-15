import { useEffect, useState } from "react";
import { useCardData } from "../../../../hooks/useCardsData";
import { useComponentStore } from "../../../../stores/ComponentStore";
import { PatternCard } from "./PatternCard";
import { StateCard } from "./StateCard";
import { WorkProductCard } from "./WorkProductCard";

const Card = () => {
  const component = useComponentStore((state: any) => state.component);
  const { productBacklog, patchCard, setProductBacklog } = useCardData();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    patchCard({ card: { ...productBacklog }, _id: productBacklog._id });
    setProductBacklog({ ...productBacklog });
  }, [flag]);

  if (
    component != null &&
    component.hasOwnProperty("type") &&
    component.type === "Work Product"
  ) {
    return <WorkProductCard component={component} />;
  } else if (component != null && !component.hasOwnProperty("type")) {
    return <StateCard component={component} flag={flag} setFlag={setFlag} />;
  } else if (
    component != null &&
    component.hasOwnProperty("type") &&
    component.type === "Pattern"
  ) {
    return <PatternCard component={component} />;
  } else {
    return <></>;
  }
};

export default Card;
