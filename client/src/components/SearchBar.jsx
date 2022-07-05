import React from "react";
import { getGameByName } from "../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css"


export default function SearchBar () {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    
    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(getGameByName(name))
        setName("")
    }

    return (
        <div className={styles.searchBar}>
            <input className={styles.input} type="text" value={name} placeholder="Search..." onChange={e => handleInputChange(e)}/>
            <button className={styles.btn} onClick={e => handleClick(e)}>Search</button>
        </div>
    )
}