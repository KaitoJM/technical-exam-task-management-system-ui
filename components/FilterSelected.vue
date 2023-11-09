<template>
  <div class="filter-selected-container">
    <div class="filter-item" v-if="filters.search">
      Searched: <b-badge variant="primary">{{ filters.search  }}</b-badge>
    </div>
    <div class="filter-item" v-if="filters.status">
      Status: <b-badge variant="primary">{{ filters.status  }}</b-badge>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      filters: 'tasks/filters',
    }),
  }
}
</script>

<style lang="scss" scoped>
.filter-selected-container {
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 1.3em;
  width: 100%;

  .filter-item {

  }
}
</style>