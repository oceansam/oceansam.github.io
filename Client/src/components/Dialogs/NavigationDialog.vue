<template>
  <q-dialog persistent ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-pa-md">
      <q-card-section class="txt-lg text-center">
        Choose a website to visit
      </q-card-section>
      <q-card-section class="txt-sm text-center">
        If you use an accessibility tool, please navigate to the accessible
        version of the website.
      </q-card-section>
      <q-card-actions class="row justify-between">
        <q-btn
          @click="() => onDialogOK()"
          class="nav-button txt-md"
          color="primary"
          label="Original"
        />
        <q-btn
          @click="() => onDialogOK()"
          class="nav-button txt-md"
          outline
          color="primary"
          label="Accessible"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { useDialogPluginComponent } from "quasar";
export default defineComponent({
  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],
  setup() {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    return {
      onDialogOK,
      dialogRef,
      onDialogCancel,
      onDialogHide,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  &-button {
    width: 40%;
  }
}
</style>
