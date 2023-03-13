import React, {Component} from  'react'
import './about.css'
import './screen.css'


export interface IAboutBox {
    display: boolean
    screenClick: Function
}
export class AboutBox extends Component<any, any> {





    render() {

        if(this.props.display) {
            return (<div className="aboutBox fakeScreen crt" onClick={() => this.props.screenClick()}>

                <span>
                    <h1>Hi I'm Jon</h1>
                I'm a Devops Engineer.  I work primarily in AWS and Azure, using terraform, k8s and most common CI/CD tooling. <br />
                <br />
                You can find me at <a href="https://www.linkedin.com/in/jontruran/">LinkedIn</a><br /><br />

                You can also email me at <a href="mailto:jon@9600bps.net">jon@9600bbps.net</a><br /><br />

                You can find my github <a href="https://github.com/zeph1rus/">here</a> <br />
                    Though most of my code is private for contractual reasons.
                </span>

            </div> )
        } else {
            return null
        }


    }

}