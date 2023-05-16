import axios from "axios";

class PokemonTCGAPI {
    static search(keyword){


        // build request arguments
        let endpoint = 'https://api.pokemontcg.io/v2/cards';
        let params = {
            q: 'name:"' + keyword + '"',
        }

        let config = {
            params: params,
        }

        // execute ajax request using promises
        return axios.get(endpoint, config);
    }
}

export default PokemonTCGAPI