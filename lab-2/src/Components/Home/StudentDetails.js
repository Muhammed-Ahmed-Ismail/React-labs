import {useParams} from "react-router-dom";

let StudentDetails =()=>
{
    let {id}=useParams()
    return(
        <h1>
            student id={id}
        </h1>
    )
}
export default StudentDetails