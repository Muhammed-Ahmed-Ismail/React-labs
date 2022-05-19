import {NavLink} from "react-router-dom";


let Home=()=>{
    let logoUrl="/images/cover.png"
    let com_style={
        logoContainer:{
            width:"100%",
            height:"100%",
          //  marginTop:"15px",
            marginLeft:"auto",
            marginRight:"auto",
            position:"relative",
            display:"flex",
            justifyContent:"center"
        },
        logo:{
            position: "absolute",
            zIndex:0,
            width: "100%"
        },
        link:
            {
                position:"absolute",
                color:"white",
                fontSize:"36px",
                marginLeft: "-50px",
                width:"100%",
                zIndex: "1",
                marginTop:"25%"
            }
    }
    return(
        <div style={com_style.logoContainer}>
            <img  src={logoUrl} style={com_style.logo}/>
        <NavLink to={"/artists"} ><p style={com_style.link} >Music List</p></NavLink>
        </div>
    )
}
export default Home