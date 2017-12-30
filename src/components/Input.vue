<template>
  <div class="hello">
    <form @submit.prevent="submitTodo">
      <input :value="newTodo" @input.trim="updateTodo" />
      <button type='submit'>Add Todo</button>
    </form>
    <div>{{newTodo}}</div>

    <ul>
      <li v-for="todo in todos">
        {{todo.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    newTodo() { return this.$store.getters.newTodo},
    todos() { return this.$store.getters.todos},
  },

  methods: {
    updateTodo (e) {
      this.$store.dispatch('updateTodo', e.target.value)
    },
    submitTodo(e) {
      this.$store.dispatch('addNewTodo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
