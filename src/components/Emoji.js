import React, { Component } from 'react';

class Emoji extends Component {

    constructor(props) {
        super(props);
        this.state = {
            e: props.e
        };
    }

    render() {
        return (
            <span>
                {this.state.e}
            </span>
        );
    }

}

export default Emoji;