<template>
  <div>
    <div><h1>Vue3 Host App</h1></div>
    <div>
      <HelloHostVue />
    </div>
    <div>
      <HelloRemoteVue msg="Vue Remote component" />
    </div>
    <div ref="refRenderToReactApp"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, shallowRef } from 'vue';
import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloHostVue from '../components/HelloHostVue.vue';

// Vue 리모트 가져오기
const HelloRemoteVue = defineAsyncComponent({
  // @ts-ignore
  loader: () => import('remote-vue3/HelloRemoteVue'),
  errorComponent: () => import('@/components/ErrorComponent.vue'),
  delay: 0,
  timeout: 3000,
});

// React 가져오고 만들기
const refRenderToReactApp = shallowRef<HTMLElement>();
onMounted(async () => {
  // @ts-ignore
  const HelloRemoteReact = await import('remote-react/HelloRemoteReact').catch(
    (err) => ({
      default: () => React.createElement('div', { children: err?.message }),
    })
  );
  createRoot(refRenderToReactApp.value!).render(
    React.createElement(HelloRemoteReact.default, {
      msg: 'React remote component',
    })
  );
  // createRoot(refRenderToReactApp.value!).render(
  //   HelloRemoteReact.default({ msg: 'React remote!!' }) // react hooks 실행 오류
  // );
});
</script>

<style lang="scss" scoped></style>
