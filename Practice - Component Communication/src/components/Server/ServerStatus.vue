<template>
    <div>
        <p>Server #{{ server.id }}</p>
        <p>Status: {{ server.status }}</p>
    </div>
</template>

<script>
    import { eventBus} from "../../main";

    export default {
        props: {
            server: Object
        },
        created() {
            eventBus.$on('serverDataChanged', (serverData) => {
                if (serverData.id === this.server.id) {
                    this.server = serverData;
                }
            })
        }
    }
</script>