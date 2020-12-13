import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Home(props) {
	return (
		<div className="container-fluid d-flex">
			<div className="card">{props.n1}</div>
			<div className="card">{props.n2}</div>
			<div className="card">{props.n3}</div>
			<div className="card">{props.n4}</div>
			<div className="card">{props.n5}</div>
			<div className="card">{props.n6}</div>
		</div>
	);
}

Home.propTypes = {
	n1: PropTypes.string,
	n2: PropTypes.string,
	n3: PropTypes.string,
	n4: PropTypes.string,
	n5: PropTypes.string,
	n6: PropTypes.string
};
