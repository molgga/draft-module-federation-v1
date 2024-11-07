<template>
  <div>
    <div><h1>Vue3 App</h1></div>
    <div>
      <HelloSome1 msg="Host 컴포넌트" />
    </div>
    <div>
      <Suspense>
        <HelloSome1Remote msg="Remote 컴포넌트" />
        <template #fallback>
          <div>로딩중...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, defineAsyncComponent, ref, onMounted } from 'vue';
import HelloSome1 from './components/HelloSome1.vue';

const HelloSome1Remote = defineAsyncComponent(
  // @ts-ignore
  () => import('remote-vue3/HelloSome1')
);
</script>

<style lang="scss" scoped></style>
