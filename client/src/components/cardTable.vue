<template>
  <div id="cardTable">
    <table v-if="openCards.length"><tr class="row" v-for="indexRow in 3" :key="indexRow"><td class="colo" v-for="indexData in 4" :key="indexData"><Card class="card" @updateSet="updateSet" :playerMadeMistake="playerMadeMistake" :cardData="openCards[((indexRow -1) * 4) + indexData - 1]"/></td></tr></table>
    <button @click="checkIfThereAreSets" type="button" class="btn btn-secondary">No set</button>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
import { BASE_URL } from "../consts";
import globals from "../globals";
import alertify from "alertifyjs";
import { mapState, mapActions } from "vuex";

export default {
  name: "cardTable",
  components: {
    Card
  },
  data: function() {
    return {
      set: [],
      playerMadeMistake: false,
      openCards: []
    };
  },
  computed: {
    ...mapState(["name"]),
    ...mapState(["players"]),
    setObjs() {
      return this.set.map(cardId =>
        this.openCards.find(cardObj => cardId === cardObj.id)
      );
    }
  },
  methods: {
    ...mapActions(["updatePlayersList"]),
    updateSet(cardId) {
      let isInSet = this.set.indexOf(cardId);
      // If its already in the set, remove from set
      if (isInSet !== -1) {
        this.set.splice(isInSet, 1);
      } else {
        // If its not in the set, add to set
        this.set.push(cardId);
      }
      console.log(this.set);
    },
    rejectSet() {
      this.set = [];
      this.playerMadeMistake = !this.playerMadeMistake;
    },
    loadCards() {
      axios
        .get(BASE_URL + "/cards/board")
        .then(response => (this.openCards = response.data));
    },
    checkSet(setObjectsArray) {
      let number = false;
      let symbol = false;
      let shading = false;
      let color = false;
      if (
        (setObjectsArray[0].number == setObjectsArray[1].number &&
          setObjectsArray[0].number == setObjectsArray[2].number) ||
        (setObjectsArray[0].number != setObjectsArray[1].number &&
          setObjectsArray[0].number != setObjectsArray[2].number &&
          setObjectsArray[1].number != setObjectsArray[2].number)
      ) {
        number = true;
      }
      if (
        (setObjectsArray[0].symbol == setObjectsArray[1].symbol &&
          setObjectsArray[0].symbol == setObjectsArray[2].symbol) ||
        (setObjectsArray[0].symbol != setObjectsArray[1].symbol &&
          setObjectsArray[0].symbol != setObjectsArray[2].symbol &&
          setObjectsArray[1].symbol != setObjectsArray[2].symbol)
      ) {
        symbol = true;
      }
      if (
        (setObjectsArray[0].shading == setObjectsArray[1].shading &&
          setObjectsArray[0].shading == setObjectsArray[2].shading) ||
        (setObjectsArray[0].shading != setObjectsArray[1].shading &&
          setObjectsArray[0].shading != setObjectsArray[2].shading &&
          setObjectsArray[1].shading != setObjectsArray[2].shading)
      ) {
        shading = true;
      }
      if (
        (setObjectsArray[0].color == setObjectsArray[1].color &&
          setObjectsArray[0].color == setObjectsArray[2].color) ||
        (setObjectsArray[0].color != setObjectsArray[1].color &&
          setObjectsArray[0].color != setObjectsArray[2].color &&
          setObjectsArray[1].color != setObjectsArray[2].color)
      ) {
        color = true;
      }

      if (number && symbol && shading && color) {
        return true;
      } else {
        return false;
      }
    },
    checkUsersSet() {
      if (this.checkSet(this.setObjs)) {
        alertify.success("It's a set!");
        this.loadMore();
        this.rejectSet();
      } else {
        alertify.error("No set, dude.");
        this.rejectSet();
      }
    },
    loadMore() {
      const locationsInBoard = this.set.map(cardId =>
        this.openCards.findIndex(openCard => cardId === openCard.id)
      );
      axios.put(`${BASE_URL}/cards/set`, {
        set: locationsInBoard,
        name: this.name
      });
    },
    checkIfThereAreSets() {
      let wasSetFound = false;
      for (
        let firstCard = 0;
        firstCard < this.openCards.length && !wasSetFound;
        firstCard++
      ) {
        for (
          let secondCard = firstCard + 1;
          secondCard < this.openCards.length && !wasSetFound;
          secondCard++
        ) {
          for (
            let thirdCard = secondCard + 1;
            thirdCard < this.openCards.length && !wasSetFound;
            thirdCard++
          ) {
            let randomSet = [
              this.openCards[firstCard],
              this.openCards[secondCard],
              this.openCards[thirdCard]
            ];
            wasSetFound = this.checkSet(randomSet);
            console.log(wasSetFound);
          }
        }
      }

      if (wasSetFound) {
        alertify.error("try again");
      } else {
        alertify.success("Sorry, there aren't any sets!");
      }
    },
    initListeners() {
      const self = this;
      globals.es.addEventListener("set", event => {
        const eventData = JSON.parse(event.data);
        for (let i = 0; i < 3; i++) {
          if (!eventData.cards.length) {
            self.$set(self.openCards, eventData.locations[i], {});
          } else {
            self.$set(self.openCards, eventData.cards[i].location, eventData.cards[i]);
          }
          this.updatePlayersList(JSON.parse(event.data).players);
        }
      });
    }
  },
  created() {
    this.initListeners();
    setTimeout(() => {
      this.loadCards();
    }, 0);
  },
  watch: {
    set: function() {
      if (this.set.length == 3) {
        this.checkUsersSet();
      }
    }
  }
};
</script>

<style scoped>
#cardTable {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 10%;
  margin-right: 10%;
}

.row {
  margin-bottom: 20px;
}

.colo {
  margin-left: 20px;
}

.btn {
  margin-top: 50px;
  width: 100px;
}
</style>