import React, { Component } from "react";

const emojiSize = 24;

class PiuomenoItem extends Component {
  render = () => {
    return (
      <div>
        {this.props.tag.map(value => (
          <img
            alt={value}
            src={"emoji/" + value + ".png"}
            width={emojiSize}
            height={emojiSize}
          />
        ))}{" "}
        ~<strong>{this.props.value.toFixed(2)}</strong> {this.state.text}
        <br />
      </div>
    );
  };
}
