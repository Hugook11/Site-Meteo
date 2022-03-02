<template>
  <div>
    <h1 class="display-5">
      Météo {{ meteo.city_info.name }}, {{ meteo.current_condition.date }}
    </h1>
    <div class="slider-container visible">
      <div class="prev arrow" v-on:click="slide"></div>
      <div class="meteo">
        <div class="day">
          <table class="tableaujours">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Icône</th>
                <th>Condition</th>
                <th>Tmin</th>
                <th>Tmax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{{ meteo.fcst_day_0.day_long }}</td>
                <td><img :src="meteo.fcst_day_0.icon" alt="" /></td>
                <td>{{ meteo.fcst_day_0.condition }}</td>
                <td>{{ meteo.fcst_day_0.tmin }}°C</td>
                <td>{{ meteo.fcst_day_0.tmax }}°C</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="day">
          <table class="tableaujours">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Icône</th>
                <th>Condition</th>
                <th>Tmin</th>
                <th>Tmax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{{ meteo.fcst_day_1.day_long }}</td>
                <td><img :src="meteo.fcst_day_1.icon" alt="" /></td>
                <td>{{ meteo.fcst_day_1.condition }}</td>
                <td>{{ meteo.fcst_day_1.tmin }}°C</td>
                <td>{{ meteo.fcst_day_1.tmax }}°C</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="day">
          <table class="tableaujours">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Icône</th>
                <th>Condition</th>
                <th>Tmin</th>
                <th>Tmax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{{ meteo.fcst_day_2.day_long }}</td>
                <td><img :src="meteo.fcst_day_2.icon" alt="" /></td>
                <td>{{ meteo.fcst_day_2.condition }}</td>
                <td>{{ meteo.fcst_day_2.tmin }}°C</td>
                <td>{{ meteo.fcst_day_2.tmax }}°C</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="day">
          <table class="tableaujours">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Icône</th>
                <th>Condition</th>
                <th>Tmin</th>
                <th>Tmax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{{ meteo.fcst_day_3.day_long }}</td>
                <td><img :src="meteo.fcst_day_3.icon" alt="" /></td>
                <td>{{ meteo.fcst_day_3.condition }}</td>
                <td>{{ meteo.fcst_day_3.tmin }}°C</td>
                <td>{{ meteo.fcst_day_3.tmax }}°C</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="day">
          <table class="tableaujours">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Icône</th>
                <th>Condition</th>
                <th>Tmin</th>
                <th>Tmax</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{{ meteo.fcst_day_4.day_long }}</td>
                <td><img :src="meteo.fcst_day_4.icon" alt="" /></td>
                <td>{{ meteo.fcst_day_4.condition }}</td>
                <td>{{ meteo.fcst_day_4.tmin }}°C</td>
                <td>{{ meteo.fcst_day_4.tmax }}°C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="next arrow" v-on:click="slide"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderMeteo",
  props: {
    meteo: {
      type: Object,
    },
  },

  data: function () {
    return {
      indexSlider: 0,
    };
  },

  methods: {
    slide() {
      const Days = document.querySelectorAll(".day");
      if (event.target.classList.contains("next")) {
        if(this.indexSlider != 4) {
          this.indexSlider += 1;
          Days.forEach((day) => {
            day.style.transform = `translateX(-${this.indexSlider * 100}%)`;
          });
        }
      } else if (event.target.classList.contains("prev")) {
        if(this.indexSlider != 0) {
          this.indexSlider -= 1;
          Days.forEach((day) => {
            day.style.transform = `translateX(-${this.indexSlider * 100}%)`;
          });
        }
      }
    },
  
  
  },
};
</script>

<style scoped>
.slider-container {
  position: relative;
  display: none;
  width: 500px;
}

.visible {
  display: block;
}

.arrow {
  position: absolute;
  width: 15px;
  height: 15px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  cursor: pointer;
  z-index: 5;
}

.prev {
  transform: translateY(-50%) rotate(-135deg);
  top: calc(50% - 5px);
  left: 0;
}

.next {
  transform: rotate(45deg);
  top: calc(50% - 5px);
  right: 0;
}

.meteo {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 500px;
  overflow-x: hidden;
  position: relative;
}

.meteo div {
  width: 90%;
  padding: 0 27%;
  flex: 0 0 auto;
  overscroll-behavior-x: contain;
  transition: 0.3s all ease;
}
</style>