import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postForm } from "../../actions/action";

function validate(input) {
    const errors = {};
    if (!input.name) {
      errors.name = "Requerido";
    }
    if (!input.email) {
      errors.email = "Requerido";
    }
    if (
      !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        input.email
      )
    ) {
      errors.email = "Dirección de mail no valida";
    }
    return errors;
  }

function Form(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setError] = useState({});

const [input, setInput] = useState({
    name : "",
    lastname : "",
    email : "",
    edad : "",
    trabajo : ""
})

function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    setError(validate({
        ...input,
        [e.target.name] : e.target.value
    }))
}


function handleSubmit(e){
    e.preventDefault()
    dispatch(postForm(input))
    alert("hola")
    setInput({
        name : "",
        lastname : "",
        email : "",
        edad : "",
        trabajo : "",
    })
    return setTimeout(()=>navigate("/home"),)
}

return (
    <div>
        <Link to = "/">
            <button> Volver al Inicio </button>
        </Link>
        <form onSubmit = {e => handleSubmit(e)}>
            <div>
                <label> name : </label>
                <input 
                type = "text"
                value = {input.name}
                name = "name"
                onChange={(e) => handleChange(e)}
                />
                    {errors.name && (
                        <p> {errors.name} </p>
                    )}
            </div>
            <div>
                <label> lastname : </label>
                    <input 
                    type = "text"
                    value = {input.lastname}
                    name = "lastname"
                    onChange={(e) => handleChange(e)}
                    />
            </div>
            <div>
                <label> email : </label>
                    <input 
                    type = "text"
                    value = {input.email}
                    name = "email"
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.email && (
                        <p> {errors.email} </p>
                    )}
            </div>
            <div>
                <label> edad : </label>
                    <input 
                    type = "text"
                    value = {input.edad}
                    name = "edad"
                    onChange={(e) => handleChange(e)}
                    />
            </div>
            <div>
                <label> trabajo : </label>
                    <input 
                    type = "text"
                    value = {input.trabajo}
                    name = "trabajo"
                    onChange={(e) => handleChange(e)}
                    />
            </div>
            {/* <Link to = "/home"> */}
                <button type = "submit" > Siguiente </button>
            {/* </Link> */}
        </form>
    </div>
)
};

export default Form;