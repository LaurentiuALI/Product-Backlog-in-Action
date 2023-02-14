import React from "react";

import pattern from "../../icons/pattern.svg";

const Topbar = (props: any) => {
  return (
    <div className="bg-gradient-to-r from-primary-100 to-primary-200 w-full h-32 mt-8 rounded-3xl ">
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <img
            src={pattern}
            alt="pattern"
            className="w-24 h-24"
            onClick={() =>
              props.changeComponent({ ...props.SPBI, type: "pattern" })
            }
          />
          <p
            className="text-white font-semibold text-lg"
            onClick={() =>
              props.changeComponent({ ...props.SPBI, type: "pattern" })
            }
          >
            {props.SPBI.title}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={pattern}
            alt="pattern"
            className="w-24 h-24"
            onClick={() =>
              props.changeComponent({ ...props.RE, type: "pattern" })
            }
          />
          <p
            className="text-white font-semibold text-lg"
            onClick={() =>
              props.changeComponent({ ...props.RE, type: "pattern" })
            }
          >
            {props.RE.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
