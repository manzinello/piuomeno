import React, { Component } from "react";

const emojiSize = 24;

class PiuomenoEmoji extends Component {
  render = () => {
    return (
      <span key={this.props.tag.toString()}>
        <img
          alt={this.props.tag}
          src={"emoji/" + this.props.tag + ".png"}
          width={emojiSize}
          height={emojiSize}
        />{" "}
      </span>
    );
  };
}

export default PiuomenoEmoji;
