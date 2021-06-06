import { default as Item } from "./Item";
import React from "react";
import "./index.css";
import ReactDom from "react-dom";
const App = () => {
	const l = [];
	for (let i = 1; i < 101; i++) {
		l.push(<Item num={i} />);
	}
	return <div className="list">{l}</div>;
};

const numpad = () => {};

ReactDom.render(<App />, document.getElementById("root"));
