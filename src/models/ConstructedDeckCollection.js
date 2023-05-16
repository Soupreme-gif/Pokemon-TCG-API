

 function ConstructedDeckCollection(id, name) {

     this.id = id ?? '1';
     this.name = name ?? 'New Deck';

    let cardArr = [];

    // adds a card to the soon-to-be constructed deck
    cardArr.addCard = function (card) {
        console.log(card)
        this.push(card);

        return this; // allows for chaining
    }

     // removes a card to the soon-to-be constructed deck
    cardArr.removeCard = function (card) {
        console.log(card)
        this.splice(card, 1);

        return this; // allows for chaining
    }

    cardArr.removeAll = function (array) {

        while(array.length > 0)
        {
            array.pop()
        }

    }
    // this method takes the cards inside an already-constructed deck you select and add those cards to the
     // to-be-constructed deck
    cardArr.loadPreConstructedDeck = function (deckBeingBuilt, loadedDeck)
    {
        console.log(loadedDeck)


        // empties what ever is in the constructed deck currently
        while(deckBeingBuilt.length > 0)
        {
            deckBeingBuilt.pop()
        }


        // adds all the cards from deck that is already made to the deck currently being made
        console.log('load method is called')
        for(let i = 0; i < loadedDeck.length; i++)
        {
            deckBeingBuilt.addCard(loadedDeck[i]);
        }

    }

    return cardArr;

}

export default ConstructedDeckCollection