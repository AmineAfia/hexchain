import React, { Component } from "react";
import "./IconComps.scss";

export default class AnimatedIcon extends React.Component {
  render() {
    return (
      <div className="animated-icon">
        <img id="down" src="../../img/hexchain red circle no heart.png" />

        <img className="heart" src="../../img/white heart.png" />
      </div>
    );
  }
}
