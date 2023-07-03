import React from "react";
import './FirstComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const FirstComponent = () => {
  return (
    <div>
        <FontAwesomeIcon icon={faUser} />
        <h1>First Component</h1>
    </div>
  )
}
export default FirstComponent;
