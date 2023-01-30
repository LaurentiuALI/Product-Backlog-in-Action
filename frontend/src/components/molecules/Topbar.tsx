import React from "react";

import pattern from "../../icons/pattern.svg";

const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-primary-100 to-primary-200 w-9/12 h-32 mt-8 rounded-3xl ">
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <img src={pattern} alt="pattern" className="w-24 h-24" />
          <p className="text-white font-semibold text-lg">
            Splitting Product Backlog Items
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={pattern} alt="pattern" className="w-24 h-24" />
          <p className="text-white font-semibold text-lg">Relative Estimating</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
