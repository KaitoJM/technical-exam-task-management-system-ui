<template>
    <div class="form-container">
      <p class="title">Sign Up!</p>
      <div class="custom-input">
        <label>Name</label>
        <b-form-input placeholder="John Doe"></b-form-input>
      </div>
      <div class="custom-input">
        <label>Email</label>
        <b-form-input placeholder="johndoe@example.org"></b-form-input>
      </div>
      <div class="custom-input">
        <label>Password</label>
        <b-form-input type="password" placeholder="••••••••"></b-form-input>
      </div>
      <div class="custom-input">
        <label>Confirm Password</label>
        <b-form-input type="password" placeholder="••••••••"></b-form-input>
      </div>
      <b-button block variant="primary">Submit</b-button>
      <br />
      <hr />
      <br />
      <center>
        <span>Already have an account? <b-link to="login">Log in!</b-link></span>  
      </center>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'gate',
    auth: false,
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