import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames, createdFilter, byNameFilter, byRatingFilter, byGenresFilter, getAllGenres } from "../store/actions/index";
import Card from "./Card";
import styles from "./Home.module.css"
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import Paginated from "./Paginated";

export default function Home() {

    const dispatch = useDispatch()
    const gamesState = useSelector((state) => state.allGames)
    const genres = useSelector((state) => state.genres)
    const [order, setOrder] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [gamesPage, setGamePage] = useState(15)
    const indexLast = currentPage * gamesPage
    const indexFirst = indexLast - gamesPage
    const currentGames = gamesState.slice(indexFirst, indexLast)
    
    
    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])


    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function handleCreatedFilter (e) {
        dispatch(createdFilter(e.target.value))
    }

    function handleSort (e) {
        e.preventDefault()
        dispatch(byNameFilter(e.target.value))
        setCurrentPage(1)
        setOrder(`Order ${e.target.value}`)
    }

    function handleSortRating (e) {
        e.preventDefault()
        dispatch(byRatingFilter(e.target.value))
        setCurrentPage(1)
        setOrder(`Order ${e.target.value}`)
    }

    function handleSortGenres (e) {
        e.preventDefault()
        dispatch(byGenresFilter(e.target.value))
        setCurrentPage(1)
        setOrder(`Order ${e.target.value}`)
    }

    return (
        <div className={styles.home}>
            <div className={styles.navBar}>
                <Nav />
            </div>
            <div className={styles.searchBar}>
                <SearchBar />
            </div>
            <div className={styles.filters}>
                <select onChange={e => handleSort(e)}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <select onChange={e => handleSortRating(e)}>
                    <option value="higher">Lower Rating</option>
                    <option value="lower">Higher Rating</option>    
                </select>
                <select onChange={e => handleCreatedFilter(e)}>
                    <option value="All">All</option>
                    <option value="created">Created</option>
                    <option value="api">Api</option>
                </select>
                <select onChange={e => handleSortGenres(e)}>
                    {genres.map((g) => (
                        <option value={g.name}>{g.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.cards}>
                {currentGames.map((c) => {
                    return (
                        <div className={styles.cardd}>
                            <Link to={"/home/" + c.id}>
                                <Card name={c.name} image={c.image} genres={c.genres} rating={c.rating}/>
                            </Link>
                        </div>
                    )
                })}
                <div className={styles.paginatedd}>
                    <Paginated gamesPage= {gamesPage} gamesState={gamesState.length} paginated = {paginated}/>
                </div>
            </div>
        </div>
    )
}