<template>
  <div>
    <table>
      <tr>
        <th>Monday</th>
        <th>Tuesday</th> 
        <th>Wednesday</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li>7:00 PM Hapkido (Beg/Int/Adv)</li>
            <li>8:00 PM Jiu-Jitsu (BJJ Rolling)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>7:00 PM Hapkido (Beg/Int/Adv)</li>
            <li>8:00 PM Jiu-Jitsu (BJJ Rolling)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>7:00 PM Hapkido (Beg/Int/Adv)</li>
            <li>8:00 PM Jiu-Jitsu (BJJ Rolling)</li>
          </ul>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li>7:00 PM Hapkido (Beg/Int/Adv)</li>
            <li>8:00 PM Jiu-Jitsu (BJJ Rolling)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>7:00 PM Hapkido (Beg/Int/Adv)</li>
            <li>8:00 PM Jiu-Jitsu (BJJ Rolling)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>7:00 PM Hapkido (Beg/Int/Adv)</li>
            <li>8:00 PM Jiu-Jitsu (BJJ Rolling)</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
  export default {
    name: 'schedule',
    data() {
      return {
        classes: {}
      }
    }
  }
</script>


<style scoped>
  table {
    width: 100%;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }
</style>
