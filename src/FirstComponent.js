import React from "react";
import './css/FirstComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCat } from "@fortawesome/free-solid-svg-icons";

const FirstComponent = () => {
    const myStyle = {
        color: "orange",
        fontSize: '3rem',
        textDecoration: 'underline'
    }
    const p1 = 'Inline style da oggetto esterno'
    const p2 = 'Inline style da oggetto interno'

    return (
        <div>
            <FontAwesomeIcon icon={faUser} />
            <h1 className="title">First Component</h1>
            <p style={myStyle}>{p1}</p>

            <p style={{
                color: "hotpink",
                backgroundColor:'skyblue',
            }}>{p2}</p>

            <p id="color">CIAO</p>
            <FontAwesomeIcon icon={faCat} />
        </div>
    )
}
export default FirstComponent;