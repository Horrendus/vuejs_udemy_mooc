<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers" @click="serverSelectionChanged(server)">
                <server-status :server="server"></server-status>
            </li>
        </ul>
    </div>
</template>

<script>
    import ServerStatus from "./ServerStatus.vue"

    import { eventBus } from "../../main";

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: "Critical"},
                    { id: 2, status: "Critical"},
                    { id: 3, status: "Unknown"},
                    { id: 4, status: "Normal"},
                ]
            }
        },
        components: {
            ServerStatus
        },
        methods: {
            serverSelectionChanged(server) {
                eventBus.$emit("serverSelectionChanged", server);
            }
        },
        created() {
            eventBus.$on('serverDataChanged', (serverData) => {
                const index = this.servers.findIndex(server => server.id === serverData.id);
                this.servers[index] = serverData;
            });
        }
    }
</script>

<style>

</style>
