//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

var f = 0;

function myTimer() {
	f++;
	var newt = "000000" + f;
	var time = newt.slice(-6);

	ReactDOM.render(
		<Home
			n1={time.charAt(0)}
			n2={time.charAt(1)}
			n3={time.charAt(2)}
			n4={time.charAt(3)}
			n5={time.charAt(4)}
			n6={time.charAt(5)}
		/>,
		document.querySelector("#app")
	);
}

setInterval(myTimer, 1000);
