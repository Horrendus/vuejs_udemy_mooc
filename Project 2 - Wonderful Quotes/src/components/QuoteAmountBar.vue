<template>
    <div>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <div class="w3-light-grey w3-small">
            <div class="w3-container w3-green w3-center" :style="quoteBarWidth">
                {{numberOfQuotes}}/10
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            numberOfQuotes: Number
        },
        computed: {
            quoteBarWidth() {
                return "width:" + (this.numberOfQuotes*10) + "%";
            }
        }
    }
</script>

<style>
</style>
