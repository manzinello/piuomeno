import React, { Component } from "react";

import PiuomenoEmoji from "./PiuomenoEmoji";

class PiuomenoItem extends Component {
  render = () => {
    return (
      <span>
        {this.props.tag.map(value => (
          <PiuomenoEmoji tag={value} />
        ))}{" "}
        ~<strong>{this.props.value.toFixed(2)}</strong> {this.props.text}
        <br />
      </span>
    );
  };
}

export default PiuomenoItem;
