import React from "react";
import Library from "./Components/Library";
import OneLibrary from "./Components/OneLibrary";
import { Route } from "react-router-dom";
//////
export default function App() {

  return (
    <div>
      <Route exact path="/Library" component={Library} />
      <Route exact path="/OneLibrary/:id" component={OneLibrary} />
    </div>
  );
}
