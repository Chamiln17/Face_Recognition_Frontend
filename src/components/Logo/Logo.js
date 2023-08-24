import React from "react";
import { Tilt } from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 50, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="br2, shadow-5 Tilt"
        options={defaultOptions}
        style={{ height: 100, width: 100 }}
      >
        <div className="pa3">
          <img src={brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
