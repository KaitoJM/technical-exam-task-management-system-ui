<template>
  <div class="form-container">
    <b-form @submit.prevent.stop="login">
      <p class="title" v-if="!$route.query.new_registered_email">Welcome back!</p>
      <p class="title" v-else>Welcome new user!</p>

      <b-form-group
        label="Email"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="$v.form.email.$model"
          placeholder="johndoe@example.org" 
          :state="validateState('email')"
          aria-describedby="input-email-feedback"
        ></b-form-input>
        <b-form-invalid-feedback
          id="input-email-feedback"
        >
          Email is required and should be a valid email address.
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        label="Password"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          v-model="$v.form.password.$model"
          type="password"
          placeholder="••••••••"
          :state="validateState('password')"
          aria-describedby="input-password-feedback"
        ></b-form-input>
        <b-form-invalid-feedback
          id="input-password-feedback"
        >
          Password is required.
        </b-form-invalid-feedback>
      </b-form-group>

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

import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  layout: 'gate',
  mixins: [validationMixin, FormError],
  data() {
    return {
        form: {
          email: '',
          password: '',
        },
        loading: false
    }
  },
  mounted() {
    // gets the email from the URL query string and set it as default email value.
    if (this.$route.query.new_registered_email) {
      this.form.email = this.$route.query.new_registered_email
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
      },
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async login() {
      // local form validation
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

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
            // the following functions are from the FormError mixins method.
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