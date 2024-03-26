<template>
  <div>
    <h1>Login</h1>
    <button @click="loginWithGitHub">Anmelden mit GitHub</button>
  </div>
</template>

<script>
export default {
  methods: {
    async loginWithGitHub() {
      try {
        await this.$auth.loginWith('github');

        const authResult = await this.$auth.loginWith('github');

        if (authResult.success) {
          this.$router.push('/');
        } else {
          console.error('Fehler bei der Authentifizierung:', authResult.error);
        }
      } catch (error) {
        console.error('Fehler beim Anmelden:', error);
      }
    }
  }
}
</script>
