import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item ">
        <a className="nav-link change-clr" aria-current="page" href="#">
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link change-clr" href="#">
          Location
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link change-clr" href="#">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link change-clr" aria-disabled="true">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default App;
