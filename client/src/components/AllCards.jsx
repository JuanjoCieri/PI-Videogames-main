import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import Card from "./Card";
import {Link} from "react-router-dom"
import { getAllGames } from "../store/actions/index";
import styles from "./AllCards.module.css"
import LoadingPage from "./Loading";

export default function AllCards(){

    let gamesState = useSelector((state) => state.allGames)
    const dispatch = useDispatch()
    console.log(gamesState)

    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch])

    return (
        
         <div className={styles.box}>
            {gamesState.length > 0 ? (
                gamesState.map((g) => (
                 <Link key={g.id} to={`/details/${g.id}`}>
                    <Card name={g.name} image={g.image} genres={g.genres} rating={g.rating}/>   
                 </Link>
                ))
                 ) : (
                 <LoadingPage />
                )}
        </div>
        
    )
}