<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your SET App"/>
    <div @click="set">Haya</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import { BASE_URL } from '../consts';

export default {
  name: 'home',
  components: {
    HelloWorld
  }, 
  mounted() {
    const es = new EventSource(`${BASE_URL}/stream`);
    es.addEventListener('set', (event) => {
      console.log(event);
    })
    es.addEventListener('play', (event) => {
      console.log(event.data);
      axios.get(`${BASE_URL}/cards/board`).then(console.log);
    })
  },
      methods: {
        set() {
          axios.put(`${BASE_URL}/cards/set`, {set: [1,2,3]})
          axios.post(`${BASE_URL}/game/players`, {playersNum: 2, name: 'Yotam'})
        }
    }
}
</script>
