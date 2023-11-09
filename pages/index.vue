<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h1>Your Tasks</h1>
      <b-button @click="$bvModal.show('modal-new-task')" variant="primary" style="float: right;">
      <font-awesome-icon :icon="['fa', 'plus']"/>
      New Task
    </b-button>
    </div>
    <FilterSelected />
    <b-table striped :items="data" :busy="isBusy">
      <template #cell(title)="data">
        <b-link href="#" class="text-dark" @click.prevent="showEditForm(data.item.id)">{{ data.value }}</b-link>
      </template>
      <template #cell(status)="data">
        <b-badge variant="warning" v-if="data.value == 'open'">{{ data.value }}</b-badge>
        <b-badge variant="info" v-if="data.value == 'in progress'">{{ data.value }}</b-badge>
        <b-badge variant="success" v-if="data.value == 'completed'">{{ data.value }}</b-badge>
      </template>
    </b-table>
    <NewTaskFormModal />
    <ModifyTaskFormModal :task_data="selected_task" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  data() {
    return {
      selected_task: null
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
      isBusy: 'tasks/fetching',
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
  },
  methods: {
    showEditForm(id) {
      const item = this.tasks.find(item => {
        return item.id == id
      });

      this.selected_task = JSON.parse(JSON.stringify(item));
      this.$bvModal.show('modal-edit-task')
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
table {
  margin-top: 20px;
}
</style>
