import React from 'react'
import { Screen } from "./components/screen";
import './App.css'
import {terminaltext} from "./consts";
import  sample  from "@stdlib/random-sample"
import {AboutBox} from "./components/about";

type AppState = {
    text: string
    inputText: string[]
    count: number
    aboutDisplayed: boolean
}


class App extends React.Component<any, AppState> {
    private timeoutId: number
    constructor(props: any) {
        super(props);
        this.timeoutId = -1
        this.state = {
            text: "",
            inputText: terminaltext.split("\n").reverse(),
            count: 0,
            aboutDisplayed: false
        }
        this.screenClick = this.screenClick.bind(this)
        this.updateText = this.updateText.bind(this)
    }

    screenClick() {
        console.log("screenclick method")
        if (this.state.aboutDisplayed) {
            this.setState({
                aboutDisplayed: false
            })
        } else {
            this.setState({
                aboutDisplayed: true
            })
        }
    }


    getTimerLength(): number {
        const possibles = [130, 200, 50, 10, 300]
        let out: any = sample(possibles, {
            'probs': [0.6, 0.2, 0.1, 0.05, 0.05],
        })
        return out[0] as number
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
        this.timeoutId = setTimeout(() => this.updateText(), this.getTimerLength())
    }

    componentWillUnmount() {
        if (this.timeoutId >= 0) {
            clearTimeout(this.timeoutId)
        }
    }

    render() {
        return         (
            <div onKeyDown={() => this.screenClick()} tabIndex={0}>
                <Screen text={this.state.text} screenClick={this.screenClick} display={!this.state.aboutDisplayed} />
                <AboutBox display={this.state.aboutDisplayed} screenClick={this.screenClick}></AboutBox>
            </div>
        )
    }
}


export default App
