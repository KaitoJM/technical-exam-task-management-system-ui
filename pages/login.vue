<template>
  <div class="form-container">
    <b-form @submit.prevent.stop="login">
      <p class="title">Welcome back!</p>
      <div class="custom-input">
        <label>Email</label>
        <b-form-input :class="{error: check_error('email')}" placeholder="johndoe@example.org" v-model="form.email"></b-form-input>
      </div>
      <div class="custom-input">
        <label>Password</label>
        <b-form-input :class="{error: check_error('password')}" type="password" placeholder="Password here" v-model="form.password"></b-form-input>
      </div>
      <b-button type="submit" block variant="primary" :disabled="loading">Login</b-button>
    </b-form>
    <br />
    <hr />
    <br />
    <center>
      <span>Don't have an account? <b-link to="registration">Sign up!</b-link></span>  
    </center>
  </div>
</template>

<script>
import FormError from '~/mixins/FormError.js'

export default {
  name: 'IndexPage',
  layout: 'gate',
  mixins: [FormError],
  data() {
    return {
        form: {
          email: '',
          password: '',
        },
        loading: false
    }
  },
  methods: {
    async login() {
      this.loading = true

      try {
        await this.$axios.get(
          '../sanctum/csrf-cookie'
        )

        await this.$auth.loginWith('local', { data: this.form })
          .then(() => {
            this.$toast.success('Login success')
            this.$router.push('/')
          })
          .catch(err => {
            console.log(err.response)
            this.detect_errors(err.response);
            this.toastErrors()
          })

        this.loading = false
      } catch (error) {
        this.loading = false
        console.log(error)
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