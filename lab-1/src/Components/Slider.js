import {Component} from "react";


export default class Slider extends Component {
    constructor() {
        super();
        this.style = {
            img: {
                width: "300px",
                height: "300px",
                display: "block",
                borderRadius:"10px"
            },
            container: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            },
            controllers: {
                display: "flex",
                marginTop: "10px",
                gap: "5px"
            }

        }
        this.state = {
            currentImage: 1
        }
        this.numberOfImages = 4;

    }

    next = () => {

       this.state.currentImage=(this.state.currentImage >= this.numberOfImages)? this.numberOfImages:this.state.currentImage+1
        this.setState({
            currentImage:this.state.currentImage
        })
    }
    previous = () => {
        this.state.currentImage=(this.state.currentImage <= 1)?1:this.state.currentImage - 1;
        this.setState({
            currentImage: this.state.currentImage
        })
    }
    slide = () => {
        this.interval=setInterval(()=>{
            if(this.state.currentImage===this.numberOfImages) this.state.currentImage=0
            this.next()
        },1000)
    }
    stop = () =>{
        clearInterval(this.interval)
    }

    render() {
        return (
            <div style={this.style.container}>
                <div>
                    <img src={`./images/image${this.state.currentImage}.jpg`} alt={"cats"} style={this.style.img}/>
                </div>
                <div style={this.style.controllers}>
                    <input
                        type="button"
                        value="next"
                        onClick={this.next}
                    />
                    <input
                        type="button"
                        value="prev"
                        onClick={this.previous}
                    />
                    <input
                        type="button"
                        value="silde"
                        onClick={this.slide}
                    />
                    <input
                        type="button"
                        value="stop"
                        onClick={this.stop}
                    />

                </div>
            </div>
        );
    }
}

