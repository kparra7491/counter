import React from "react";
import PropTypes from "prop-types";




//create your first component
export function Number(prop) {
  var d = new Date();
  var time = (d/1000)-(f/1000);

	return (
		<div className="d-flex">
			<div className="card">5</div>
			<div className="card">5</div>
			<div className="card">5</div>
			<div className="card">5</div>
			<div className="card">5</div>
			<div className="card">5</div>
			<div className="card">5</div>
		</div>
	);
}
Number.propTypes = {
	num: PropTypes.number
};
