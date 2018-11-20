import React, { Component } from "react";

const emojiSize = 24;

class PiuomenoEmoji extends Component {
  render = () => {
    return (
      <span key={this.props.emoji.toString()}>
        <img
          alt={this.props.emoji}
          src={"emoji/" + this.props.emoji + ".png"}
          width={emojiSize}
          height={emojiSize}
        />{" "}
      </span>
    );
  };
}

export default PiuomenoEmoji;
