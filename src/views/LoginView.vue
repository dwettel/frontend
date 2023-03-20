<template>
  <div class="login-container">
    <form class="login-form">
      <h2>Login</h2>
      <div class="form-input">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-input">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-submit">
        <button type="submit" @click.prevent="login">Login</button>
      </div>
      <div class="error-message" v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import Keycloak from 'keycloak-js'

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      let keycloak = new Keycloak({
        url: 'http://localhost:8080/auth',
        realm: 'MyApp Realm',
        clientId: 'springboot-keycloak-client'
      })

      keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
        console.log(authenticated)
      }).catch(error => {
        this.errorMessage = 'Invalid username or password'
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-input label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input input {
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
  background-color: #f2f2f2;
}

.form-submit button {
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #428bca;
  color: #fff;
  cursor: pointer;
}

.error-message {
  color: #ff0000;
  margin-top: 20px;
}
</style>
