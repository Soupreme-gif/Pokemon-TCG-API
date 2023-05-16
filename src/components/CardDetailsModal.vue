<template>
    <!--template of the outer div of the modal with a slot for the details of each of the card types-->
    <div class="modal fade" :id="id">
<slot>

</slot>
    </div>
</template>

<script>
export default {
    name: "CardDetailsModal",

    props: {
        id: String
    }
}
</script>

<style scoped>

</style>