new Vue({
        el: "#app",
        data: {
            gameRunning: false,
            players:
                [
                    {
                        health: 100,
                        name: "Player",
                    },
                    {
                        health: 100,
                        name: "Monster"
                    }
                ],
            roundData:
                [

                ]
        },
        methods: {
            percentHealth(playerId) {
                return this.players[playerId].health + '%'
            },
            startGame() {
                this.players.forEach(function(player) {
                    player.health = 100;
                });
                this.gameRunning = true;
                this.roundData = [];
            },
            doAttack(playerId) {
                const damage = this.getRndInteger(5, 12);
                this.damageOtherPlayer(playerId, damage);
                this.aiTurn(this.otherPlayer(playerId));
            },
            doSpecialAttack(playerId) {
                const damage = this.getRndInteger(3, 17);
                this.damageOtherPlayer(playerId, damage);
                this.aiTurn(this.otherPlayer(playerId));
            },
            doHeal(playerId) {
                const healAmount = this.getRndInteger(5, 12);
                this.healSelf(playerId, healAmount);
                this.aiTurn(this.otherPlayer(playerId));
            },
            doGiveUp() {
                this.gameRunning = false;
            },
            damageOtherPlayer(playerId, damage) {
                const other = this.otherPlayer(playerId);
                const otherPlayer = this.players[other];
                otherPlayer.health = Math.max(otherPlayer.health - damage, 0);
                const round = {"attacker": playerId,
                               "damage": damage,
                               "defender": other};
                this.roundData.push(round);
                if (otherPlayer.health === 0) {
                    alert(otherPlayer.name + ' lost!');
                    this.gameRunning = false;
                }
            },
            healSelf(playerId, amount) {
                this.players[playerId].health = Math.min(this.players[playerId].health + amount, 100);
                const round = {"attacker": playerId,
                               "damage": amount,
                               "defender": null};
                this.roundData.push(round);
            },
            aiTurn(aiID) {
                const otherPlayerHealth = this.players[this.otherPlayer(aiID)].health;
                const ownHealth = this.players[aiID].health;
                if (ownHealth <= 25 && otherPlayerHealth >= 15) {
                    const shouldHeal = this.getRndInteger(0, 4) > 2;
                    if (shouldHeal) {
                        const healAmount = this.getRndInteger(5, 12);
                        this.healSelf(aiID, healAmount);
                        return;
                    }
                }
                const damage = this.getRndInteger(5, 12);
                this.damageOtherPlayer(aiID, damage);
            },
            roundDataString(round) {
                return "${players[round.attacker]} ${round.defender == null ? 'damaged ${players[round.defender]}' : 'healed himself'} for " +
                    "${round.damage} points";
            },
            otherPlayer(playerId) {
                return (playerId + 1) % this.players.length;
            },
            getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
        }
    }
);
