/*

import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({children}) => {

    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemon, setGlobalPokemon] = useState([])
    const [offset, setOffset] = useState(0)

    //Usar CustomHook - useForm
    const {valueSearch, OnImputChange, onResetForm} = useForm({
        valueSearch:'',
    });


    //Estado para la aplicacion simple
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);


    //Llamar 50 pokemones a la API
    const getAllPokemons = async(limit = 50)=>{
        const baseURL = 'https://pokeapi.co/api/v2/'
        const res = await fetch (`${baseURL}pokemon?limit=${limit}&offset}=${offset}`
        );
        const data = await res.json();

        const promises = data.results.map(async(pokemon)=>{
            const res = await fetch (pokemon.url);
            const data = await res.json();
            return data;
        });
        
        const results = await Promise.all(promises)

        setAllPokemons([...allPokemons, ...results]);
        setLoading(false)
    };

    //Llamar a todos los Pokemones
    const getGlobalPokemons = async()=>{

        const baseURL = 'https://pokeapi.co/api/v2/';
        const res = await fetch (`${baseURL}pokemon?limit=100000&offset=0`
        );
        const data = await res.json();

        const promises = data.results.map(async(pokemon)=>{
            const res = await fetch (pokemon.url);
            const data = await res.json();
            return data;
        });
        
        const results = await Promise.all(promises);
        setGlobalPokemon(results);
        setLoading(false);
    }

    //Llamar a un pokemon por ID

    const getPokemonById = async(id)=>{
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();
        return data;
    };


    useEffect(()=>{
        getAllPokemons();
    },[]);

    useEffect(()=>{
        getGlobalPokemons();
    },[]);
  
    return(
        <PokemonContext.Provider
            value={{
                valueSearch,
                OnImputChange,
                onResetForm,
                allPokemons,
                globalPokemon,
                getPokemonById
            }}
        >
            {children}
        </PokemonContext.Provider>
    );

};
*/

import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({children}) => {
  return (
    <PokemonContext.Provider value ={{
        numero: 0
    }}>
            {children}
    </PokemonContext.Provider>
  );
};
