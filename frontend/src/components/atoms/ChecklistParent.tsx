import React from "react";

import workproduct from "../../icons/workProduct.svg";

const ChecklistItem = (props: any) => {
  return (
    <div className="flex flex-row items-center ml-4 mb-6">
      <img src={workproduct} alt="add" className="ml-10 opacity-90 mr-5" />
      <p className="text-lg text-white opacity-80 font-semibold font-inter">
        {props.text}
      </p>
    </div>
  );
};

export default ChecklistItem;
