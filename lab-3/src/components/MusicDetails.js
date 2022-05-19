import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";


let MusicDetails = () => {
    let comp_style = {
        container:{

            width:"50%",

            marginTop:"15px",
            marginLeft:"auto",
            marginRight:"auto",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            border:"solid 1px black",
            backgroundColor:"#009BD3",
            borderRadius:"25px",
        },
        img:{
            borderRadius:"50%",
            width: "300px",
            marginTop:"10px"
        },
        bio:{
            padding:"30px",
            fontSize:"20px"
        },
        link:
            {


                fontSize:"28px",
                marginLeft: "50%",
                width:"100%",

            }
    }
    let imagesUrl = "/images/covers/"
    let albumsUrl = "/images/albums/"
    let {id: artistId} = useParams()
    let [artistInfo, setInfo] = useState({})
    let [error, setError] = useState()

    useEffect(() => {
        fetch(`http://localhost:3003/artists/${artistId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.status)
            })
            .then(artistInfo => {

                setInfo(artistInfo)

            })
            .catch(error => {
                setError(error)
                console.log(error)
            })
    }, [])
    let renderAlbums = () => {
        return (artistInfo.albums.map(album => {
               return( <img width={"100px"} src={albumsUrl+album.cover+".jpg"}/>)

            })
        )
    }
    let renderArtistInfo = () => {
        if (artistInfo.name) {
            return (
                <div>
                <NavLink to={"/artists"} ><p style={comp_style.link} >Music List</p></NavLink>
                <div style={comp_style.container}>
                    <img src={imagesUrl + (artistInfo.name).toLowerCase().replace(" ", "_") + ".jpg"}
                         style={comp_style.img}/>
                    <h2> {artistInfo.name}</h2>
                    <p style={comp_style.bio}> {artistInfo.bio}</p>
                    <div >
                        {renderAlbums()}
                    </div>
                </div>
                </div>
            )
        } else if (error) {
            return (<h1>{error.toString()}</h1>)
        } else {
            return (<h1>Loading</h1>)
        }
    }

    return (
        <div>
            {
                renderArtistInfo()
            }
        </div>
    )
}
export default MusicDetails