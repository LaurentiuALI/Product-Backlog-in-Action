import stateAchieved from "../icons/stateAchieved.svg";
import stateUnachieved from "../icons/stateUnachieved.svg";
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
  style?: React.CSSProperties;
  card: IComponentState;
}
interface IStateProps {
  id: string;
  name: string;
  style?: React.CSSProperties;
  card: IComponentState;
}

const InnerState: React.FC<IInnerStateProps> = ({ id, _id, name, card }) => {
  const { alphaItem } = useItemData(_id);

  const [done, setDone] = useState(false);

  const setComponentState = useComponentStore(
    (state) => state.setComponentState
  );

  const setComponent = useComponentStore((state) => state.setComponent);

  useEffect(() => {
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
        if (tc.status == 3 && dod.status == 2 && ready.status == 4) {
          setDone(true);
        } else {
          setDone(false);
        }
      }
    }, 0);
  }, [alphaItem, name]);

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
        src={
          card.status == card.checklist.length ? stateAchieved : stateUnachieved
        }
        alt="activity"
        className={`${
          name == "Done" && !done ? "opacity-20" : ""
        } w-max h-auto object-cover 2k:w-40 4k:w-60`}
      />
      <h1
        className={`text-lg text-${
          card.status == card.checklist.length ? "orange-500" : "black"
        } font-semibold font-inter text-center ml-2 4k:text-3xl 4k:ml-4 ${
          name.length > 30 ? "max-w-[10rem]" : ""
        } 4k:max-w-[25rem]`}
      >
        {name}
      </h1>
    </div>
  );
};
const State: React.FC<IStateProps> = ({ id, name, card }) => {
  const { id: _id } = useParams<{ id: string }>();
  if (!_id) return <div> Invalid ID </div>;
  return <InnerState _id={_id} id={id} name={name} card={card} />;
};
export default State;
