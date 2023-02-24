import stateAchieved from "../../icons/stateAchieved.svg";
import stateUnachieved from "../../icons/stateUnachieved.svg";
import stateUnachievedOpt from "../../icons/stateUnachievedOpt.svg";

import { useCardData } from "../../hooks/useCardsData";
import { useComponentStore } from "../../stores/ComponentStore";

interface Props {
  state: any;
}

const ChecklistItem = ({ state }: Props) => {
  const { productBacklog } = useCardData();
  const { setComponent } = useComponentStore((state: any) => state);

  if (state.status == 0 && state.optional == false) {
    return (
      <div className="flex flex-row items-center ml-4 mb-6">
        <img
          onClick={() =>
            setComponent({ ...state, _id: productBacklog._id , title: productBacklog.title }, "state")
          }
          src={stateUnachieved}
          alt="add"
          className="ml-10 opacity-90 mr-5"
        />
        <p
          className="text-lg text-white opacity-80 font-semibold font-inter"
          onClick={() =>
            setComponent({ ...state, _id: productBacklog._id , title: productBacklog.title }, "state")
          }
        >
          {state.name}
        </p>
      </div>
    );
  } else if (state.status == 0 && state.optional == true) {
    return (
      <div className="flex flex-row items-center ml-4 mb-6">
        <img
          onClick={() =>
            setComponent({ ...state, _id: productBacklog._id , title: productBacklog.title }, "state")
          }
          src={stateUnachievedOpt}
          alt="add"
          className="ml-10 opacity-90 mr-5"
        />
        <p
          onClick={() =>
            setComponent({ ...state, _id: productBacklog._id , title: productBacklog.title }, "state")
          }
          className="text-lg text-white opacity-80 font-semibold font-inter"
        >
          {state.name}
        </p>
      </div>
    );
  } else if (state.status == 1) {
    return (
      <div className="flex flex-row items-center ml-4 mb-6">
        <img
          onClick={() =>
            setComponent({ ...state, _id: productBacklog._id , title: productBacklog.title }, "state")
          }
          src={stateAchieved}
          alt="add"
          className="ml-10 opacity-90 mr-5"
        />
        <p
          onClick={() =>
            setComponent({ ...state, _id: productBacklog._id , title: productBacklog.title }, "state")
          }
          className="text-lg text-white opacity-80 font-semibold font-inter"
        >
          {state.name}
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ChecklistItem;
