import * as React from "react";

let ii = "jj";
export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "HelloWorld!",
        }
        console.log("constructor");
    }
    componentDidMount() {
        console.log("DidMount");
    }
    static getDerivedStateFromProps(state, props) {
        console.log("getDerivedStateFromProps");
        console.log(state);
        console.log(props);
        return { text: "from getDerivedStateFromProps" }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        if (nextProps.num < 4) {
            return true;
        } else {
            return false;
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return "snapshot from getSnapshotBeforeUpdate";
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("DidUpdate");
        console.log(snapshot);
    }
    componentWillUnmount() {
        console.log("WillUnmount")
    }
    componentDidCatch() {
        console.log("DidCatch")
    }

    render() {
        console.log("render");
        return (
            <div>{`${this.props.num ? this.props.num : "none"} | ${this.state.text} | ${ii}`}</div>
        )
    }
}

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError");
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log("componentDidCatch");
    }
    render() {
        return (
            this.state.hasError
                ? <div>Something has went wrong</div>
                : this.props.children
        )
    }
}