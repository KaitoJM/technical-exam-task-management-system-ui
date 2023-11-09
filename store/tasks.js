export default {
  state: () => ({
    base_url: '/tasks',
    data: {},
    fetching: false,
    filters: {
      search: '',
      status: 'all'
    }
  }),
  getters: {
    data: state => {
        return state.data
    },
    fetching: state => {
      return state.fetching
    },
    filters: state => {
      return state.filters
    }
  },
  mutations: {
    addData(state, data) {
      state.data.unshift(data);
    },
    editData(state, updated_data) {
      let current_data = state.data

      const indx = current_data.indexOf(current_data.find(item => {
        return item.id == updated_data.id
      }))

      current_data[indx] = updated_data;
      state.data = [];
      state.data = current_data;
    },
    deleteData(state, id) {
      let current_data = state.data

      const indx = current_data.indexOf(current_data.find(item => {
        return item.id == id
      }))

      state.data.splice(indx, 1);
    },
    setData(state, entities) {
      state.data = entities
    },
    startLoading(state) {
      state.fetching = true
    },
    stopLoading(state) {
      state.fetching = false
    },
    setFilterStatus(state, status) {
      state.filters.status = status;
    },
    setFilterSearch(state, search) {
      state.filters.search = search;
    }
  },
  actions: {
    fetchData(context) {
      context.commit('startLoading')

      let url = `${context.state.base_url}`
      console.log(context.state.filters)
      return this.$axios
        .post('filter-tasks', context.state.filters)
        .then(response => {
          let data = response.data;

          context.commit('setData', data)
          context.commit('stopLoading')

          return data
        })
    },
    addData(context, payload) {
      context.commit('startLoading')

      return this.$axios
        .post(context.state.base_url, payload)
        .then(response => {
          let data = response.data;

          context.commit('addData', data)
          context.commit('stopLoading')

          return response
        })
    },
    editData(context, payload) {
      context.commit('startLoading')

      return this.$axios
        .put(context.state.base_url + '/' + payload.id, payload)
        .then(response => {
          let data = response.data;

          context.commit('editData', data)
          context.commit('stopLoading')

          return response
        })
    },
    deleteData(context, id) {
      context.commit('startLoading')

      return this.$axios
        .delete(context.state.base_url + '/' + id)
        .then(response => {
          let data = response.data;

          context.commit('deleteData', id)
          context.commit('stopLoading')

          return response
        })
    }
  },
}