import StudentCard from "./StudentCard";

let StudentsList = ({studentsList}) => {
    console.log(studentsList)
    let cards = studentsList.map((student =>
            <StudentCard student={student} key={student.id}/>
    ))
    return (

        <div className={"std-cards-container"}>
            <div className={"list-container"}>
                <ul>
                    {cards}
                </ul>
            </div>
        </div>
    )
}
export default StudentsList