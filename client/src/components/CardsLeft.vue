<template>
  <div class="detail-container">
      <h1>Cards Left<br/><span class="badge badge-pill badge-info">{{cardsCount}}</span></h1>
    </div>
</template>
    
<script>
import globals from '../globals';
export default {
    data() {
        return {
            cardsCount: Number
        }
    },
    created() {
        const self = this;
    
      globals.es.addEventListener('cardsCount', (event) => {
        self.cardsCount = event.data;
      });
    }
}
</script>

<style scoped>
.detail-container p {
  margin: 0;
}

h1 {
    text-align: center;
}

.detail-container span {
  margin-top: 2px;
}

.detail-container .badge {
  margin-bottom: auto;
  margin-top: auto;
  background-color: #5517b8;
}

.detail-container {
  margin-bottom: 1rem;
}
</style>