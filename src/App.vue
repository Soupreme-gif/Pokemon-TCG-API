<template>
    <h3 id="name">Danny's Pokemon TCG Deck-builder</h3>
    <div class="container-fluid">
        <div id="controls" class="row">
            <div class="col col-2">
                <form @submit.prevent="searchPokemonCards">
                    <input v-model="keyword" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success me-2" type="submit">Search</button>
                </form>
            </div>
            <div class="col">
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add">Save Deck

                </button>

                <save-deck-modal id="add"
                                 @create-deck="createDeck"
                ></save-deck-modal>

            </div>
            <div class="col">
                <button class="btn btn-primary" @click="clearDeck">Clear Deck</button>
            </div>
            <div class="col">
                <saved-deck-list
                    @remove-deck="removeDeck"
                    @load-deck="loadDeck"
                    :decks="listOfDecks"
                    :deck="deckBeingLoaded"
                ></saved-deck-list>
            </div>
        </div>
    </div>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-sm-8">
                <search-list
                    :cards="searchResults"
                    @add-to-deck="addToDeck"
                ></search-list>
            </div>
            <div class="col-sm-4">
                <constructed-deck-list
                    :cardsInDeck="deckBeingConstructed"
                    @remove="remove"
                ></constructed-deck-list>
            </div>

        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import SearchCollection from "@/models/SearchCollection";
import PokemonTCGAPI from "@/data/PokemonTCGAPI";
import SearchCollectionFactory from "@/models/SearchCollectionFactory";
import SavedDeckList from "@/components/SavedDeckList.vue";
import ConstructedDeckCollection from "@/models/ConstructedDeckCollection";
import DeckListCollection from "@/models/DeckListCollection"
import SearchList from "@/components/SearchList.vue";
import ConstructedDeckList from "@/components/ConstructedDeckList.vue";
import SaveDeckModal from "@/components/SaveDeckModal.vue";



export default {
  name: 'App',
  components: {
      SaveDeckModal,
      ConstructedDeckList,
      SearchList,
     SavedDeckList,
      //HelloWorld
  },

    data() {
        return {
            searching: true,
            keyword: 'Charizard',
            searchResults: new SearchCollection(),
            deckBeingConstructed: new ConstructedDeckCollection(),
            deckBeingLoaded: new ConstructedDeckCollection(),
            listOfDecks: new DeckListCollection(),

        }

    },

    props: {

    },

    mounted: function ()  {
        // perform default search
        console.log("this function is being called")
        this.searchPokemonCards();
    },

    methods: {

      // adds card to the deck being constructed
        addToDeck(card)
        {

            this.deckBeingConstructed.addCard(card)
        },

        //removes a card from the deck being constructed
        remove(card)
        {
            this.deckBeingConstructed.removeCard(card)
        },

        // creates a deck with a user provided name and automatically created id
        createDeck(deck)
        {
            console.log(deck)
          this.listOfDecks.addDeck(deck)
        },

        // empties all of the cards in the deck being constructed
        clearDeck()
        {
            this.deckBeingConstructed.removeAll(this.deckBeingConstructed)
        },

        // deletes a deck from the saved deck dropdown list
        removeDeck(deck)
        {
            this.listOfDecks.removeDeck(deck)
        },

        // puts the contents of an already consturcted deck into the deck being constructed
        // while also clearing it out
        loadDeck()
        {
            console.log(this.deckBeingLoaded)
            this.deckBeingConstructed.loadPreConstructedDeck(this.deckBeingConstructed, this.deckBeingLoaded)
        },

        clearResults(){
            // clears the list that collects the search results
            this.searchResults = new SearchCollection();
        },

      searchPokemonCards(){

          if(this.keyword)
          {
              this.clearResults();

              this.searching = true;


              PokemonTCGAPI
                  // performs an axios get based the keyword provided by the user
                  .search(this.keyword)
                  .then(response => {
                      console.log('api response', response);

                      // creates all of the the different types of pokemon cards and stores them in search results
                      if(response.data.data.length > 0){
                          this.searchResults = SearchCollectionFactory.createFromTCGAPI(response.data.data);
                      }

                  })
                  // an error messsage for the event that the search goes wrong
                  .catch(error => {
                      console.error("AJAX SEARCH ERROR!", error);
                  })
                  .finally(() => {
                      // remove the loading screen
                      this.searching = false;
                  })

          }

      }

    },

}
</script>

<style lang="scss">
#app {

}
</style>
