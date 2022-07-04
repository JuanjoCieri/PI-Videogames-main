import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDetails } from "../store/actions";
import Nav from "./Nav"
import styles from "./Detail.module.css"

export default function GameDetails (props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGameDetails(props.match.params.id))
    }, [dispatch])


    const videogame = useSelector((state) => state.gameDetails)

    return(
        <div className={styles.all}>
            <div className={styles.nav}>
                <Nav />
            </div>
            <div className={styles.description}>
                <h1 className={styles.name}>{videogame.name}</h1>
                <img className={styles.img} src={videogame.background_image} alt="" width="300px" height="170"/>
                <h3 className={styles.rating}>⭐ {videogame.rating}</h3>
                <h4 className={styles.genres}>{videogame.genres}</h4>
                <h4 className={styles.platforms}>{videogame.platforms}</h4>
                <h5 className={styles.desc}>{videogame.description}</h5>
                <h5 className={styles.released}>Released at {videogame.releaseDate}</h5>
            </div>
        </div>
    )
        
}