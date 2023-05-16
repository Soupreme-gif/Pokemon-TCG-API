<template>

    <li><a class="dropdown-item" @click="loadDeck">{{deck.name}} </a><button class="btn btn-danger" @click="removeDeck">Delete</button></li>
    <hr class="dropdown-divider">
</template>

<script>

import ConstructedDeckCollection from "@/models/ConstructedDeckCollection";

export default {
    name: "SavedDeckListItem",

    props: {
        deck: {type: ConstructedDeckCollection},
    },

    methods: {

        removeDeck()
        {
            console.log(this.deck);
            this.$emit('remove-deck', this.deck)
        },

        loadDeck()
        {
            console.log(this.deck);
            this.$emit('load-deck', this.deck)
        },

    },
}
</script>

<style scoped>

</style>