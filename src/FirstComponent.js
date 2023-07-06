import React from "react";
import './FirstComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const FirstComponent = () => {
    const myStyle = {
        color: "orange"
    }
    const p1 = 'Inline style da oggetto esterno';
    const p2 = 'Inline style da oggetto interno';
  return (
    <div>
        <FontAwesomeIcon icon={faUser} />
        <h1 className="title">First Component</h1>
        <p style={myStyle}>{p1}</p>
        <p style={{color: "hotpink", textAlign: "end"}}>{p2}</p>
    </div>
  )
}
export default FirstComponent;
