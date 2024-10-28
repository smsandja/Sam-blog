<template>
  <div class="detail" v-if="job">
    <h1>Job detail page</h1>
    <h2>{{ job.title }}</h2>
    <h3>La reference du job est {{ id }}</h3>
    <p>{{ job.detail }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null,
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json())
      .then(data => (this.job = data))
      .catch(err => console.log(err.message))
  },
}
</script>

<style scoped>
.detail {
  margin: 10px auto;
}
.detail h2 {
  padding: 10px;
}
</style>
