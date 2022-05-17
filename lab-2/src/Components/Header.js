import {NavLink} from "react-router-dom";

let Header =()=>
{
    return (
        <header>
            <nav>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"*"}>Dont touch this</NavLink>
            </nav>
        </header>
    )
}
export default Header