import React from "react";
import style from "./Card.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postForm } from "../../actions/action";


function Card({name, lastname, img }){

    //     const dispatch = useDispatch();
    //     const navigate = useNavigate();
    //     const [errors, setError] = useState({});
    
    // const [input, setInput] = useState({
    //    value : ""
    // })
    
    // function handleChange(e){
    //     setInput({
    //         ...input,
    //         [e.target.name] : e.target.value
    //     })
    // }
    
    
    // function handleSubmit(e){
    //     e.preventDefault()
    //     dispatch(postForm(input))
    //     alert("hola")
    //     setInput({
    //         value : ""
    //     })
    // }


    return(
    <div className = {style.container}>
            <img className = {style.img} src = {img} alt="img not found" />
            <h2 className = {style.nom}>Sigues a {name} {lastname} ? </h2>
            <button> si </button>
            <button> no </button>
{/* 
            <form onSubmit = {e => handleSubmit(e)}>
            <div>
                <label> Sigues a {name} {lastname} ? </label>
                <input 
                type = "text"
                value = {input.value}
                name = "value"
                onChange={(e) => handleChange(e)}
                />
            </div>
        </form> */}


        </div>
    )} 

export default Card;