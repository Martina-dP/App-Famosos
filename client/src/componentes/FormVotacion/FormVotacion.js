// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { postFamosos } from "../../actions/action";

// function Form(){
      
//     const infoUsuarios = useSelector(state => state.resultados);
//     const infoFamosos = useSelector(state => state.famosos);

//     console.log("usuario",infoUsuarios);
//     console.log("famoso",infoFamosos);


//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [errors, setError] = useState({});


//     const [input, setInput] = useState({
//         votacion : "",
//         usuarioId : infoUsuarios.id,
//         famosoId : infoFamosos.id
//     })

//     function handleChange(e){
//         console.log("TARGET",e.target);
//         setInput({
//             [e.target.name] : e.target.value
//         })
//     }

//     function handleSubmit(resultado){
//         dispatch(postFamosos({
//             votacion : resultado,
//             usuarioId : infoUsuarios.id,
//             famosoId : infoFamosos.id
//         }))
//         alert("hola"+resultado)
//         // setInput({
//         //     votacion : ""
//         // })
//     }



//     return (
//         <div>
//             <button onClick = {() => handleSubmit(true)}> Si </button>
//             <button onClick = {() => handleSubmit(false)}> No </button>
//         </div>
//     )
// };

// export default Form;