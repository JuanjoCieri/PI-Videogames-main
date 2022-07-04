import React, {useState, useEffect} from "react";
import { createGame, getAllGenres } from "../store/actions"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import styles from "./Form.module.css"
import Nav from "./Nav"

export default function Form () {

    const dispatch = useDispatch()

    const genres = useSelector((state) => state.genres)

    const [game, setGame] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: "",
        genres: [],
        platforms: []
    })

    useEffect(() => {
        dispatch(getAllGenres())
    }, [])


    function handleGenres (e) {
        setGame({
            ...game,
            genres: [...new Set([...game.genres, e.target.value])]
        })
    }

    function handlePlatforms (e) {
        setGame({
            ...game,
            platforms: [...new Set([...game.platforms, e.target.value])]
        })
    }

    // function validate (game) {
    //     let errors = {};
        
    //     if (!game.name) {
    //         errors.name = "Name is required!"
    //     } else if (!/^[a-zA-Z0-9-() .]+$/.test(game.name)){
    //         errors.name = "Only accepts letters, numbers, mid dashes and parenthesis!"
    //     }

    //     if (game.image.length !== 0 && !/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(input.image)) {
    //         errors.image = "Invalid URL!"
    //     }

    //     if (!game.released) {
    //         errors.released = "Released date is required!"
    //     }

    //     if (!game.description) {
    //         errors.description = "Description is required!"
    //     }

    //     if (!game.rating) {
    //         errors.rating = "Rating is required"
    //     } else if (game.rating > 5) {
    //         errors.rating = "Rating must be less than 5"
    //     } else if (game.rating < 0) {
    //         errors.rating = "Rating cannot be negative"
    //     }

    //     return errors
    // }

    // const [errors, setErrors] = useState({})

    async function handleSubmit (e) {
        e.preventDefault()
            await axios.post("http://localhost:3001/videogames", game);
            setGame({
              name: "",
              image: "",
              description: "",
              released: "",
              rating: "",
              genres: [],
              platforms: []
            });
            alert("Game succesfully created!");
        
    }

    function handleChange (e) {
        e.preventDefault()
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={styles.all}>
            <div className={styles.nav}>
                <Nav />
            </div>
            <div className={styles.cont}>
                <form onSubmit={handleSubmit} className={styles.formCont}>
                    <div className={styles.form}>
                        <label>Name</label>
                        <input type="text" placeholder="Enter a name..." name="name" value={game.name} onChange={handleChange}></input>
                        <label>Description</label>
                        <textarea name="description" placeholder="Enter a description..." value={game.description} onChange={handleChange}></textarea>
                        <label>Released</label>
                        <input type="date" name="released" placeholder='yyyy-mm-dd' value={game.released} onChange={handleChange}></input>
                        <label>Image</label>
                        <input type="text" placeholder="Enter a URL" name="image" value={game.image} onChange={handleChange}></input>
                        <label>Rating</label>
                        <input name="rating" placeholder="Enter a rating 0 - 5" value={game.rating} onChange={handleChange}></input>
                        <label>Genres</label>
                        <select name="genres" value={game.genres} onChange={e => handleGenres(e)}>
                            {genres.map((g) => (
                                <option value={g.name}>{g.name}</option>
                            ))}
                        </select>
                        <label>Platforms</label>
                        <select name="platforms" value={game.platforms} onChange={handlePlatforms}>
                            <option value={1}>PC</option>
                            <option value={2}>Android</option>
                            <option value={3}>PlayStation 5</option>
                            <option value={4}>XBOX</option>
                            <option value={5}>iOS</option>
                        </select>
                        <button type="submit">
                            CREATE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}