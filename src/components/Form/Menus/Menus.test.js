import React from "react";
import ReactDOM from "react-dom";
import Menus from "./Menus";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Menus />, div);
  ReactDOM.unmountComponentAtNode(div);
});
