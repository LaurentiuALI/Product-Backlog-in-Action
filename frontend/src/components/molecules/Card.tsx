import React from "react";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB7F25",
    },
  },
});

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#FB7F25" : "#FB7F25",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Card = (props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <div className="bg-white flex flex-col h-80 w-80 border rounded-t-3xl">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold mt-4 mb-6 text-2xl">{props.title}</h1>

        <h2 className="font-semibold text-xl"> Items Gathered </h2>
        <div className="w-28 h-px bg-primary-100 ml-4"></div>
      </div>

      <ThemeProvider theme={theme}>
        <div className="flex justify-center items-center mt-4 ml-4">
          <IOSSwitch />
          <p>There is a list of things of value to build into the product</p>
        </div>
        <div className="flex justify-center items-center mt-4 ml-4">
          <IOSSwitch  />
          <p>There is a list of things of value to build into the product</p>
        </div>
        <div className="flex justify-center items-center mt-4 ml-4">
          <IOSSwitch />
          <p>There is a list of things of value to build into the product</p>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Card;
