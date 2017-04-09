<template>
  <div class="container">
    <h2>Martial Arts -- Self-Defense -- Fitness -- Youth</h2>
    <schedule></schedule>
  </div>
</template>

<script>
  import schedule from '@/components/schedule.vue'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      schedule
    }
  }
</script>

<style scoped>
</style>
