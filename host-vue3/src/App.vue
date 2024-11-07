<template>
  <div>
    <div><h1>Vue3 App</h1></div>
    <div>
      <HelloHostVue msg="Host 컴포넌트" />
    </div>
    <div>
      <HelloRemoteVue msg="Vue Remote 컴포넌트" />
    </div>
    <div>
      <HelloRemoteReact msg="React Remote 컴포넌트" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import HelloHostVue from './components/HelloHostVue.vue';

const HelloRemoteVue = defineAsyncComponent(
  // @ts-ignore
  () => import('remote-vue3/HelloRemoteVue')
);

const HelloRemoteReact = defineAsyncComponent(
  // @ts-ignore
  () => import('remote-react/HelloRemoteReact')
);
</script>

<style lang="scss" scoped></style>
