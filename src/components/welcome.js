import React, {Component } from 'react';

class welcome extends Component{
    render(){
        return <h2>hello {this.props.name} and {this.props.num}</h2>
    }

}

export default welcome;
