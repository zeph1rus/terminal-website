import React from 'react'
import { Screen } from "./components/screen";
import reactLogo from './assets/react.svg'
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
            inputText: terminaltext.split("\n"),
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
        this.timerId = setInterval(() => this.updateText(), 100)
    }

    componentWillUnmount() {
        if (this.timerId >= 0) {
            clearInterval(this.timerId)
        }

    }

    render() {
        return (
            <div className="App">
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <Screen text={this.state.text} />
                <h1>Vite + React</h1>
                <p>farts</p>
                <div className="card">
                    <button onClick={() => this.setState({count: this.state.count + 1})}>
                        count is {this.state.count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        )
    }
}


export default App
