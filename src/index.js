import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CounterContextFun } from "./context/Countercontex";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CounterContextFun>
      <App />
    </CounterContextFun>
  </StrictMode>,
  rootElement
);
