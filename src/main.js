import { createApp } from 'vue';
import { createStore } from 'vuex'
import App from './App.vue';
import router from './router';

const store = createStore({
  state: {
    authenticated: false
  },
  mutations: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    }
  },
  getters: {
    isAuthenticated: state => state.authenticated
  }
});

createApp(App).use(store).use(router).mount('#app');
