<template>
    <img :src="card.smallImage" :alt="card.name" class="img-fluid w-60">
    <div role="toolbar" class="btn-toolbar">
        <div role="group" class="btn-group">
                     <button type="button" class="btn btn-primary"
                             data-bs-toggle="modal"
                             :data-bs-target="'#' + mid"
                     >Details</button>
            <button type="button" class="btn btn-primary" @click="addToDeck"
            >Add</button>
        </div>
    </div>

    <card-details-modal v-model="showDetails" :id="mid" >
        <component :is="cardComponent(card)" :card="card"/>
    </card-details-modal>
</template>

<script>

import EnergyDetails from "@/components/EnergyDetails.vue";
import PokemonDetails from "@/components/PokemonDetails.vue";
import TrainerDetails from "@/components/TrainerDetails.vue";
import CardDetailsModal from "@/components/CardDetailsModal.vue";


export default {
    name: "SearchListItem",
    components: {CardDetailsModal, PokemonDetails, TrainerDetails, EnergyDetails},

    data() {
        return {
            mid: 'modal-' + Math.floor(Math.random() * 10e16), // generate large random number
            showDetails: false,
        }
    },

    methods: {
        cardComponent(card) {
            return card.type + 'Details';
        },

        addToDeck() {
        console.log(this.card)
        this.$emit('add-to-deck', this.card)
        },

        displayDetails() {
            this.showDetails = true;
        },

    },

    props: {
        card: {type: Object, required: true},

    },
}
</script>

<style scoped>

</style>