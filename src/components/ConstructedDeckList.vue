
<template>
    <div class="col">
        <h3>Deck</h3>
        <constructed-deck-list-item v-for="card in cardsInDeck"
                                    :card="card"
                                    :key="card.id"
                                    @remove="remove"
        ></constructed-deck-list-item>
    </div>
</template>

<script>
import ConstructedDeckListItem from "@/components/ConstructedDeckListItem.vue";
import ConstructedDeckCollection from "@/models/ConstructedDeckCollection";

export default {
    name: "ConstructedDeckList",
    components: {ConstructedDeckListItem},

    props: {
        cardsInDeck: {type: ConstructedDeckCollection}
    },

    methods: {
        remove(card)
        {
            console.log(card)
            this.$emit('remove', card)
        }
    },
}
</script>

<style scoped>

</style>