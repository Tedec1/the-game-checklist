import React, { useState } from "react"
import "./index.css"
import ReactDom from "react-dom"
const App = () => {
  const l = []
  for (let i = 1; i < 101; i++) {
    l.push(<Item num={i} />)
  }
  return <div className="list">{l}</div>
}

const numpad = () => {}

const Item = ({ num }) => {
  const [active, setActive] = useState(false)

  return (
    <div style={{ margin: "7px" }}>
      <span style={{ textDecoration: active ? "line-through" : "none" }}>
        {" "}
        {num}{" "}
      </span>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("root"))
