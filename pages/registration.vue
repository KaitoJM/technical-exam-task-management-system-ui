<template>
  <div class="form-container">
    <p class="title">Sign Up!</p>
    <b-form @submit.prevent.stop="register">

      <b-form-group
        label="Name"
        label-for="input-name"
      >
        <b-form-input
          id="input-name"
          v-model="$v.form.name.$model"
          placeholder="John Doe" 
          :state="validateState('name')"
          aria-describedby="input-name-feedback"
        ></b-form-input>
        <b-form-invalid-feedback
          id="input-name-feedback"
        >
          Name is required.
        </b-form-invalid-feedback>
      </b-form-group>

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

      <b-form-group
        label="Confirm Password"
        label-for="input-password"
      >
        <b-form-input
          id="input-cpassword"
          v-model="$v.form.cpassword.$model"
          type="password"
          placeholder="••••••••"
          :state="validateState('cpassword')"
          aria-describedby="input-cpassword-feedback"
        ></b-form-input>
        <b-form-invalid-feedback
          id="input-cpassword-feedback"
        >
          Confirmation password should be the same as password
        </b-form-invalid-feedback>
      </b-form-group>

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

import { validationMixin } from "vuelidate";
import { required, email, sameAs } from "vuelidate/lib/validators";

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
        cpassword: '',
      },
      loading: false
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      name: {
        required,
      },
      password: {
        required,
      },
      cpassword: {
        required,
        sameAs: sameAs('password')
      },
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async register() {
      // local form validation
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

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
</script>
  
<style lang="scss" scoped>
.form-container {
  width: 400px;
}
</style>