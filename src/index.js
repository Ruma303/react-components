import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const SecondComponent = () => {
    return <h3>Second Component</h3>;
}
function Hello() {
    return (
        <>
            <div>Hello, World!</div>
            <SecondComponent />
        </>
    );
}
root.render(
  <React.StrictMode>
    <Hello />
    <App />
  </React.StrictMode>
);
