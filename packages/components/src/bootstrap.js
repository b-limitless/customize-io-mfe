import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as components from "./components";
// import Button from "./components/button";
// import Input from "./components/input";

if (process.env.NODE_ENV === "development") {
 
  const devRoot = document.querySelector("#_customize-id-common");
  if(devRoot) {
    ReactDOM.render(<App />, devRoot);
  }
  
}

// Otherwise export all components
export * from "./common/components";
