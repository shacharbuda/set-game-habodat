<template>
    <div id="infoOnePlayer">
        <img src="../assets/OrdinaryDisloyalCattle.webp">
        <stopwatch class="clock"></stopwatch>
        <br>

        <CardsLeft></CardsLeft>
    </div>
</template>

<script>
import stopwatch from "./stopwatch.vue";
import CardsLeft from './CardsLeft';

export default {
components: {
    stopwatch,
    CardsLeft
},
data: function() {
    return {
    }
},
mounted() {
},
computed: {
    
},
};
</script>

<style>
#infoOnePlayer {
    height: 200px;
    width: 200px;
}

img {
    width: 70px;
}
</style>
