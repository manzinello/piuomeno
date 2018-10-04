import React, { Component } from "react";

const emojiSize = 24;

class PiuomenoItem extends Component {
  render = () => {
    return (
      <div>
        {this.props.tag.map(value => (
          <span>
            <img
              alt={value}
              src={"emoji/" + value + ".png"}
              width={emojiSize}
              height={emojiSize}
            />{" "}
          </span>
        ))}{" "}
        ~<strong>{this.props.value.toFixed(2)}</strong> {this.props.text}
        <br />
      </div>
    );
  };
}

export default PiuomenoItem;
