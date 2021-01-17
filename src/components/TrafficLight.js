import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
    constructor() {
        super();
        this.state = { color: RED };
    }

    handleClick(color) {
        this.setState({
            color: color
        });
    }

    render() {
        let { color } = this.state;
        return (
            <div className="TrafficLight">
                <div className={
                    classNames('bulb', 'red', {'active' : color === RED})
                    }
                    onClick={this.handleClick.bind(this, RED)}></div>
                <div className={
                    classNames('bulb', 'orange', {'active' : color === ORANGE})
                    }
                    onClick={this.handleClick.bind(this, ORANGE)}></div>
                <div className={
                    classNames('bulb', 'green', {'active' : color === GREEN})
                    }
                    onClick={this.handleClick.bind(this, GREEN)}></div>
            </div>
        );
    }
}

export default TrafficLight;