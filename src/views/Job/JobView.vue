<template>
  <div class="contact">
    <h1>This is Job's Page</h1>
    <div v-if="jobs.length">
      <div class="job" v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
          <div class="detail">
            <h2>{{ job.title }}</h2>
            <p>{{ job.detail }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h2>Jobs loading ...</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then(res => res.json())
      .then(data => (this.jobs = data))
      .catch(err => console.log(err.message))
  },
}
</script>

<style scoped>
.detail {
  width: 900px;
  margin: 10px auto;
  background: #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
}
.job a {
  text-decoration: none;
}
.detail:hover {
  background: rgb(79, 79, 255);
  color: white;
}
</style>
