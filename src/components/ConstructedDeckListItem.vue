
<template>
 <h6>{{card.name}}<button class="btn btn-warning" @click="remove">remove from deck</button></h6>
</template>

<script>
export default {
    name: "ConstructedDeckListItem",

    props: {
        card: {type: Object, required: true},
    },

    methods: {
      remove(){
       console.log(this.card)
       this.$emit('remove', this.card)
      }
    }
}
</script>

<style scoped>

</style>