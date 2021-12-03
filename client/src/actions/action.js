import axios from "axios";

export const GET_FAMOSOS = "GET_FAMOSOS";
export const POST_FORM = "POST_FORM";
export const POST_FAMOSOS = "POST_FAMOSOS";

export function getFamosos () {
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/famosos")
        return dispatch({
            type : "GET_FAMOSOS",
            payload : json.data
        })
    }
}

export function postForm (input) {
    return async function(dispatch){
        var json = await axios.post("http://localhost:3001/usuarios", input)
        console.log(json)
        return dispatch({
            type : "POST_FORM",
            payload : json.data
        })
    }
}

export function postFamosos (resultado) {
    console.log("RESULTADO",resultado)
    return async function(dispatch){
        var json = await axios.post("http://localhost:3001/votaciones", resultado)
        return dispatch({
            type : "POST_FAMOSOS",
            payload : json.data
        })
    }
}