function DeckListCollection() {

    let arr = []

    arr.addDeck = function (deck) {
        console.log(deck)
        this.push(deck);

        return this; // allows for chaining
    }

    arr.removeDeck = function (deck) {
        console.log(deck)
        this.splice(deck, 1);

        return this; // allows for chaining
    }


    return arr;

}

export default DeckListCollection