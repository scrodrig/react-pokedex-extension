import axios from 'axios';

class PokemonUtils {

    static getPokemon = async (id: number) => {
        const baseUrl:string = 'https://pokeapi.co/api/v2/'
        try {
            const response = await axios.get(`${baseUrl}pokemon/${id}/`);
            const pokemon = response.data;
            const species = await axios.get(pokemon.species.url);
            pokemon.species = species.data
            return pokemon;
        } catch (error) {
            console.error(error);
        }
    };

    pickDescription = (pokemon: any, locale: string) => {
        const descriptions = pokemon.species.flavor_text_entries.filter((e: any) => e.language.name === "en").map((e: any) => e.flavor_text)
        return descriptions[Math.floor(Math.random() * descriptions.length)]
    }

    static loadMove = async (url: string) => {
        const response = await axios.get(url);
        return response.data
    }
}

export default PokemonUtils;