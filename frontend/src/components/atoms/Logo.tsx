import React from "react";

const Logo = (props: { logo: string | undefined; }) => {
  return (
    <div className="flex justify-center">
      <img src={props.logo} alt="logo" className="mt-4 mb-14 opacity-90" />
    </div>
  );
};

export default Logo;
