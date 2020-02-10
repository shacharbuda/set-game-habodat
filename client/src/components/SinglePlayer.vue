<template>
    <div class="row board-container">
        <cardTable class="cardBoard"></cardTable>
        <infoOnePlayer class="info"></infoOnePlayer>
    </div>
</template>

<script>
import cardTable from "./cardTable";
import infoOnePlayer from "./infoOnePlayer.vue";

export default {
    components: {
        cardTable,
        infoOnePlayer
    },
}
</script>

<style>
.row {
    margin-top: 25px;
}

.info {
    margin-top: 30px;
}
</style>
