import * as React from "react";
import { render } from "react-dom";
import HelloWorld, { ErrorBoundary } from "./component";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
        }
        this.add = this.add.bind(this);
    }

    add() {
        this.setState((state) => {
            return { num: state.num + 1 };
        })
    }
    render() {
        return (
            <div>
                <ErrorBoundary>
                    {
                        this.state.num < 8
                            ? <HelloWorld num={this.state.num} />
                            : <div>HelloWorld Component Unmounted</div>
                    }
                    <span style={{ color: "white", backgroundColor: "skyblue", cursor: "pointer" }} onClick={this.add}>+</span>
                </ErrorBoundary>
            </div>
        )
    }
}

render(<App />, document.querySelector("#root"));