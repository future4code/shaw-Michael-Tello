import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = (props) => {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );
  const states = { rightButtonText, setRightButtonText };

  const data = { token, states };


	return (
		<GlobalStateContext.Provider value={data}>
		{props.children}
	</GlobalStateContext.Provider>
	)
};
