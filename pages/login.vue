<template>
  <div class="form-container">
    <p class="title">Welcome back!</p>
    <div class="custom-input">
      <label>Email</label>
      <b-form-input placeholder="johndoe@example.org"></b-form-input>
    </div>
    <div class="custom-input">
      <label>Password</label>
      <b-form-input type="password" placeholder="Password here"></b-form-input>
    </div>
    <b-button block variant="primary">Login</b-button>
    <br />
    <hr />
    <br />
    <center>
      <span>Don't have an account? <b-link to="registration">Sign up!</b-link></span>  
    </center>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'gate',
  data() {
    return {
        test: process.env.API_URL
    }
  },
  mounted() {
    this.$axios.post('/test');
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  width: 400px;
}
</style>