import React, { Component } from "react";

import PiuomenoEmoji from "./PiuomenoEmoji";

class PiuomenoItem extends Component {
  render = () => {
    return (
      <span>
        {this.props.tag.map(v => (
          <PiuomenoEmoji emoji={v} />
        ))}{" "}
        ~<strong>{this.props.value.toFixed(2)}</strong> {this.props.text}
        <br />
      </span>
    );
  };
}

export default PiuomenoItem;
