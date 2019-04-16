<template>
    <div>
        <textarea v-model="quote" placeholder="add quote here..."></textarea>
        <br>
        <button @click="addQuote()">Add Quote</button>
    </div>
</template>

<script>
    export default {
        name: "QuoteInput.vue",
        data() {
            return {
                quote: ""
            }
        },
        methods: {
            addQuote() {
                this.$emit("add-quote", this.quote);
            }
        }
    }
</script>

<style scoped>

</style>