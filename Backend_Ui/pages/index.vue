<template>
  <div>
    <h1>Login V5 wie schnell ?</h1>
    <form @submit="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <UButton type="submit">Login</UButton>
      <UButton>Button</UButton>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login(event) {
      event.preventDefault();

      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>

</style>