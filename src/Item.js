import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const Item = ({ num }) => {
	const [active, setActive] = useState(false);

	return (
		<div style={{ margin: "7px" }}>
			<span style={{ textDecoration: active ? "line-through" : "none" }}>
				{" "}
				{num}{" "}
			</span>
		</div>
	);
};

export default Item;
