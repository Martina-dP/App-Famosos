import React from 'react'; 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Card/Card"
import Paginado from '../Paginado/Paginado';
import { getFamosos, postFamosos  } from "../../actions/action"
import FormVotacion from "../FormVotacion/FormVotacion"

export function Home() {

    const infoUsuarios = useSelector(state => state.resultados);
    const allFamosos = useSelector ((state) => state.famosos) 
    console.log("HOLAFAMOSOS", allFamosos)

    const [currentPage, setCurrentPage] = useState(1);
    const [famososPerPage, setfamososPerPage] = useState(1) 
    const indexOfLast = currentPage * famososPerPage
    const indexOfFirst = indexOfLast - famososPerPage
    const currentFamoso = allFamosos.slice(indexOfFirst, indexOfLast)

    const paginado = (pageNum) => {
      setCurrentPage(pageNum)
  }

      const dispatch = useDispatch();
      const navigate = useNavigate();

      useEffect(() =>{
        dispatch(getFamosos());
      },[dispatch])
    
      const [input, setInput] = useState({
          votacion: "",
          famosoId : currentFamoso.id,
          usuarioId : infoUsuarios.id
      });
    
      function handleChange(e) {
        e.preventDefault();
        if (e.target.name === "votacion") {
          if (currentPage >= Math.ceil(allFamosos.length / famososPerPage))
            setTimeout(()=>navigate("/otro"),)
            setCurrentPage(currentPage + 1);
        } 
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        dispatch(postFamosos(input));
        setInput({
          votacion: "",
          famosoId : currentFamoso.id,
          usuarioId : infoUsuarios.id
        });
      }
    
      console.log("Testing input: ", input);


      console.log("CurrentFamoso", currentFamoso)

    return(
      <div>
        <Link to="/">
          <button> Volver al Inicio </button>
        </Link>
        <div>
          {currentFamoso?.length > 0 ? (
            currentFamoso.map((el) => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  lastname={el.lastname}
                  img={el.imaimgge}
                />
              );
            })
          ) : (
            <div>
              <p>No se encontraron famosos</p>
            </div>
          )}
        </div>
        <div >
          <Paginado 
            famososPerPage = {famososPerPage}
            allFamosos = {allFamosos.length}
            paginado = {paginado}
          />
        </div>
        {/* <FormVotacion/> */}
        <div>
          <form onSubmit={handleSubmit}>
            <button name="votacion" onClick={handleChange} type="submit" value="True">
              Si
            </button>
            <button name="votacion" onClick={handleChange} type="submit" value="False">
              No
            </button>
          </form>
        </div>
        {/* <div>
            <button onClick={handlePage} name="prev"> Anterior </button>
            <button onClick={handlePage} name="next"> Siguiente </button>
        </div> */}
      </div>
    )
  
};

export default Home;