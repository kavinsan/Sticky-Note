<template>
  <header>
    <!-- <font-awesome-icon id="menu" icon="bars" size="2x"/> -->
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Board!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        background-color: #AE956D;
        padding-top: 1px;
        padding-bottom: 1px;
        margin-top: 0px;
        margin-bottom: 10px;
        border-bottom: 5px solid #301F0D;
    }
    #menu {
        display: inline-block;
        position: relative;
        
    }
</style>
