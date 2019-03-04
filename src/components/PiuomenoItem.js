import React, { Component } from "react";

import Emoji from "./Emoji";

class PiuomenoItem extends Component {
  render = () => {
    return (
      <span>
        {this.props.tag.map(v => (
          <Emoji emoji={v} />
        ))}{" "}
        ~<strong>{this.props.value.toFixed(2)}</strong> {this.props.text}
        <br />
      </span>
    );
  };
}

export default PiuomenoItem;
