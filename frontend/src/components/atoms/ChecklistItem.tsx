import React from "react";
import stateAchieved from "../../icons/stateAchieved.svg";
import stateUnachieved from "../../icons/stateUnachieved.svg";
import stateUnachievedOpt from "../../icons/stateUnachievedOpt.svg";

interface Props {
  status: number;
  optional: boolean;
  title: string;
  customClick?: () => void;
}

const ChecklistItem = (props: Props) => {
  if (props.status == 0 && props.optional == false) {
    return (
      <div className="flex flex-row items-center ml-4 mb-6">
        <img
          onClick={props.customClick}
          src={stateUnachieved}
          alt="add"
          className="ml-10 opacity-90 mr-5"
        />
        <p
          className="text-lg text-white opacity-80 font-semibold font-inter"
          onClick={props.customClick}
        >
          {props.title}
        </p>
      </div>
    );
  } else if (props.status == 0 && props.optional == true) {
    return (
      <div className="flex flex-row items-center ml-4 mb-6">
        <img
          onClick={props.customClick}
          src={stateUnachievedOpt}
          alt="add"
          className="ml-10 opacity-90 mr-5"
        />
        <p
          onClick={props.customClick}
          className="text-lg text-white opacity-80 font-semibold font-inter"
        >
          {props.title}
        </p>
      </div>
    );
  } else if (props.status == 1) {
    return (
      <div className="flex flex-row items-center ml-4 mb-6">
        <img
          onClick={props.customClick}
          src={stateAchieved}
          alt="add"
          className="ml-10 opacity-90 mr-5"
        />
        <p
          onClick={props.customClick}
          className="text-lg text-white opacity-80 font-semibold font-inter"
        >
          {props.title}
        </p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ChecklistItem;
