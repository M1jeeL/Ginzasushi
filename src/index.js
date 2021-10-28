import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import moment from "moment";
import "moment/locale/es";
// ..
AOS.init();
moment.locale("es");

ReactDOM.render(<App />, document.getElementById("root"));
