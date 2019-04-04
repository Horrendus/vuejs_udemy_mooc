<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <server-status-list :server-count="serverCount"></server-status-list>
            <server-details></server-details>
        </div>
        <hr>
        <div class="row">
            <server-management></server-management>
        </div>
    </div>
</template>

<script>
    import ServerStatusList from "./components/ServerStatusList.vue"
    import ServerDetails from "./components/ServerDetails.vue"
    import ServerManagement from "./components/ServerManagement.vue"

    export default {
        data: function () {
            return {
                serverCount: 5
            }
        },
        components: {
            ServerStatusList,
            ServerDetails,
            ServerManagement
        }
    }
</script>

<style>

</style>
