import {NavLink, useParams} from "react-router-dom";

let StudentDetails = () => {
    let {id} = useParams()
    return (

        <div className={"details-card-container"}>
            <div className="std-card">

                <div className={"info-container"}>
                    <p> name: </p>
                    <p> id: {id}</p>
                    <p> age: </p>

                </div>
                <div className={"avatar-container"}>
                    <img src={"/images/businessman-character-avatar-isolated/60111.jpg"}/>
                </div>
            </div>
        </div>
    )
}
export default StudentDetails