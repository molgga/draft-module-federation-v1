<template>
  <div>
    <PageRemoteVue />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

// Vue 리모트 가져오기
const PageRemoteVue = defineAsyncComponent({
  // @ts-ignore
  loader: () => import('remote-vue3/PageRemoteVue'),
  errorComponent: () => import('@/components/ErrorComponent.vue'),
  delay: 0,
  timeout: 3000,
});
</script>

<style lang="scss" scoped></style>
