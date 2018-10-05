<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
    border: 2px solid red;
    height: 100%;
  }
  #app {

    margin:0 auto;
    height: 100%;
  }
  /**
  * {
    border: 2px solid black; 
  }  **/ 
</style>
