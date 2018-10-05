<template>
    <div ref="note" class="note">
        <div id="title" @mousedown="mouseDown">
            <label v-if="!edit" @dblclick="editTitle">{{ title }}</label>
            <input @focus="$event.target.select()" id="changeTitle" v-if="edit" v-model="title" @keyup.enter="saveText();" type="text">
            <div id="options">
                <font-awesome-icon id="minimize" @mousedown.stop='ignoreDrag' @mouseup.stop='minNote' class="option" icon="minus"/>
                <font-awesome-icon id="minimize" @mousedown.stop='ignoreDrag' @mouseup.stop='addNote' class="option" icon="plus"/>
                <font-awesome-icon id="delete" @mousedown.stop='ignoreDrag' @mouseup.stop="deleteNote(note.id)" class="option" icon="trash-alt"/>
            </div>
        </div>
        <div id="content">
            <textarea ref="content">
                
            </textarea>
        </div>
    </div>
</template>

<script>

export default {
  
  name: 'Note',
  props: {
      note: {
          type: Object,
          required: true
      },
      deleteCallback: {
          type: Function,
          required: false,
          default: null
      },
      addCallback: {
          type: Function,
          required: false,
          default: null
      }
  },
  data () {
    
    return {
      title: "title",
      edit: false,
      isDown: false,
      isMin: false,
      offset: [0,0]
    }

  },
  mounted() {
    window.addEventListener('mouseup', this.mouseUp);
    window.addEventListener('mousemove', this.mouseMove);
  },
  methods: {
    
    //Title functions
    editTitle: function(){
        this.edit = !this.edit

    },
    saveText: function(){
        if(this.title != ""){
            this.editTitle();
        } else {
            alert('You must enter a title!')
        }
    },

    //title bar functions
    mouseDown: function(event){
        this.isDown = true;
        this.offset = [
            this.$el.offsetLeft - event.clientX,
            this.$el.offsetTop - event.clientY
        ];
        //event.preventDefault();
    },
    mouseUp: function(event){
        this.isDown = false;
        //event.preventDefault();
    },
    minNote: function(){
        console.log("Note has been minimized")
        if(this.isMin == false){
            this.$refs.content.style.height = '10px';
        }
        else {
            this.$refs.content.style.height = '300px';
        }
        this.isMin = !this.isMin
    },
    addNote: function(){
        if(this.addCallback){
            this.addCallback(this.id);
        }
    },
    deleteNote: function(id){
        if (this.deleteCallback) {
            console.log(id)
            this.deleteCallback(id);
            
        }
        window.removeEventListener('mouseup', this.mouseUp);
        window.removeEventListener('mousemove', this.mouseMove);
    },
    mouseMove: function(event){

        if(this.isDown){

            this.$refs.note.style.left = (event.clientX + this.offset[0] + 'px');
            this.$refs.note.style.top = (event.clientY + this.offset[1] + 'px');
        }
    },
    ignoreDrag: function(){
        return
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    label {
        display: inline-block;
    }
    .note {
        width: 300px;
        display: table;
        border: 2px solid firebrick;
        position: absolute;
    }
    #title {
        background-color: #f2ec82; /* d9d272*/
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;

        font-weight: bold;
        text-align: center;

    }
    #content {
        width: 100%;
        display: table-cell;
        float: left;
        background-color: #FFFC97; /*  f2ec82*/
        padding-top: 5px;
    }
    #options {
        padding-right: 10px;
        float: right;
    }
    #options .option {
        margin-right: 5px;
        margin-left: 5px;
    }
    #changeTitle {
        width: 50%;
        font-weight: bold;
        font-size: 10pt;
        background: transparent;
        border-bottom: 2px solid black;
        text-align: center;
    }
    #delete:hover {
        color: firebrick;
    }
    textarea {
        width: 90%;
        height: 300px;
        min-width:300px;
        min-height:10px;
        background:transparent;
        border: none;
        outline: none;
        box-shadow: none;
    }

</style>
