import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
  const [token, setToken] = useState("");
  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
