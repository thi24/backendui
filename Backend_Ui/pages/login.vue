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
        // Starten Sie den Authentifizierungsfluss
        await this.$auth.loginWith('github');

        // Warten Sie auf den Abschluss der Authentifizierung
        const authResult = await this.$auth.loginWith('github');

        // Überprüfen Sie, ob die Authentifizierung erfolgreich war
        if (authResult.success) {
          // Navigieren Sie zur Startseite oder einer anderen gewünschten Seite
          this.$router.push('/');
        } else {
          // Behandeln Sie den Fehler oder zeigen Sie eine Fehlermeldung an
          console.error('Fehler bei der Authentifizierung:', authResult.error);
        }
      } catch (error) {
        console.error('Fehler beim Anmelden:', error);
      }
    }
  }
}
</script>
