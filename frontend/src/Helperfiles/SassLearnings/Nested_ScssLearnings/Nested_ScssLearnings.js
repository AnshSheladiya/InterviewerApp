// SassLearnings.js

import React from "react";
import "./Nested_ScssLearnings.scss";

const Nested_ScssLearnings = () => {
  return (
    <nav class="menu">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
          <ul>
            <li>
              <a href="#">Product 1</a>
            </li>
            <li>
              <a href="#">Product 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nested_ScssLearnings;
