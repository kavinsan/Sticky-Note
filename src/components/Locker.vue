<template>
    <div id="locker">
        <header>
            <h1>{{ msg }}</h1>
            <font-awesome-icon id="menu" icon="bars" size="2x"/>
        </header>
        <div id="options">
            <h3 id="text">Your Bins</h3>
            <div id="iconsPanel">
                <font-awesome-icon icon="archive" class="icons" @mouseup.stop='addBin' size="1x"/>
                <font-awesome-icon icon="archive" class="icons" @mouseup.stop='addBin' size="1x"/>
                <font-awesome-icon icon="archive" class="icons" @mouseup.stop='addBin' size="1x"/>
            </div>
        </div>
        <div id="wholeList">
        <div id="binList" v-for="(bin, index) in bins" :key="index">
            <app-bin :add-callback="addBin"></app-bin>
        </div>
        </div>
  </div>
</template>

<script>
import Bin from "../components/Bin.vue"

export default {
  components: {
      "app-bin": Bin
  },
  name: 'Locker',
  data () {
    return {
      msg: 'Locker',
      bins: [],
      count: 0
    }
  },
  methods: {
    addBin: function(){
      this.bins.push(this.count)
      this.count++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #locker{
        background: #383838;
        width: 300px;
        height: 90%;
        margin-top: -10px;
        padding-bottom: 1.5%;
        border-bottom: 2px solid #585858;
        border-right: 2px solid #585858;
    }
    h1 {
        display: inline-block;
        padding-right: 25%;
        padding-left: 25%;
        font-size: 30px;
        
    }
    .icons{
        color: black;

    }
    #options {
        margin-top: 4px;
        margin-bottom: 4px;
        display: flex;

    }
    #iconsPanel {
        margin-top: 21px;
        margin-left: 140px;
    }

    #wholeList {
        border-bottom: 2px solid #585858;
    }
    #text {
        margin-left: 10px;
        font-size: 16px;
        color: #585858;
    }

</style>
