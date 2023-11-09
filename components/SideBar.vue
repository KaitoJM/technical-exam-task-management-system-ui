<template>
  <div>
    <img class="logo" src="~/static/logo.png"/>
    <br />
    <h2 class="greetings">Hi {{ $auth.user.name }}!</h2>
    <p>Welcome back to your workspace.</p>
    <TaskFilter />
  </div>
</template>

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