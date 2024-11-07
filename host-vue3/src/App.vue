<template>
  <div>
    <div><h1>Vue3 Host App</h1></div>
    <div>
      <HelloHostVue msg="Host 컴포넌트" />
    </div>
    <div>
      <!-- <HelloRemoteVueDirect msg="Vue Remote 컴포넌트 (direct)" /> -->
    </div>
    <div>
      <HelloRemoteVueAsync msg="Vue Remote 컴포넌트 (async)" />
    </div>

    <div ref="refRenderToReactApp"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, shallowRef } from 'vue';
import { createRoot } from 'react-dom/client';
import ErrorComponent from './components/ErrorComponent.vue';
import HelloHostVue from './components/HelloHostVue.vue';

// @ts-ignore // 동기로 안가져올 수도 있지만 리모트에 문제가 있어서 못가져오면 호스트 렌더가 멈춰버리니 비동기로
// import HelloRemoteVueDirect from 'remote-vue3/HelloRemoteVue';

// Vue 리모트 가져오기
const HelloRemoteVueAsync = defineAsyncComponent({
  // @ts-ignore
  loader: () => import('remote-vue3/HelloRemoteVue'),
  errorComponent: ErrorComponent,
  delay: 0,
  timeout: 3000,
});

// React 가져오고 만들기
const refRenderToReactApp = shallowRef<HTMLElement>();
onMounted(async () => {
  // @ts-ignore
  const HelloRemoteReact = await import('remote-react/HelloRemoteReact').catch(
    (err) => {
      console.log('리모트 React Error:', err);
      return null;
    }
  );
  if (HelloRemoteReact) {
    createRoot(refRenderToReactApp.value!).render(
      HelloRemoteReact.default({ msg: 'React remote!!' })
    );
  }
});
</script>

<style lang="scss" scoped></style>
