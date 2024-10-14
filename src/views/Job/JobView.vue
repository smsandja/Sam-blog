<template>
  <div class="contact">
    <h1>This is Job's Page</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>
      <p>{{ job.detail }}</p>
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

<style></style>
