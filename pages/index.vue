<template>
  <div>
    <b-button v-b-modal.modal-new-task variant="primary" style="float: right;">New Task</b-button>
    <h1>My Tasks</h1>
    <b-table striped :items="data">
      <template #cell(status)="data">
        <b-badge variant="warning" v-if="data.value == 'open'">{{ data.value }}</b-badge>
        <b-badge variant="info" v-if="data.value == 'in progress'">{{ data.value }}</b-badge>
        <b-badge variant="success" v-if="data.value == 'completed'">{{ data.value }}</b-badge>
      </template>
    </b-table>
    <b-modal id="modal-new-task" centered title="Create New Task" cancel-disabled ok-disabled>
      <NewTaskForm />
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  data() {
    return {
    }
  },
  async asyncData({ store, error }) {
    await Promise.allSettled([
      store.dispatch('tasks/fetchData').catch(err => {
        const response = err.response
        console.log({ statusCode: response.status, message: response.statusText })
      }),
    ])
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks/data',
    }),
    data() {
      if (this.tasks) {
        return this.tasks.map(task => {
          return {
            id: task.id,
            title: task.title,
            due_date: task.due_date,
            status: task.status
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bolder;
  font-family: 'Poppins', sans-serif;
  text-transform: capitalize;
  color: #071b52;
  margin-bottom: 20px;
}
</style>
