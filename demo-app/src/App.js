import React from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Homepage from "./pages/HomePage";
import "./index.css";

const App = () => {
  return (
    <div>
      <Homepage />
    </div>
  );
};

export default App;
