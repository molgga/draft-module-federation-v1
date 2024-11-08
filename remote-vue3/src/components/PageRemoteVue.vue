<template>
  <div class="page-view">
    <div>
      <h1>여기는 Remote Vue page</h1>
    </div>
    <div style="margin: 5px; padding: 5px; border: 1px dashed #ccc">
      <button @click="onTestModal">Open modal</button>
    </div>
    <div style="margin: 5px; padding: 5px; border: 1px dashed #ccc">
      <div><button @click="onIncrease">count</button></div>
      <div>count: {{ state.count }}</div>
      <div>mouse: {{ mouse }}</div>
    </div>
    <div style="margin: 5px; padding: 5px; border: 1px dashed #ccc">
      <HelloRemoteVue />
    </div>

    <JdModalProvider />
  </div>
</template>

<script lang="ts" setup>
import '@jood/v-modal/dist/v-modal.css';
import { onBeforeMount, onUnmounted, reactive } from 'vue';
import { provideJdModalService, JdModalProvider } from '@jood/v-modal';
import SomeModalComponent from './SomeModalComponent.vue';
import HelloRemoteVue from './HelloRemoteVue.vue';
import { useMouse } from '@vueuse/core';

const modalService = provideJdModalService();

const mouse = useMouse();
const state = reactive({
  count: 0,
  testList: [],
});

const onIncrease = () => {
  increase();
};

const increase = () => {
  state.count++;
};

const onTestModal = () => {
  console.log('onTestModal');
  modalService.open({
    component: SomeModalComponent,
    overlayClose: true,
  });
};

let interval: number;

onBeforeMount(() => {
  console.log('onBeforeMount');
  modalService.setUseBlockBodyScroll(true); // 모달이 열릴때 body scroll 잠금 여부
  modalService.setUseHistoryStrategy(true); // 모달 history.back 연동 여부
  modalService.init();

  interval = setInterval(() => {
    increase();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.page-view {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
