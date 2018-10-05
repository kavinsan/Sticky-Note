<template>
  <div class="board">
    <app-header></app-header>
      
    <app-note v-for="note in notes" :note="note" :key="note.id" :delete-callback="deleteNote" :add-callback="addNote"></app-note>

    <button v-on:click="addNote()">click me</button>
    
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Note from "../components/Note.vue"
import Locker from "../components/Locker.vue"

export default {
  components: {
    "app-header": Header,
    "app-note": Note,
    "app-locker": Locker
  },
  name: 'Board',
  data () {
    return {
      msg: 'Welcome to Your Board!',
      notes: [],
      title: "title",
      nextId: 0
    }
  },
  methods: {
    addNote: function(){
      this.notes.push({id: this.nextId});
      this.nextId += 1;
    },
    deleteNote: function(id) {

      this.notes = this.notes.filter(note => notes.id !== id);
      console.log(this.notes)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    border: 2px solid blue;
    height: 500px; 
  }
  .board {
    background-image: url("../assets/board/background.jpg");
    background-repeat: repeat;
    width: 100%;
    height: 1000px;
    position: absolute;
    right: 0;
    left: 0;
    margin-top: -10px;
    border: 2px solid red; 
  }
</style>
