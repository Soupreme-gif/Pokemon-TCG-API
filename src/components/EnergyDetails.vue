<template>
    <!--template for the rest of the modal that goes in the slot in the CardDetailsModal component-->
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{card.name}}</h5>
            </div>
            <div class="modal-body">
                          <!--calls the largeImage method to get the large parameter in-->
                <img :src="card.largeImage" :alt="card.name" class="img-fluid w-75">
            </div>
            <div class="modal-footer">
                <!--calls the linkName method to get a version of the card's name so that it will link the API's home
              website-->
                <a :href="'https://pokemoncard.io/card/' + card.linkName + '-' + card.id">More information on this card</a>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
import {EnergyCard} from "@/models/Card";

export default {
    name: "EnergyDetails",

    props: {
        card: EnergyCard
    }
}
</script>

<style scoped>

</style>