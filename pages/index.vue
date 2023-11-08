<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
        test: process.env.API_URL
    }
  },
  mounted() {
    this.$axios.post('/test');
  }
}
</script>
