<template>
  <div>
    
    <SliderMeteo
      :meteo="meteo"
    />
    
    <hr>
    
    <Meteo 
      :meteo="meteo"
    />

  </div>
</template>

<script>
import SliderMeteo from '~/components/SliderMeteo.vue';
import Meteo from '~/components/Meteo.vue';

export default {
  name: "pageMeteo",
  layout: "default",

  components: {
    SliderMeteo,
    Meteo,
  },

  async asyncData({ $axios, query }) {
    const ville = query?.ville ?? 0;
    const meteo = await $axios.$get(
      `https://www.prevision-meteo.ch/services/json/${ville}`
    );
    return {
      meteo,
    };
  },

  /* async fetch() {
      this.meteo = await fetch(
        'https://www.prevision-meteo.ch/services/json/toulouse'
      ).then(res => res.json())
    }, */
  /*   
  data() {
    return {
      meteo: [],
    };
  }, */
};
</script>

