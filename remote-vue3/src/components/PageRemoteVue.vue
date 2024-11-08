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
    <div>
      <JdColrowProvider class="my-table">
        <div
          v-for="(item, index) in state.testList"
          :key="index"
          class="my-item"
        >
          <JdColrowRow
            v-for="(value, key) in item"
            :key="key"
            :groupKey="key"
            class="my-row"
          >
            <template v-slot="{ state }">
              <div class="test-state">상태 반응 테스트: {{ state }}</div>
              <div class="test-value">{{ value }}</div>
            </template>
          </JdColrowRow>
        </div>
      </JdColrowProvider>
    </div>
    <JdModalProvider />
  </div>
</template>

<script lang="ts" setup>
import '@jood/v-modal/dist/v-modal.css';
import { onBeforeMount, onUnmounted, reactive } from 'vue';
// import { provideJdModalService, JdModalProvider } from '@/test1';
import { provideJdModalService, JdModalProvider } from '@jood/v-modal';
import { JdColrowProvider, JdColrowRow } from '@jood/v-colrow';
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
  state.count++;
};

const onTestModal = () => {
  console.log('onTestModal');
  modalService.open({
    component: SomeModalComponent,
    overlayClose: true,
  });
};

onBeforeMount(() => {
  console.log('onBeforeMount');
  modalService.setUseBlockBodyScroll(true); // 모달이 열릴때 body scroll 잠금 여부
  modalService.setUseHistoryStrategy(true); // 모달 history.back 연동 여부
  modalService.init();
});

const getTestRandomText = () => {
  const date = new Date();
  const len = Math.round(Math.random() * 10 + 1);
  const text = [];
  for (let i = 0; i < len; i++) {
    text.push(Math.ceil(Math.random() * 99999999).toString());
    text.push(Math.ceil(Math.random() * 99999999).toString());
    text.push(Math.ceil(Math.random() * 99999999).toString());
    text.push(Math.ceil(Math.random() * 99999999).toString());
    text.push(Math.ceil(Math.random() * 99999999).toString());
  }
  return text.join('');
};
const onChangeState = () => {
  state.testList = [];
  for (let i = 0; i < 3; i++) {
    state.testList.push({
      key1: getTestRandomText(),
      key2: getTestRandomText(),
      key3: getTestRandomText(),
    });
  }
};
const testInterval = setInterval(() => {
  onChangeState();
}, 1000);
onUnmounted(() => {
  clearInterval(testInterval);
});
</script>

<style lang="scss" scoped>
.page-view {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}
.my-table {
  display: flex;
  margin: 10px;
  border: 1px solid #ccc;
}
.my-item {
  flex: 1;
  border-left: 1px dashed #ff0000;
  &:first-child {
    border-left-width: 0;
  }
  .my-row {
    word-break: break-all;
    border-top: 1px solid #ff0000;
    transition: height 200ms;
    overflow: hidden;
    &:first-child {
      border-top-width: 0;
    }
  }
  .test-state {
    padding: 10px;
  }
  .test-value {
    padding: 10px;
    color: #999999;
  }
}
</style>
