import React, { useState } from "react";
import "./index.css";
import ReactDom from "react-dom";
const App = () => {
    const l = [];
	const a = {};
    for (let i = 1; i < 101; i++) {
        a[String(i)] = true;
    }
    const Numpad = () => {
        const [val, setVal] = useState("0");
        const Button = ({ num }) => (
            <button
            className="button"
            value={num}
            onClick={(e) => {
                // console.log("click");
                e.preventDefault();
                setVal(val !== "0" ? val + num : String(num));
            }}
            >
            {num}
        </button>
    );
    const l = [];
    for (let i = 0; i < 9; i++) {
        l.push(<Button num={i} key={i} />);
    }
    const Display = () => {
        return <span id="data">{val}</span>;
    };
    return (
        <div id="numpad">
      <Display />
      <div id="buttons">{l}</div>
      <div id="control">
        <button id="clear" onClick={()=>setVal("0")}>Clear</button>
        <button id="backspace" onClick={()=>val.length > 0 && setVal(val.slice(0,val.length-1))}>{"<"}</button>
        <button id="enter" onClick={()=>{a[String(val)] = false}}>{"submit"}</button>
      </div>
    </div>
  )
};
const Item = ({ num }) => {    
    return (
        <div style={{ margin: "7px" }}>
        <span style={{ textDecoration: !a[String(num)] ? "line-through" : "none" }}>
          {" "}
          {num}{" "}
        </span>
      </div>
    )
}
    for (let i = 1; i < 101; i++) {
        l.push(<Item num={i} key={i} />)
    }
return (
<>
  <Numpad />
  <div className="list">
    {l}
  </div>
</>
)
};

ReactDom.render(<App />, document.getElementById("root"));

