import React, { Component } from 'react';
interface IState {
    name: string
}
// class App extends Component<约定属性, 约定状态> {
class App extends Component<any, IState> {
    state = {
        name: "kerwin"
    }
    render() {
        return (
            <div>
                app-{this.state.name.substring(0, 1).toUpperCase()+this.state.name.substring(1)}
                <button onClick={() => {
                    // this.state.name = 100
                    this.setState({
                        name: 'xiaoming'
                    })
                }}>click</button>
            </div>
        );
    }
}

export default App;