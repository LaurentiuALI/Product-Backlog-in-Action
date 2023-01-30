import React from "react";

const AddAlpha = (props: { icon: string | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <div className="flex flex-row justify-start items-center">
      <img src={props.icon} alt="add" className="ml-10 opacity-90 mr-3" />
      <p className="text-lg text-white opacity-80 font-semibold font-inter">
        {props.text}
      </p>
    </div>
  );
};

export default AddAlpha;
