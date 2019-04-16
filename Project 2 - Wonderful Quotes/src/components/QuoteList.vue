<template>
    <div class="quote-list">
        <div class="quote" v-for="(quote, index) in quotes" @click="$emit('quote-clicked', index)">
            {{quote}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuoteList.vue",
        props: {
            quotes: Array
        }
    }
</script>

<style scoped>
    .quote-list {
        overflow: hidden;
    }

    .quote {
        width: 100px;
        max-height: 150px;
        border: 1px solid grey;
        margin: 2px;
        float: left;
        overflow-wrap: break-word;
    }
</style>
