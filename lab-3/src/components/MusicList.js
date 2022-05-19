import {useEffect, useState} from "react";
import MusicCard from "./MusicCard";
import {NavLink} from "react-router-dom";

let MusicList = () => {

    let com_style={
        link:
            {
                fontSize:"28px",
                marginLeft: "50%",
                marginRight: "auto",
                width:"100%",
            }
    }
    let [musicList, setMusicList] = useState([]);
    let [error, setError] = useState("")


    useEffect(() => {
        fetch("http://localhost:3003/artists")
            .then(response => {
                return response.json()
            })
            .then(musicList => {
                console.log("fetched")
                setMusicList(musicList)

            })
            .catch(error => setError(error))
    }, [])

    // useEffect(() => {
    //     renderMusicList()
    // }, [musicList])

    let renderMusicList = () => {
        if (musicList.length>0) {
            console.log(musicList)
            return musicList.map((musicItem) => <MusicCard musicItem={musicItem}></MusicCard>)
        } else
            return (<div>waiting for data </div>)
    }
    return (
        <div>


            {renderMusicList()}
        </div>
    )
}

export default MusicList