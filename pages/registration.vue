<template>
  <div class="form-container">
    <p class="title">Sign Up!</p>
    <b-form @submit.prevent.stop="register">
      <div class="custom-input">
        <label>Name</label>
        <b-form-input
          :class="{error: check_error('name')}"
          placeholder="John Doe"
          v-model="form.name">
        </b-form-input>
      </div>
      <div class="custom-input">
        <label>Email</label>
        <b-form-input
          :class="{error: check_error('email')}"
          placeholder="johndoe@example.org"
          v-model="form.email">
        </b-form-input>
      </div>
      <div class="custom-input">
        <label>Password</label>
        <b-form-input
          :class="{error: check_error('password') || password_cofirmation_err}"
          type="password"
          placeholder="••••••••"
          v-model="form.password">
        </b-form-input>
      </div>
      <div class="custom-input">
        <label>Confirm Password</label>
        <b-form-input
          :class="{error: password_cofirmation_err}"
          type="password"
          placeholder="••••••••"
          v-model="cpassword"
        ></b-form-input>
      </div>
      <b-button type="submit" block variant="primary" :disabled="loading">Submit</b-button>
    </b-form>
    <br />
    <hr />
    <br />
    <center>
      <span>Already have an account? <b-link to="login">Log in!</b-link></span>  
    </center>
  </div>
  </template>
  
  <script>
  import FormError from '~/mixins/FormError.js'

  export default {
    layout: 'gate',
    auth: false,
    mixins: [FormError],
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
        },
        cpassword: '',
        password_cofirmation_err: false,
        loading: false
      }
    },
    methods: {
      checkPasswordConfirmation() {
        // password_cofirmation_err will handle the indicator for password and confirmation password error input.
        this.password_cofirmation_err = (this.form.password != this.cpassword) ? true : false
      },
      async register() {
        this.checkPasswordConfirmation();
        
        if (!this.password_cofirmation_err) {
          this.loading = true;
          try {
            let response = await this.$axios.post('/register', this.form);
            this.loading = false;
  
            if (response.status == 201) {
              this.$toast.success(response.data)
              // If registration is successfull, redirect to login page and pass the user's email used.
              // this email will be then used as thje default email value on login page input.
              this.$router.push('/login?new_registered_email=' + this.form.email);
            }
          } catch (error) {
            this.loading = false;
            // the following functions are from the FormError mixins method.
            this.detect_errors(error.response);
            this.toastErrors()
          }
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .form-container {
    width: 400px;
  }
  </style>