<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server #{{ server.id }}</p>
        <p>Status: {{ server.status }}</p>
        <p><button @click="resetStatus()">Reset Status</button></p>
    </div>

</template>

<script>
    import { eventBus } from "../../main";

    export default {
        props:
            {
                server: Object
            },
        methods:
            {
                resetStatus() {
                    this.server.status = "Normal";
                    eventBus.$emit("serverDataChanged", this.server);
                }
            },
        created() {
            eventBus.$on("serverSelectionChanged", (serverData) => {
                this.server = serverData;
            })
        }
    }
</script>

<style>

</style>
