import { Flame, Zap, Star, Ruler, Weight, Gauge, Shield } from "lucide-react";

export const PokemonCards = ({ pokemonData }) => {
    return (
        <li className="pokemon-card">
            <figure>
                <img
                    src={pokemonData.sprites.other.dream_world.front_default}
                    alt={pokemonData.name}
                    className="pokemon-image"
                />
            </figure>
            <h1 className="pokemon-name">{pokemonData.name}</h1>

            <div className="pokemon-info pokemon-highlight">
                <Zap size={16} color="#facc15" />{" "}
                <p>{pokemonData.types.map((currType) => currType.type.name).join(", ")}</p>
            </div>

            <div className="grid-three-cols">
                <p className="pokemon-info">
                    <Ruler size={16} /> <span>Height:</span> {pokemonData.height}
                </p>
                <p className="pokemon-info">
                    <Weight size={16} /> <span>Weight:</span> {pokemonData.weight}
                </p>
                <p className="pokemon-info">
                    <Gauge size={16} /> <span>Speed:</span> {pokemonData.stats[5].base_stat}
                </p>
            </div>

            <div className="grid-three-cols">
                <div className="pokemon-info">
                    <Star size={16} />
                    <p>{pokemonData.base_experience}</p>
                    <span>Experience</span>
                </div>
                <div className="pokemon-info">
                    <Flame size={16} />
                    <p>{pokemonData.stats[1].base_stat}</p>
                    <span>Attack</span>
                </div>
                <div className="pokemon-info">
                    <Shield size={16} />
                    <p>{pokemonData.abilities[0].ability.name}</p>
                    <span>Ability</span>
                </div>
            </div>
        </li>
    );
};
