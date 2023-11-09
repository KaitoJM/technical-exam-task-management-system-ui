export default {
  state: () => ({
    base_url: '/tasks',
    data: {},
    links: {},
    meta: {},
    fetching: false,
  }),
  getters: {
    data: state => {
        return state.data
    },
    links: state => {
      return state.links
    },
    meta: state => {
      return state.meta
    },
    fetching: state => {
      return state.fetching
    },
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
    setLinks(state, links) {
      state.links = links
    },
    setMeta(state, meta) {
      state.meta = meta
    },
    startLoading(state) {
      state.fetching = true
    },
    stopLoading(state) {
      state.fetching = false
    },
    delete(state, entity) {
      state.data.splice(state.data.indexOf(state.data.find(row => row.id == entity.id)), 1)
    },
  },
  actions: {
    fetchData(context, payload) {
      context.commit('startLoading')

      let url = `${context.state.base_url}`

      return this.$axios
        .get(url)
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