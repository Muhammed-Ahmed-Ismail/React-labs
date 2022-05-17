let Regester= ({onAddClick})=>{
    let sendStudent=()=>{
        let student={
            name:document.querySelector("input[name='name']").value,
            id:document.querySelector("input[name='id']").value,
            age:document.querySelector("input[name='age']").value
        }
        onAddClick(student)
    }
    return(
        <div className={"register flex-column"}>
            <h1>
                Add students
            </h1>
            <div className={"input-container flex-column"}>
            <input className={"Input"}
            type={"text"}
            name={"name"}
            placeholder={"name"}
            />
                <input className={"Input"}
            type={"text"}
            name={"id"}
            placeholder={"id"}
            />
                <input className={"Input"}
            type={"text"}
            name={"age"}
                       placeholder={"age"}
            /> <input className={"Input"}
            type={"button"}
            name={"age"}
            value={"Add"}
                      onClick={sendStudent}
            />
            </div>
        </div>
    )
}

export default Regester