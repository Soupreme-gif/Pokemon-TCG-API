<template>

        <div class="dropdown" v-show="decks.length !== 0">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Load Deck
                </button>

                <ul class="dropdown-menu">
                        <saved-deck-list-item
                            v-for="deck in decks"
                            :deck="deck"
                            :key="deck.id"
                            @remove-deck="removeDeck"
                            @load-deck="loadDeck"
                        ></saved-deck-list-item>
                </ul>
        </div>
</template>

<script>
import SavedDeckListItem from "@/components/SavedDeckListItem.vue";
import DeckListCollection from "@/models/DeckListCollection";

export default {
    name: "SavedDeckList",
    components: {SavedDeckListItem},

    props: {
        decks: {type: DeckListCollection},
    },

    methods: {

        removeDeck()
        {
            console.log(this.deck);
            this.$emit('remove-deck', this.deck)
        },

        loadDeck(deck)
        {
            console.log(deck);
            this.$emit('load-deck', deck)
        },

    },

}
</script>

<style scoped>

</style>