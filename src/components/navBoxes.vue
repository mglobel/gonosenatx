<template>
  <nav>
    <ul>
      <li>
          <router-link to='/martial-arts' class='nav-box'>
            Martial Arts Classes
          </router-link>
      </li>
      <li>
        <router-link to='/self-defense' class='nav-box'>
          Self-Defense Education
        </router-link>
      </li>
      <li>
        <router-link to='/fitness' class='nav-box'>
          Fitness and Health
        </router-link>
      </li>
      <li>
        <router-link to='/youth' class='nav-box'>
          Youth Programs
        </router-link>
      </li>
      </li>
    </ul>
  </nav>
</template>


<script>
  export default {
    name: 'navBoxes',
    data() {
      return {
        currentPath: window.location.pathname
      }
    }
  }

</script>


<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  a {
    color: white;
  }

  .nav-box {
    height: 300px;
    width: 300px;
    margin: 20px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
