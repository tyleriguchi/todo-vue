// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    todos: [],
    newTodo: ""
  },

  mutations: {
    UPDATE_NEW_TODO(state, message) {
      state.newTodo = message
    },

    ADD_NEW_TODO(state) {
      const newTodo = {
        message: state.newTodo,
        isCompleted: false,
      }
      state.todos.push(newTodo)
    }
  },

  actions: {
    updateTodo({commit}, todo) {
      commit('UPDATE_NEW_TODO', todo)
    },
    addNewTodo({commit}) {
      commit('ADD_NEW_TODO')
    }
  },

  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter( todo => !todo.isCompleted),
    completedTodos: state => state.todos.filter( todo => todo.isCompleted),
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
