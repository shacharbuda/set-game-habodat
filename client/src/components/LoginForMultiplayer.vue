<template>
<div id="page">

    <div class="text-center">
        
        <form class="form-signin ">
            <img src="../assets/multiplayer.png" alt="multiplayer">
            <h1 class="input">Multiplayer Game</h1>
            <input id="player-name" v-model="playerName" class="form-control input" placeholder="Player Name" autofocus>
            Number of Players:
            <select v-model="playerAmount" class="form-control input">
                  <option selected value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
            </select>
            <button @click="checkDetails" type="button" class="btn btn-primary" :disabled="waitingForPlayers">Let's Play!</button> 
        </form>
        <br>
        <div v-if="waitingForPlayers">
            <span>Waiting for players</span>
            <div class="loader"></div>
        </div>
    </div>
</div>
</template>

<script>
import alertify from "alertifyjs";
import axios from 'axios';
import globals from '../globals'
import {BASE_URL} from '../consts'
import { mapActions } from "vuex";
import store from '../store.js'

export default {
    data() {
        return {
            playerName: "",
            playerAmount: "",
            waitingForPlayers: false,
        }
    },
    computed: {
        },
    methods: {
        ...mapActions(["updatePlayersList"]),
        checkDetails() {
            const playerNameRegex = new RegExp('^[A-Za-z]+$');
            const playerAmountRegex = new RegExp('^[0-9]+$');
            this.waitingForPlayers = playerNameRegex.test(this.playerName) && playerAmountRegex.test(this.playerAmount);
            if (this.waitingForPlayers == false) {
                alertify.error("Make sure your name contains only letters, and that you have chosen the number of players");
            } else {
                store.dispatch('setName', this.playerName)
                axios.post(BASE_URL+'/game/players', {
                    playersNum: this.playerAmount,
                    name: this.playerName
                })
                globals.es.addEventListener('play', (event) => {
                    let data = JSON.parse(event.data);
                    this.updatePlayersList(data);
                    this.$router.push('multiplayer')
                })
            }
        }
    }
};
</script>

<style>
h1 {
  font-size: 1.75rem;
}
.text-center {
  width: 100%;
  align-items: center;
  padding-top: 10%;
}

form {
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
}

.input {
    margin-bottom: 20px;
}

button {
    width: 100%;
}

.loader {
  border: 5px solid #f3f3f3;
  border-radius: 60%;
  border-top: 5px solid #9f3fff;
  border-right: 5px solid #67aebb;
  border-bottom: 5px solid #e6b800;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loader {
    margin: 0 auto;
}
</style>
