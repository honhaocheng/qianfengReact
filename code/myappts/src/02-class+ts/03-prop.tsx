import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Child name="bbbb" />
            </div>
        );
    }
}

interface IProps {
    name: string
}

class Child extends Component<IProps, any> {
    render() {
        return (
            <div>
                child-{this.props.name}
            </div>
        );
    }
}
export default App;