import React from 'react'; 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card"
import { getFamosos  } from "../../actions/action"

export function Home() {
  
    const allFamosos = useSelector ((state) => state.famosos) 
    console.log("HOLA", allFamosos)

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getFamosos());
    },[dispatch])

    return(
      <div>
        <Link to="/">
          <button> Salir </button>
        </Link>
        <div>
          {allFamosos?.length > 0 ? (
            allFamosos.map((el) => {
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
      </div>
    )
  
};

export default Home;