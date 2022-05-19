import {NavLink} from "react-router-dom";

let MusicCard = ({musicItem})=>
{
    let imagesUrl="/images/covers/"
    let comp_style={
        border:"solid black 1px",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        width:"400px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom:"20px",
        backgroundColor:"#009BD3",
        borderRadius:"10%",
        img:{
            borderRadius:"50%",
            width: "300px",
            marginTop:"10px"
        }
    }
    return <div style={comp_style}>
        <img src={imagesUrl+(musicItem.name).toLowerCase().replace(" ","_")+".jpg"} style={comp_style.img}/>
        <NavLink to={`/artists/${musicItem.id}`}><p>{musicItem.name}</p></NavLink>


    </div>
}

export default MusicCard