<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <div>
      <div><button @click="onIncrease">count</button></div>
      <div>count: {{ state.count }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

defineProps({
  msg: {
    type: String,
    default: 'Vue Remote Component',
  },
});

const state = reactive({
  count: 0,
});

const onIncrease = () => {
  state.count++;
};
</script>

<style lang="scss" scoped>
.greetings {
  padding: 10px;
  border: 1px dashed #333;
}
h1 {
  color: rgb(217, 111, 11);
  font-size: 1.4rem;
}
</style>
