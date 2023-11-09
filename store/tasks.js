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
    }
  },
}