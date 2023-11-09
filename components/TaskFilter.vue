<template>
  <div>
    <b-input-group class="mt-3">
      <b-form-input
        size="lg"
        placeholder="Find task"
        v-model="search_key"
      >
      </b-form-input>
      <b-input-group-append>
        <b-button variant="primary" @click="filterSearch">
          <font-awesome-icon :icon="['fa', 'search']"/>
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <br />
    <h6 class="text-muted"><font-awesome-icon :icon="['fa', 'filter']"/> Filter Tasks</h6>
    <div class="filter-container">
      <div class="filter-item">
        <b-button block variant="primary" @click="filterStatus('all')">
          <font-awesome-icon :icon="['fa', 'asterisk']"/>
          All
        </b-button>
      </div>
      <div class="filter-item">
        <b-button block variant="warning" @click="filterStatus('open')">
          <font-awesome-icon :icon="['fa', 'circle-exclamation']"/>
          Open
        </b-button>
      </div>
      <div class="filter-item">
        <b-button block variant="info" @click="filterStatus('in progress')">
          <font-awesome-icon :icon="['fa', 'ellipsis']"/>
          In Progress
        </b-button>
      </div>
      <div class="filter-item">
        <b-button block variant="success" @click="filterStatus('completed')">
          <font-awesome-icon :icon="['fa', 'check-double']"/>
          Completed
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      search_key: ''
    }
  },
  computed: {
    ...mapGetters({
      filters: 'tasks/filters',
    }),
  },
  methods: {
    ...mapMutations({
      setFilterStatus: 'tasks/setFilterStatus',
      setFilterSearch: 'tasks/setFilterSearch'
    }),
    ...mapActions({
      search: 'tasks/fetchData'
    }),
    filterStatus(status) {
      this.setFilterStatus(status)
      this.search();
    },
    filterSearch() {
      this.setFilterSearch(this.search_key)
      this.search();
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #adc7ef;
  border-radius: 15px;
  
  .filter-item {
    width: calc(50% - 10px);
  }
}
</style>