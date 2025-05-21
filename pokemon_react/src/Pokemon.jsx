import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "./index.css"
import { PokemonCards } from "./PokemonCards";


export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=30";

    const fetchPokemon = async() => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const detailedPokemonData = data.results.map(async (currPokemon)=> {
                const res = await fetch(currPokemon.url);
                const data = await res.json();
                return data;
            });

            const detailedResponses = await Promise.all(detailedPokemonData);
            setPokemon(detailedResponses);
            setLoading(false);

        } catch (error) {
            console.error(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    const searchData = pokemon.filter((currPokemon) => currPokemon.name.toLowerCase().includes(value.toLowerCase()));

    if(loading){
        return(
            <>
                <div>
                    <h1>Loading....</h1>
                </div>
            </>
        );
    }

    return (
        <>
            <section className="container">
                <header>
                    <h1>Let's Catch Pokemon</h1>
                </header>
                <div className="pokemon-search">
                <div className="search-wrapper">
                    <input
                    type="text"
                    placeholder="Search Pokémon"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                </div>
                <div>
                    <ul className="cards">
                        {searchData.map((currPokemon) => {
                            return(
                                <PokemonCards key={currPokemon.id} pokemonData={currPokemon} />
                            );
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}