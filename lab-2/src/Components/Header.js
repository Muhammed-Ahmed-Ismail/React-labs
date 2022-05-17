import {NavLink} from "react-router-dom";

let Header =()=>
{
    return (
        <header >
            <h2 className={"logo"}>
                Lab2
            </h2>

            <nav className={"links-container"}>
                <NavLink to={"/home"} className={"link"}>Home</NavLink>
                <NavLink to={"/about"} className={"link"}>About</NavLink>
                <NavLink to={"*"} className={"link"}>Dont touch this</NavLink>
            </nav>
        </header>
    )
}
export default Header