import React, {Component} from  'react'
import './screen.css'
export interface IScreen {
    text: string
    screenClick: Function
    display: boolean
}


export class Screen extends Component<IScreen, any> {


    render() {

        if (this.props.display) {
            return (<div className="fakeScreen textGreen crt" onClick={() => this.props.screenClick()}>
                <p>{this.props.text}</p></div>)
        } else {
            return null
        }

    }
}

/*
export const Screen = ({ text }: IScreen) => {
    return (
        <div>

    <div className="fakeScreen">
        <p className="line1">&#91;&nbsp;&ldquo;{text}.&rdquo;,<span className="cursor1">_</span></p>
        <p className="line1">&nbsp;&nbsp;&ldquo;I'm a web designer.&rdquo;,<span className="cursor2">_</span></p>
        <p className="line3">&nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;<span className="cursor3">_</span></p>
        <p className="line4">_<span className="cursor4">_</span></p>
    </div>
        </div>
)
}*/
