import { useState } from "react";
import { useComponentStore } from "../../../../stores/ComponentStore";
import { useItemData } from "../../../../hooks/useItemData";
import { useParams } from "react-router-dom";
import { TypeCard } from "./TypeCard";
import { NonTypeCard } from "./NonTypeCard";

const InnerCard: React.FC<{ id: string }> = ({ id }) => {
  const component = useComponentStore((state) => state.component);
  const stateComponent = useComponentStore((state) => state.componentState);
  const { alphaItem, patchAlphaItem, setAlphaItem } = useItemData(id);
  const [flag, setFlag] = useState(false);

  const onSwitchFlag = (flag: boolean) => {
    setFlag(flag);
    if ((component != null || stateComponent != null) && alphaItem) {
      patchAlphaItem({ alphaItem: { ...alphaItem }, _id: id });
      setAlphaItem({ ...alphaItem });
    }
  };

  if (component != null) {
    return <TypeCard component={component} />;
  } else if (stateComponent != null) {
    return (
      <NonTypeCard
        stateComponent={stateComponent}
        flag={flag}
        setFlag={onSwitchFlag}
      />
    );
  } else {
    return <div></div>;
  }
};

const Card = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div> Invalid ID </div>;
  return <InnerCard id={id} />;
};

export default Card;
