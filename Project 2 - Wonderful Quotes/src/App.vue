<template>
    <div class="container">
        <quote-amount-bar :number-of-quotes="quotes.length"></quote-amount-bar>
        <quote-input @add-quote="addQuote"></quote-input>
        <quote-list :quotes="quotes" @quote-clicked="removeQuote"></quote-list>
        <div class="footer">
            <p>Info: Click on a quote to delete it!</p>
        </div>
    </div>
</template>

<script>
    import QuoteAmountBar from "./components/QuoteAmountBar.vue"
    import QuoteList from "./components/QuoteList.vue"
    import QuoteInput from "./components/QuoteInput.vue"

    export default {
        data() {
            return {
                quotes: []
            }
        },
        components: {
            QuoteAmountBar,
            QuoteList,
            QuoteInput
        },
        methods: {
            addQuote(quote) {
                if (this.quotes.length < 10) {
                    this.quotes.push(quote);
                } else {
                    alert("Can not add more than 10 quotes");
                }
            },
            removeQuote(quoteIndex) {
                this.quotes.splice(quoteIndex, 1);
            }
        }
    }
</script>

<style>
</style>
