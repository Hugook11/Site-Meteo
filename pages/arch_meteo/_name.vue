<template>
  <div>
    <SliderMeteo
      :meteo="meteo"
    />

    <Meteo
      :meteo="meteo"
    />
  </div>
</template>

<script>
import SliderMeteo from '~/components/SliderMeteo.vue';
import Meteo from '~/components/Meteo.vue';

export default {
  name: 'pageMeteo',
  layout: 'default',

  components: {
    SliderMeteo,
    Meteo,
  },

  async asyncData({ $axios, params }) {
    const meteo = await $axios.$get(
      `https://www.prevision-meteo.ch/services/json/${params.name}`,
    );
    return {
      meteo,
    };
  },

};
</script>
