import React from "react";
import style from "./Card.module.css"

function Card({name, lastname, img }){

    return(
        <div className = {style.container}>
            <img className = {style.img} src = {img} alt="img not found" />
            <h2 className = {style.nom}>Sigues a {name} {lastname} ? </h2>
        </div>
    )} 

export default Card;