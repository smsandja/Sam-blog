<template>
  <div class="contact">
    <h1>This is Job's Page</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
        <div class="detail">
          <h2>{{ job.title }}</h2>
          <p>{{ job.detail }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: 1, title: 'Dev fullstack', detail: 'lorem' },
        { id: 2, title: 'Architecte', detail: 'lorem' },
        { id: 3, title: 'Psychologue', detail: 'lorem' },
      ],
    }
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
