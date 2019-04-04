<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in serverCount">
                <server-status :index="index"></server-status>
            </li>
        </ul>
    </div>
</template>

<script>
    import ServerStatus from "./ServerStatus.vue"

    export default {
        props: {
            serverCount: Number
        },
        components: {
            ServerStatus
        }
    }
</script>