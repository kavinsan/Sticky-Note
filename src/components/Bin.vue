<template>
    <div v-el="bin" id="bin">
        <font-awesome-icon icon="caret-down" id="listDown" size="lg" @click="list"/>
        <p id="title">Bin 1</p>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        flip: false
    }
  },
  methods: {
    addBin: function(){
        if(this.addCallback){
            this.addCallback();
        }
    },
    list: function(){
        console.log("click")
        this.flip = !this.flip;
        if(this.flip) {
            this.$els.bin.setAttribute("flip", "vertical")
        }
    }
  }
}
</script>

<style>
    #listDown {
        color: black;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
    }
    #title {
        margin-right: 25px;
        font-weight: bold;
    }
    #bin {
        border-top: 1px solid #585858;
        text-align: center;
  
    }
</style>
