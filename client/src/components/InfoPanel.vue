<template>
    <div id="info-panel">
        Players: 
        <br>
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="player in players" :key="player.name">
            {{player.name}}
            <span class="badge badge-primary badge-pill">{{player.points}}</span></li>
        </ul>
        <br />

        <CardsLeft></CardsLeft>
    </div>
</template>

<script>
import { mapState } from "vuex";
import CardsLeft from './CardsLeft'
export default {
  computed: {
    ...mapState(["players"])
  },
  components: {
    CardsLeft
  }
};
</script>

<style>
#info-panel {
    height: 250px;
    width: 300px;
}
</style>
