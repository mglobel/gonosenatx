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
            <li>5:00 PM Youth Hapkido</li>
            <li>6:00 PM Jiu-Jitsu (BJJ Rolling)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>6:00 PM Hapkido (Beg/Int)</li>
            <li>7:00 PM Hapkido (Adv)</li>
            <li>8:00 PM Jiu-Jitsu (No Gi)</li>
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
            <li>5:00 PM Youth Hapkido</li>
            <li>6:00 PM Jiu-Jitsu (No Gi)</li>
            <li>7:00 PM Hapkido (Beg/Int/Adv)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>12:00 PM Hapkido (Beg/Int/Adv)</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>9:00 AM Boxing</li>
            <li>11:00 AM Hapkido (Sparring)</li>
            <li>12:00 PM Jiu-Jitsu (Open Mat)</li>
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
    text-align: left;
  }
  td {
    vertical-align: top;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }


</style>
