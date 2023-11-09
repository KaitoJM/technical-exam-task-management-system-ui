<template>
  <div>
    <img class="logo" src="~/static/logo.png"/>
    <br />
    <h2 class="greetings">Hi {{ $auth.user.name }}!</h2>
    <p>Welcome back to your workspace.</p>
    <TaskFilter />
    <b-button variant="link" @click="logout" class="position-absolute" style="bottom: 20px; right: 20px">
      Logout
      <font-awesome-icon :icon="['fa', 'right-from-bracket']"/>
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  width: 80%;
  margin: 30px auto;
}
.greetings {
  font-weight: bolder;
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  font-size: 1.5em;
  color: #071b52;
}
</style>