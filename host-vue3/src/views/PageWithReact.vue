<template>
  <div>
    <div ref="refRenderToReactApp"></div>
  </div>
</template>

<script lang="ts" setup>
import React from 'react';
import { createRoot } from 'react-dom/client';
import { onMounted, shallowRef } from 'vue';

// React 가져오고 만들기
const refRenderToReactApp = shallowRef<HTMLElement>();
onMounted(async () => {
  // @ts-ignore
  const PageRemoteReact = await import('remote-react/PageRemoteReact').catch(
    (err) => ({
      default: () => React.createElement('div', { children: err?.message }),
    })
  );
  createRoot(refRenderToReactApp.value!).render(
    React.createElement(PageRemoteReact.default)
  );
});
</script>

<style lang="scss" scoped></style>
