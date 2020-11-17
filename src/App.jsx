import React from "react";
import Router from "./Router";
import "./assets/sanitize.css";
import "./assets/style.css";

const App = () => {
  return (
    <React.Fragment>
      <main className="background-design">
        <Router />
      </main>
    </React.Fragment>
  );
};
export default App;
