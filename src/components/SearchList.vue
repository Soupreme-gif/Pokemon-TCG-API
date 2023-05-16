<template>
    <h3>Search Results<!--{{title}}--></h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
        <div class="col" v-for="card in cards.items" :key="card.id">
            <search-list-item
                    :card="card"
                    @add-to-deck="addToDeck"
            ></search-list-item>
        </div>
    </div>
</template>

<script>
import SearchCollection from "@/models/SearchCollection.js";
import SearchListItem from "@/components/SearchListItem.vue";

export default {
    name: "SearchList",
    components: {SearchListItem},

    props: {
        cards: {type: SearchCollection}
    },

    methods: {
        addToDeck(card) {
          this.$emit('add-to-deck', card)
        }
    }

}
</script>

<style scoped>

</style>