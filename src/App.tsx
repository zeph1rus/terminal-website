import React from 'react'
import { Screen } from "./components/screen";
import './App.css'
import {terminaltext} from "./consts";
import  sample  from "@stdlib/random-sample"

type AppState = {
    text: string
    inputText: string[]
    count: number
}


class App extends React.Component<any, AppState> {
    private timeoutId: number
    constructor(props: any) {
        super(props);
        this.timeoutId = -1
        this.state = {
            text: "",
            inputText: terminaltext.split("\n").reverse(),
            count: 0
        }
    }

    getTimerLength(): number {
        const possibles = [130, 200, 50, 10, 300]
        let out = sample(possibles, {
            'probs': [0.6, 0.2, 0.1, 0.05, 0.05],
        }) as unknown
        if (typeof(out) == 'number') {
            return out;
        } else {
            return 130
        }
    }

    updateText() {
        if (this.state.inputText.length > 0) {
            let newText = this.state.inputText
            let textToAdd = `${newText.pop()}\n`
            console.log(textToAdd)
            let addText = this.state.text + textToAdd
            this.setState({
                text: addText,
                inputText: newText
            })
            this.timeoutId = setTimeout(() => this.updateText(), this.getTimerLength())
        }
    }
    componentDidMount() {
        this.timeoutId = setTimeout(() => this.updateText(), 130)
    }

    componentWillUnmount() {
        if (this.timeoutId >= 0) {
            clearTimeout(this.timeoutId)
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
