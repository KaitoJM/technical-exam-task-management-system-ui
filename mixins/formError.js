// This mixin collects all the errors from the response object and handle them accordingly.
export default {
    data() {
      return {
        error_response: null,
  
      }
    },
    computed: {
      validation_error_messages() {
        let validation_errors = null;
  
        if (this.error_response?.status == 422) {
          let error_data = this.error_response.data
          let message = error_data.message;
          let errors = error_data.errors;
  
          let error_messages = [];
  
          for (const key in errors) {
            if (errors[key] && errors[key].length) {
              errors[key].forEach(msg => {
                error_messages.push(msg);
              });
            }
          }
  
          validation_errors = {
            main_error: message,
            messages: error_messages
          }
        } else {
          let error_data = this.error_response.data
          let message = error_data.message;

          validation_errors = {
            main_error: message,
            messages: []
          }
        }
  
        return validation_errors
      },
      form_error() {
        let errors = {};
  
        if (this.error_response?.status == 422 && this.error_response.data.errors) {
          for (const key in this.error_response.data.errors) {
            errors[key] = true
          }
        }
  
        return errors;
      }
    },
    methods: {
      detect_errors(response) {
        this.error_response = response;
      },
      toastErrors() {
        if (this.validation_error_messages?.messages?.length) {
          this.validation_error_messages.messages.forEach(msg => {
            this.$toast.error(msg)
          });
        } else if (this.validation_error_messages?.main_error) {
          this.$toast.error(this.validation_error_messages.main_error)
        }
      },
      check_error(field) {
        return this.form_error?.[field]
      }
    }
  }