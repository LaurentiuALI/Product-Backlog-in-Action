import stateAchieved from "../icons/stateAchieved.svg";
import stateUnachieved from "../icons/stateUnachieved.svg";
import state25 from "../icons/state25.svg";
import state50 from "../icons/state50.svg";
import state75 from "../icons/state75.svg";

import {
  type IComponentState,
  useComponentStore,
} from "../../../stores/ComponentStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useItemData } from "../../../hooks/useItemData";

interface IInnerStateProps {
  _id: string;
  id: string;
  name: string;
  prevState?: boolean;
  style?: React.CSSProperties;
  card: IComponentState;
}
interface IStateProps {
  id: string;
  name: string;
  prevState?: boolean;
  style?: React.CSSProperties;
  card: IComponentState;
}

const InnerState: React.FC<IInnerStateProps> = ({
  id,
  _id,
  name,
  card,
  prevState,
}) => {
  const { alphaItem } = useItemData(_id);

  const [done, setDone] = useState(false);

  const [statePercentage, setStatePercentage] = useState(stateUnachieved);
  const percent = Math.ceil((card.status * 100) / card.checklist.length);

  const setComponentState = useComponentStore(
    (state) => state.setComponentState
  );

  const setComponent = useComponentStore((state) => state.setComponent);

  useEffect(() => {
    if (percent == 0 || prevState == false) {
      setStatePercentage(stateUnachieved);
    } else if (percent > 0 && percent < 50) {
      setStatePercentage(state25);
    } else if (percent == 50) {
      setStatePercentage(state50);
    } else if (percent > 50 && percent <= 75) {
      setStatePercentage(state75);
    } else if (percent == 100) {
      setStatePercentage(stateAchieved);
    }
    // set timeout to wait a 100ms for alphaItem to be fetched
    setTimeout(() => {
      if (alphaItem != null && alphaItem.cards != null) {
        const tc = alphaItem.cards.filter(
          (card) => card.title === "Test Case"
        )[0];

        const dod = alphaItem.cards.filter(
          (card) => card.title === "Definition of Done"
        )[0];
        const ready = alphaItem.cards
          .filter((card) => card.type === "Alpha")[0]
          .states.filter((state) => state.name === "Ready for Development")[0];
        if (
          tc.status == 3 &&
          dod.status == 2 &&
          ready.status == 4 &&
          prevState == true
        ) {
          setDone(true);
        } else {
          setDone(false);
        }
      }
    }, 0);
  }, [alphaItem, done, name, percent, prevState]);

  return (
    <div
      className={`flex flex-col items-center h-fit w-fit mr-[5rem] 2k:mr-[10rem] ${
        name == "Done" && !done ? "group cursor-not-allowed relative" : ""
      } ${name.length > 30 ? "mt-14 " : " "} ${
        name.length > 25 ? "4k:mt-10" : ""
      }`}
      onClick={() => {
        if (name == "Done" && !done) {
          alert(
            "Ready for Development must be achieved and Test Case, Definition of Done must be complete to procced."
          );
          return;
        }
        setComponentState(card);
        setComponent(null);
      }}
    >
      <h1 className="group-hover:opacity-100 w-80 opacity-0 absolute bottom-28 group-hover:text-opacity-100 bg-white border-2 border-gray-400 text-center font-semibold rounded-xl p-3">
        Ready for Development must be achieved and Test Case, Definition of Done
        must be complete to procced.
      </h1>
      <img
        id={id}
        src={statePercentage}
        alt="activity"
        className={`${
          name == "Done" && !done ? "opacity-20" : ""
        } w-max h-auto object-cover 2k:w-40 4k:w-60`}
      />
      <h1
        className={`text-lg text-${
          card.status == card.checklist.length && prevState == true
            ? "orange-500"
            : "black"
        } font-semibold font-inter text-center ml-2 4k:text-3xl 4k:ml-4 ${
          name.length > 30 ? "max-w-[10rem]" : ""
        } 4k:max-w-[25rem]`}
      >
        {name}
      </h1>
    </div>
  );
};
const State: React.FC<IStateProps> = ({ id, name, card, prevState }) => {
  const { id: _id } = useParams<{ id: string }>();
  if (!_id) return <div> Invalid ID </div>;
  return (
    <InnerState
      _id={_id}
      id={id}
      name={name}
      card={card}
      prevState={prevState}
    />
  );
};
export default State;
