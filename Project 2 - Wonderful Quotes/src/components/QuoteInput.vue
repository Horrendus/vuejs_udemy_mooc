<template>
    <div>
        <textarea :value="value" @input="$emit('input', $event.target.value)" placeholder="add quote here..."></textarea>
        <br>
        <button @click="$emit('add-quote')">Add Quote</button>
    </div>
</template>

<script>
    export default {
        name: "QuoteInput.vue",
        props: {
            value: String
        },
        methods: {
            addQuote() {
                let quote = this.$refs.quote.textContent;
                this.$emit("input", quote);
            }
        }
    }
</script>

<style scoped>

</style>