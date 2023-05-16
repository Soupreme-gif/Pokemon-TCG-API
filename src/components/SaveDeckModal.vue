

<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <form @submit.prevent="createDeck">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalTitle">Add Deck</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name of Deck</label>
                            <input id="name" type="text" class="form-control" v-model="newDeck.name">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Never mind</button>
                        <button type="submit" class="btn btn-primary">Create Deck</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "SaveDeckModal",

    data: function () {
        return {
            newDeck: {
                id: Math.floor(Math.random() * 10e16),
                name: '',
            },

        }

    },

    props: {
        id: String
    },

    methods: {
        createDeck()
        {

            console.log(this.newDeck)

            this.$emit('create-deck', this.newDeck)

            this.newDeck = {
                id: Math.floor(Math.random() * 10e16),
                name: '',
            }

           // close the modal
            //bootstrap.Modal.getInstance(this.$el).hide();

        },
    }
}
</script>

<style scoped>

</style>