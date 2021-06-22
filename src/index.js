import React, { useState } from "react";
import "./index.css";
import ReactDom from "react-dom";
const App = () => {
    const l = [];
    const b = {}
    for (let i = 1; i < 101; i++) {
      b[i] = true;
    }
	const [a,setA] = useState({...b});
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
                // console.log(a)
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
        <button id="reset" onClick={()=>{setA({...b})}}>reset</button>
        <button id="clear" onClick={()=>setVal("0")}>clear</button>
        <button id="backspace" onClick={()=>val.length > 0 && setVal(val.slice(0,val.length-1))}>{"<"}</button>
        <button id="enter" onClick={()=>{setA({...a,[val]:false})}}>{"submit"}</button>
      </div>
    </div>
  )
};
const Item = ({ num, a }) => {    
    
  return (
        <div style={{ margin: "7px" }}>
        <span style={{textDecoration: !a[num] ? "line-through": "none"}}>
          {" "}
          {num}{" "}
        </span>
      </div>
    )
}
    for (let i = 1; i < 101; i++) {
        l.push(<Item num={i} key={i} a={a}/>)
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

