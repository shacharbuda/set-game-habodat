<template>
    <div>
    <p @mouseover="toggleToggler">Welcome To Set!</p>
    <button v-if="isShowToggler" class="btn btn-primary" @click="toggleShow">I can't believe that's the whole greet..</button>
    <div class="container" v-if="isShowImgs">
        <img src="@/assets/puppy.jpeg">
        <br />
        <img src="@/assets/puppy.jpeg">
        <br />
        <img src="@/assets/puppy.jpeg">
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowImgs: false,
            isShowToggler: false
        }
    },
    methods: {
        toggleToggler() {
            this.isShowToggler = true;
        },
        toggleShow() {
            this.isShowImgs = true;
            setTimeout(() => {
                this.isShowImgs = false;
            }, 1000)
        }
    }
}
</script>

<style scoped>

    div {
        text-align: center;
    }

    img
    {
    -webkit-animation: spin1 2s infinite linear;
    -moz-animation: spin1 2s infinite linear;
    -o-animation: spin1 2s infinite linear;
    -ms-animation: spin1 2s infinite linear;
    animation: spin1 2s infinite linear;
        display: block;
    }
 
    @-webkit-keyframes spin1 {
    0% { -webkit-transform: rotate(0deg);}
    100% { -webkit-transform: rotate(360deg);}
    }
    @-moz-keyframes spin1 {
    0% { -moz-transform: rotate(0deg);}
    100% { -moz-transform: rotate(360deg);}
    }
    @-o-keyframes spin1 {
    0% { -o-transform: rotate(0deg);}
    100% { -o-transform: rotate(360deg);}
    }
    @-ms-keyframes spin1 {
    0% { -ms-transform: rotate(0deg);}
    100% { -ms-transform: rotate(360deg);}
    }
    @-keyframes spin1 {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
    } 


    .container {
        width: 278.1px;;
        margin: auto;
    }

    button {
        width: unset;
    }
</style>
