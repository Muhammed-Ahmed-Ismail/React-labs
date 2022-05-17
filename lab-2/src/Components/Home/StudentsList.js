let StudentsList=({studentsList})=>{
    console.log(studentsList)
    let cards=studentsList.map((student=>

         <li>
        <div class="std-card">
        <p> name: {student.name}</p>
        <p> id: {student.id}</p>
        <p> age: {student.age}</p>
        </div>
        </li>

    ))
    return(
        <div className={"std-cards-container"}>
            <ul>
                {cards}
            </ul>
        </div>
    )
}
export default StudentsList