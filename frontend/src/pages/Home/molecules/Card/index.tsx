import { useState } from "react";
import { useCardData } from "../../../../hooks/useCardsData";
import { useComponentStore } from "../../../../stores/ComponentStore";
import { PatternCard } from "./PatternCard";
import { StateCard } from "./StateCard";
import { WorkProductCard } from "./WorkProductCard";
import { useUserStore } from "../../../../stores/UserStore";

const Card = () => {
  const component = useComponentStore((state) => state.component);
  const stateComponent = useComponentStore((state) => state.componentState);
  const { productBacklog, patchCard, setProductBacklog } = useCardData();
  const [flag, setFlag] = useState(false);
  const { user } = useUserStore();

  const onSwitchFlag = (flag: boolean) => {
    setFlag(flag);
    if ((component != null || stateComponent != null) && productBacklog) {
      patchCard({
        card: { ...productBacklog },
        _id: productBacklog._id,
        user: user,
      });
      setProductBacklog([{ ...productBacklog }]);
    }
  };

  if (component != null && component.type === "Work Product") {
    return <WorkProductCard component={component} />;
  } else if (component != null && component.type === "Pattern") {
    return <PatternCard component={component} />;
  } else if (stateComponent != null) {
    return (
      <StateCard
        component={stateComponent}
        flag={flag}
        setFlag={onSwitchFlag}
      />
    );
  } else {
    return <></>;
  }
};

export default Card;
