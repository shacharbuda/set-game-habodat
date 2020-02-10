<template>
    <div id="navbar">
      <nav class="navbar">
      <div class="nav justify-content-start">
        <router-link to="/"><a class="navbar-brand text-light"><img id="logo" src="../assets/SetLogoWithoutBackground.png" alt="set logo"></a></router-link>
        <div class="btn-group mr-2" role="group" aria-label="First group">
          <router-link to="/leaderboard"><button class="nav-item btn btn-outline-light my-2 my-sm-0" type="submit">Leaderboard</button></router-link>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
          <router-link to="/instructions"><button class="nav-item btn btn-outline-light my-2 my-sm-0" type="submit">Instructions</button></router-link>
        </div>
      </div>
      <div class="nav justify-content-end">
        <div class="btn-group mr-2" role="group" aria-label="First group">
            <router-link to="/single-player"><button id="single-player" class="btn btn-outline-light my-2 my-sm-0" type="submit">Play Alone</button></router-link>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
            <router-link to="/loginForMultiplayer"><button id="multiplayer" class="btn btn-outline-light my-2 my-sm-0" type="submit">Play With Friends</button></router-link>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
            <router-link to="/"><button id="restart" class="btn btn-outline-light my-2 my-sm-0" type="submit" @click="restart">Restart Game</button></router-link>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
import axios from 'axios'
import {BASE_URL} from '../consts'
export default {
  methods: {
    restart() {
      axios.put(`${BASE_URL}/game/restart`);
    }
  }
};
</script>

<style scoped>
#logo {
  width: 100%;
  height: 100%;
}

.navbar-brand {
  width: 90px;
  height: 50px;
}

#navbar {
  background-color: #9f3fff;
}

.nav-item {
  background-color: #9f3fff;
  border-color: #9f3fff;
}

#multiplayer {
  background-color: #67aebb;
  border-color: #67aebb;
}

#single-player {
  background-color: #e6b800;
  border-color: #e6b800;
}

#restart {
  background-color: #8ee600;
  border-color: #8ee600;
}
</style>

