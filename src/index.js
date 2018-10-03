import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import Piuomeno from "./Piuomeno";

ReactDOM.render(<Piuomeno />, document.getElementById("root"));
registerServiceWorker();
