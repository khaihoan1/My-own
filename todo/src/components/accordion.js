import React, { Component } from 'react';

class Accordion extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCollapsed: true,
        }
    };
}

render(){
    const { heading, content } = this.props;
    const { isCollapsed } = this.state;

    return (
        <div className="Accordion">
            <div className="Heading">
                <h2>{heading}</h2>
            </div>
            <div className="Content">
                {content}
            </div>
        </div>
    )
}