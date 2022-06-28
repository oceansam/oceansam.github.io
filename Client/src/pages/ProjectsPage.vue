<template>
  <div class="row justify-center items-center container">
    <q-card bordered flat>
      <q-card-section>
        <q-tabs
          v-model="tab"
          narrow-indicator
          dense
          align="justify"
          class="text-primary"
        >
          <q-tab :ripple="false" name="mails" label="Mails" />
          <q-tab :ripple="false" name="alarms" label="Alarms" />
          <q-tab :ripple="false" name="movies" label="Movies" />
        </q-tabs>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const tab = ref("mails");
    return { tab };
  },
};
</script>
