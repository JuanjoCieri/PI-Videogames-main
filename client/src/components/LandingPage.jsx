import React from "react";
import {Link} from "react-router-dom"
import styles from "./LandingPage.module.css"

export default function LandingPage () {
    return (
        <div className={styles.landingCont}>
            <div className={styles.landing}>
                <h1 className={styles.tittle}>VIDEOGAMES</h1>
                <img className={styles.chop} src="https://www.megaidea.net/wp-content/uploads/2021/07/gta5-img-megaidea-896x1024.png" alt="" />
                <Link to="/home">
                    <button className={styles.button}><span>ENTER</span></button>
                </Link>
            </div>
        </div>
    )
}