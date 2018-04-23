import React, { Component } from 'react';

class Emoji extends Component {

    constructor(props) {

        super(props);
        
        this.state = {
            e: props.e
        };

    }

    render() {

        var image = "emoji/" + this.state.e + ".png" + "?ver=" + Math.random();

        return (
            <img src={image} width="24" height="24" />
        );
    }

}

export default Emoji;