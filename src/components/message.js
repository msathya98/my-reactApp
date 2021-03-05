import React, {Component } from 'react';

class message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'welcome visitor'
        }
        
    }
    changemessage(){
        this.setState({
         message: "something else"
        }) 
    }

    render(){
        return <div>
            <h2>{this.state.message}</h2>
            <button onClick={() => this.changemessage()}>Change message</button>
            </div>
    }

}

export default message;
