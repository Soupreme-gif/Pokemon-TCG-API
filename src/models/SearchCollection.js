


class SearchCollection {
    _arr;

    constructor(arr) {
        // Load array if provided.
        // Load empty array if one was not provided.
        if (!Array.isArray(arr)) {
            arr = [];
        }

        this._arr = arr;
    }

    // Methods for using the collection.
    addCard(card){
        return this._arr.push(card);
    }

    get items(){
        console.log('this function is working')
        return [...this._arr]
    }

}

export default SearchCollection