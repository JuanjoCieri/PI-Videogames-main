import React from "react";
import styles from "./Paginated.module.css"

export default function Paginated ({gamesPage, gamesState, paginated}) {
    const pageNumbers = []

    for (let i = 0; i <= Math.ceil(gamesState/gamesPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <nav>
            <ul className={styles.ul}>
                { pageNumbers && pageNumbers.map((num) => (
                    <li key={num}>
                        <button className={styles.btt} onClick={() => paginated(num)}>{num}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}