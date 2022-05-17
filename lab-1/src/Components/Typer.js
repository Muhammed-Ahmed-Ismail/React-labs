import {Component} from "react";

export default class Typer extends Component {
    constructor() {
        super();
        this.style = {
            container: {
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                marginTop:"20px"
            }
        }
        this.state = {
            text: ""
        }
    }
    reset = ()=>{
        this.setState({
            text: ""
        })
    }
    type = (e) => {
        this.setState(
            {
                text: e.target.value
            }
        )
    }

    render() {
        return (
            <div style={this.style.container}>
                <div>
                <input
                    type={"text"}
                    value={this.state.text}
                    onInput={this.type}
                />
                </div>
                <div>
                    {this.state.text}
                </div>
                <input
                type="button"
                value={"reset"}
                onClick={this.reset}
                />
            </div>

        )
    }
}