import React from "react";
import './css/FirstComponent.css';
import cardStyles from './css/modules/Card.module.css';
import buttonStyles from './css/modules/Button.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCat } from "@fortawesome/free-solid-svg-icons";

const FirstComponent = () => {
  const myStyle = {
    color: 10 < 20 ? "orange" : "blue",
    fontSize: '3rem',
    textDecoration: 'underline'
  }
  const p1 = 'Inline style da oggetto esterno';
  const p2 = 'Inline style da oggetto interno';
  const x = 9;

  return (
    <div>
      <FontAwesomeIcon icon={faUser} />
      <h1 className="title">First Component</h1>

      <p style={myStyle}>{p1}</p>

      <p style={{
        color: "hotpink",
        backgroundColor: 'skyblue',
      }}>{p2}</p>

      <p style={{
        backgroundColor: true == false ? 'skyblue' : "blue",
        color: "hotpink",
      }}>{p2}</p>

      <p id="color">Style da file .css</p>

      <div className={cardStyles.card}>Style CSS Module</div>
      <button className={buttonStyles.primary}>Style from Button.module.css</button>
      <br />

      <div className={`box ${ x < 10 ? "bg-red" : "bg-yellow" }`}>x = {x}</div>
      <div className={`box ${ x < 10 ? "bg-red" : "bg-yellow" }`}>x = {x}</div>

      <FontAwesomeIcon icon={faCat} />
    </div>
  )
}
export default FirstComponent;