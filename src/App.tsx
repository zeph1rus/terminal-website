import React from 'react'
import { Screen } from "./components/screen";
import './App.css'
import {terminaltext} from "./consts";

type AppState = {
    text: string
    inputText: string[]
    count: number
}


class App extends React.Component<any, AppState> {
    private timerId: number;


    constructor(props: any) {
        super(props);
        this.timerId = -1
        this.state = {
            text: "",
            inputText: terminaltext.split("\n").reverse(),
            count: 0
        }
    }

    updateText() {
        if (this.state.inputText.length > 0) {
            let newText = this.state.inputText
            let addText = this.state.text + `${newText.pop()}\n`
            this.setState({
                text: addText,
                inputText: newText
            })
        }
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.updateText(), 130)
    }

    componentWillUnmount() {
        if (this.timerId >= 0) {
            clearInterval(this.timerId)
        }

    }

    render() {
        return (
            <div>

                <Screen text={this.state.text} />

            </div>
        )
    }
}


export default App
