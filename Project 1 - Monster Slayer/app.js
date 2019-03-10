new Vue({
        el: "#app",
        data: {
            gameRunning: false,
            players:
                [
                    {
                        health: 30,
                        name: "Player",
                    },
                    {
                        health: 50,
                        name: "Monster"
                    }
                ]
        },
        methods: {
            percentHealth(playerId) {
                return this.players[playerId].health + '%'
            }
        }
    }
);
