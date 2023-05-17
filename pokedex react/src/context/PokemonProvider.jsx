import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({children}) => {
  
    const [offset, setoffset] = useState(0)



    //Llamar 50 pokemones a la API

    const getAllPokemons = async(limit = 50)=>{
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch (`${baseURL}pokemon?limit=${limit}&offset}=${offset}`)
        const data = await res.json();
        console.log(data)

    }


    useEffect(()=>{
        getAllPokemons()
    },[])
  
    return(
        <PokemonContext.Provider value={{
            numero:0
        }}>
            {children}
        </PokemonContext.Provider>
    );
  
};
