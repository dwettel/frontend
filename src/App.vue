<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if (!this.$store.getters.isAuthenticated) {
      this.$router.push('/login');
    }
  }
};
</script>
