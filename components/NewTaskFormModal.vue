<template>
  <b-modal
    id="modal-new-task"
    centered
    title="Create New Task"
    ok-title="Add"
    @ok.prevent="submit"
    @cancel="clearForm"
    :ok-disabled="loading"
    :cancel-disabled="loading"
  >
    <b-container>
      <b-form>
        <b-row>
          <b-col class="col-md-12">
            <b-form-group
              label="Title"
              label-for="input-title"
            >
              <b-form-input
                id="input-title"
                v-model="$v.form.title.$model"
                trim
                :state="validateState('title')"
                aria-describedby="input-title-feedback"
              ></b-form-input>
              <b-form-invalid-feedback
                id="input-title-feedback"
              >
                Task title is required.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col class="col-md-12">
            <b-form-group
              label="Description"
              label-for="input-description"
            >
              <b-form-textarea
                id="input-description"
                rows="3"
                max-rows="6"
                v-model="$v.form.description.$model"
                :state="validateState('description')"
                aria-describedby="input-title-feedback"
              ></b-form-textarea>
              <b-form-invalid-feedback
                id="input-description-feedback"
              >
                Task description is required.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
          <b-col class="col-md-12">
            <b-form-group
              label="Due date"
              label-for="input-due"
            >
              <b-form-datepicker
                id="input-due"
                :min="min_due"
                v-model="$v.form.due_date.$model"
                :state="validateState('due_date')"
                aria-describedby="input-due-feedback"
              ></b-form-datepicker>
              <b-form-invalid-feedback
                id="input-due-feedback"
              >
                Task due date is required.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import FormError from '~/mixins/FormError.js'

import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      min_due: new Date(),
      loading: false,
      form: {
        title: '',
        description: '',
        due_date: ''
      }
    }
  },
  mixins: [validationMixin, FormError],
  computed: {
    ...mapGetters({
      fetching: 'tasks/fetching',
    }),
  },
  validations: {
    form: {
      title: {
        required
      },
      description: {
        required,
      },
      due_date: {
        required,
      }
    }
  },
  methods: {
    ...mapActions({
      addData: 'tasks/addData'
    }),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async submit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.loading = true

      try {
        const response = await this.addData(this.form);
        
        if (response.status == 201) {
          this.$toast.success('A new task has been successfully added.');
          this.loading = false;
          this.clearForm();
          this.$bvModal.hide('modal-new-task')
        }
      } catch (error) {
        this.loading = false;
        this.detect_errors(error.response);
        this.toastErrors()
      }
    },
    clearForm() {
      this.form.title = '';
      this.form.description = '';
      this.form.due_date = '';
    }
  }
}
</script>