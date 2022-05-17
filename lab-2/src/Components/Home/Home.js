import {Component} from "react";
import Regester from "./Regester";
import StudentsList from "./StudentsList";
export default class Home extends Component
{
    constructor() {
        super();
        this.state={
            studentsArray:[
                {
                    name: "Muhammed Ahmed",
                    id: "11",
                    age: "aa"
                }
            ],
        }
    }

    getStudent=(student)=>
    {
        console.log(this.state.studentsArray)
        this.state.studentsArray.push(student)
        this.setState({
            studentsArray:this.state.studentsArray
        })
        console.log(this.state.studentsArray)
    }
    render=()=> {
        return(
            <div className={"home"}>
            <Regester onAddClick={this.getStudent}></Regester>
                <StudentsList studentsList={this.state.studentsArray}></StudentsList>
            </div>
        )
    }

}