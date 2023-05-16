import SearchCollection from "@/models/SearchCollection";
import {PokemonCard, TrainerCard, EnergyCard} from "@/models/Card";

class SearchCollectionFactory {

    static createFromTCGAPI(cards)
    {
// creates empty collection to return when this method is used
        const collection = new SearchCollection()
        // creates a type of card based on the supertype of the card
        cards.forEach(card => {
            // this variable becomes one of the three supertypes of cards depending on the supertype of the card
            let newCard = false;
            // this switch statement checks the supertype parameter and assigns the new card based on the supertype
            switch (card.supertype.toLowerCase()){
                case 'pokémon':
                    newCard = Object.assign(new PokemonCard(), card)
                    break;
                case 'trainer':
                    newCard = Object.assign(new TrainerCard(), card)
                    break;
                case 'energy':
                    newCard = Object.assign(new EnergyCard(), card)
                    break;
                default :
                    console.warn('Found an unsupported supertype', card);
            }
            // Then the card is added to SearchCollection
            if(newCard){
                collection.addCard(newCard)
            }
        })
        return collection;

    }

}
export default SearchCollectionFactory