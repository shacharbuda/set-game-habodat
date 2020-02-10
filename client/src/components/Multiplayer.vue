<template> 
        <div class="row board-container">
            <cardTable class="cardBoard"></cardTable>
            <infoPanel class="info"></infoPanel>
        </div>
</template>

<script>
import cardTable from "./cardTable.vue";
import infoPanel from "./InfoPanel.vue";

export default {
  components: {
    cardTable,
    infoPanel
  },
};
</script>

<style scoped>

.row {
    margin-top: 25px;
}
</style>
