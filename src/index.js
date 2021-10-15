import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

ReactDOM.render(<App />, document.getElementById("root"));
