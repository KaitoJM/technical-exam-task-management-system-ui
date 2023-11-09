<template>
  <div>
    <img class="logo" src="~/static/logo.png"/>
    <br />
    <h2 class="greetings">Hi {{ $auth.user.name }}!</h2>
    <p>Welcome back to your workspace.</p>
    <b-input-group class="mt-3">
      <b-form-input
        size="lg"
        placeholder="Find task">
      </b-form-input>
      <b-input-group-append>
        <b-button variant="primary">
          <font-awesome-icon :icon="['fa', 'search']"/>
        </b-button>
      </b-input-group-append>
    </b-input-group>
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