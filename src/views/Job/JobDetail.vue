<template>
  <div class="detail">
    <h1>Job detail page</h1>
    <h2>La reference du job est {{ id }}</h2>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
      excepturi nisi aperiam iusto sapiente dignissimos possimus, molestiae
      nesciunt distinctio debitis.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
}
</script>

<style></style>
