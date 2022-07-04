import React from "react";
import styles from "./Nav.module.css"

export default function Nav () {
    return (
        <div className={styles.glass}>
                <div className={styles.content}>
                    <h2>Video Games</h2>
                    <ul>
                        <h4>MENÚ</h4>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/form'>Create</a></li>
                        <li><a href='/platforms'>Platforms</a></li>
                        <li><a href='/about'>About me</a></li>
                    </ul>
                </div>
        </div>
    )
}