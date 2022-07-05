import React from "react";
import { Link } from "react-router-dom";

export default function Error () {
    return (
        <div>
            <h1>Nothing here 🙄</h1>
            <div>
                <Link to={'/home'}>
                    <button>Back home?</button>
                </Link>
            </div>
        </div>
    )
}