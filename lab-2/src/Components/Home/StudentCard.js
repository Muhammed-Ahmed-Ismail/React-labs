import {NavLink} from "react-router-dom";

let StudentCard = ({student}) => {
    return (


        <li>
            <div class="std-card">
                <div className={"info-container"}>
                    <p> name: {student.name}</p>
                    <p> id: {student.id}</p>
                    <p> age: {student.age}</p>
                    <NavLink to={`/student/${student.id}`}> Details </NavLink>

                </div>
                <div className={"avatar-container"}>
                    <img src={"/images/businessman-character-avatar-isolated/60111.jpg"}/>
                </div>
            </div>
        </li>

    )
}
export default StudentCard