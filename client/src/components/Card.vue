<template>
<div class="card" v-bind:class="{'chosenCard': chosen}" @click="chooseCard">
    <div class="shapes">
    <div v-for="i in cardData.number" :key="i">
        <img v-if="srcPath" :src="require(`@/assets/${srcPath}`)"><br>
    </div></div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData: Object,
    playerMadeMistake: Boolean,
    updateSet: {type: Function},
  },
  data: function() {
    return {
        srcPath: null,
        chosen: false,
    }
  },
  methods: {
      chooseCard() {
        this.chosen = !this.chosen;
        this.$emit('updateSet', this.cardData.id);
      },
      updatePic() {
       this.srcPath = this.cardData.symbol + `_` + this.cardData.shading + `_` + this.cardData.color + `.png`;
      }
  },
  mounted() {
    this.updatePic();
  },
  watch: {
      playerMadeMistake:function() {
          this.chosen = false;
      },
      cardData() {
        this.updatePic();
      }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 0.3s;
  border-radius: 25px;
  border: 1.4px solid rgb(179, 178, 178);
  padding: 20px;
  width: 100px;
  height: 150px;
  box-sizing: unset;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.2), 0 6px 45px 0 rgba(0, 0, 0, 0.19);
}

.container {
  padding: 2px 16px;
}

.shapes {
    height: 100%;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.chosenCard {
    background-color: rgb(255, 238, 182);
    box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.2), 0 6px 45px 0 rgba(0, 0, 0, 0.19);
}

img {
  width: 80px;
}
</style>
