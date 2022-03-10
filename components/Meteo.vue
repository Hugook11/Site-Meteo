<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Jour</th>
        <th scope="col">Icône</th>
        <th scope="col">Condition</th>
        <th scope="col">Tmin</th>
        <th scope="col">Tmax</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ meteo.fcst_day_0.day_long }}</td>
        <td><img :src="meteo.fcst_day_0.icon"/></td>
        <td>{{ meteo.fcst_day_0.condition }}</td>
        <td>{{ meteo.fcst_day_0.tmin }}°C</td>
        <td>{{ meteo.fcst_day_0.tmax }}°C</td>
      </tr>
      <tr>
        <td>{{ meteo.fcst_day_1.day_long }}</td>
        <td><img :src="meteo.fcst_day_1.icon"/></td>
        <td>{{ meteo.fcst_day_1.condition }}</td>
        <td>{{ meteo.fcst_day_1.tmin }}°C</td>
        <td>{{ meteo.fcst_day_1.tmax }}°C</td>
      </tr>
      <tr>
        <td>{{ meteo.fcst_day_2.day_long }}</td>
        <td><img :src="meteo.fcst_day_2.icon"/></td>
        <td>{{ meteo.fcst_day_2.condition }}</td>
        <td>{{ meteo.fcst_day_2.tmin }}°C</td>
        <td>{{ meteo.fcst_day_2.tmax }}°C</td>
      </tr>
      <tr>
        <td>{{ meteo.fcst_day_3.day_long }}</td>
        <td><img :src="meteo.fcst_day_3.icon"/></td>
        <td>{{ meteo.fcst_day_3.condition }}</td>
        <td>{{ meteo.fcst_day_3.tmin }}°C</td>
        <td>{{ meteo.fcst_day_3.tmax }}°C</td>
      </tr>
      <tr>
        <td>{{ meteo.fcst_day_4.day_long }}</td>
        <td><img :src="meteo.fcst_day_4.icon"/></td>
        <td>{{ meteo.fcst_day_4.condition }}</td>
        <td>{{ meteo.fcst_day_4.tmin }}°C</td>
        <td>{{ meteo.fcst_day_4.tmax }}°C</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Meteo',
  props: ['meteo'],
};

</script>
