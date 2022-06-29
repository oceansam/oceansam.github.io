<template>
  <q-card>
    <q-card-section>
      {{ project.name }}
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["project"],
  setup() {},
};
</script>
