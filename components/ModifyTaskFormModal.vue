<template>
  <b-modal
    id="modal-edit-task"
    centered
    :title="'Edit Task'"
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
          <b-col class="col-md-10">
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
          <b-col class="col-md-5">
            <b-form-group
              label="Status"
              label-for="input-status"
            >
              <b-form-select
                id="input-status"
                v-model="$v.form.status.$model"
                :state="validateState('status')"
                aria-describedby="input-status-feedback"
                :options="statuses"
              ></b-form-select>
              <b-form-invalid-feedback
                id="input-status-feedback"
              >
                Task status is required.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
    <template v-slot:modal-footer>
      <div class="w-100 d-flex justify-content-between align-items-center">
        <div>
          <b-button variant="danger" @click="deleteTask">
            <font-awesome-icon :icon="['fa', 'trash']"/>
            Delete
          </b-button>
        </div>
        <div>
          <b-button @click="cancel" variant="outline-primary" :disabled="loading">Cancel</b-button>
          <b-button @click.prevent="submit" variant="primary" :disabled="loading">
            <font-awesome-icon :icon="['fa', 'save']"/>
            Save
          </b-button>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import FormError from '~/mixins/FormError.js'

import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  props: {
    task_data: null
  },
  data() {
    return {
      min_due: new Date(),
      loading: false,
      form: {
        title: '',
        description: '',
        due_date: '',
        status: ''
      },
      statuses: [
        { value: 'open', text: 'Open' },
        { value: 'in progress', text: 'In Progress' },
        { value: 'completed', text: 'Completed' },
      ]
    }
  },
  mixins: [validationMixin, FormError],
  watch: {
    task_data(data) {
      if (data) {
        this.form = data
      }
    }
  },
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
      },
      status: {
        required,
      }
    }
  },
  methods: {
    ...mapActions({
      editData: 'tasks/editData',
      deleteData: 'tasks/deleteData',
    }),
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    async submit() {
      // local form validation
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.loading = true

      try {
        const response = await this.editData(this.form);
        
        if (response.status == 200) {
          this.$toast.success('Your changes has been saved.');
          this.loading = false;
          this.clearForm();
          this.$bvModal.hide('modal-edit-task')
        }
      } catch (error) {
        this.loading = false;
        // capture and display errors from error code 422 request
        this.detect_errors(error.response);
        this.toastErrors()
      }
    },
    clearForm() {
      this.form.title = '';
      this.form.description = '';
      this.form.due_date = '';
      this.form.status = '';
    },
    cancel() {
      this.clearForm();
      this.$bvModal.hide('modal-edit-task')
    },
    async deleteTask() {
      let answer = confirm('Are you sure you want to remove this task?')
      if (answer) {
        this.loading = true

        try {
          const response = await this.deleteData(this.task_data.id);
          
          if (response.status == 200) {
            this.$toast.success('Task has been deleted');
            this.loading = false;
            this.clearForm();
            this.$bvModal.hide('modal-edit-task')
          }
        } catch (error) {
          this.loading = false;
          // capture and display errors from error code 422 request
          this.detect_errors(error.response);
          this.toastErrors()
        }
      }
    }
  }
}
</script>