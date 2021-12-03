import React from "react";

function Paginado ({famososPerPage, allFamosos, paginado}) { //declaro paginado
    const pageNum = []
    for (let i = 1; i <= Math.ceil(allFamosos/famososPerPage); i++) { //divide todos los paises por cantidad de paises que quiero en cada pag
        pageNum.push(i)
    }

    return (
        <nav >
        </nav>
    )
}

export default Paginado;