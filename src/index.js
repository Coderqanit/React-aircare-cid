import React from "react";
import ReactDom from "react-dom";
import App from "./App"
// CSS
import "./index.css";

function Index() {
  return (
    <section>
      <App />
    </section>
  );
}

ReactDom.render(<Index />, document.getElementById("root"));
