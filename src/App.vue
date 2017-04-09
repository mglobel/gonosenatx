<template>
  <div id="app">
    <router-link to='/'>
      <img class= 'logo' src="./assets/logo.jpg">
    </router-link>
    <h1>GO NO SEN <br/>ATX</h1>
    <router-view></router-view>
    <navBoxes></navBoxes>
    <div class='container'>
    <iframe src="https://services.cognitoforms.com/f/g8YlBS-KxEi5fIQ2XG_ejQ?id=1" style="position:relative;width:1px;min-width:100%;*width:100%; margin: 0 auto;" frameborder="0" scrolling="yes" seamless="seamless" height="383" width="100%"></iframe>
    </div>

    <div class='footer'>
      Go No Sen ATX <br/>
      info@gonosenatx.com<br/>
      2200 E. 7th St.
      Austin, TX 78702
    </div>
  </div>
</template>

<script>
import navBoxes from '@/components/navBoxes.vue'
export default {
  name: 'app',
  components: {
    navBoxes
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: white;
}

.logo {
  width: 100%;
  max-width: 500px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 25px;
}
</style>
