import React from "react";
import { Link } from "react-router-dom";

function landing () {
    return (
        <div>
            <div>
                <p> Responde algunas preguntas y participa por un sorteo </p>
                <Link to = "/Form">
                    <button> Comenzar </button>
                </Link>
            </div>
        </div>
    )
}

export default landing;