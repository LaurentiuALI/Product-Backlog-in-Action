import React, { useState } from "react";
import radio1 from "../../icons/radio-1.svg";
import radio2 from "../../icons/radio-2.svg";
import radio3 from "../../icons/radio-3.svg";
import radio5 from "../../icons/radio-5.svg";
import radio8 from "../../icons/radio-8.svg";

const CustomCheckbox = (props: any) => {
  const radio: any = {
    1: radio1,
    2: radio2,
    3: radio3,
    5: radio5,
    8: radio8,
  };
  return (
    <label onClick={() => props.onCustomClick(props.number)}>
      <input
        type="radio"
        className="peer absolute opacity-0 h-0 w-0"
        name="test"
      />
      <img
        className="cursor-pointer opacity-30 peer-checked:opacity-100"
        src={radio[props.number]}
      />
    </label>
  );
};

export default CustomCheckbox;
