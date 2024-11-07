<script setup lang="ts">
defineProps<{ msg?: string }>();
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h3>vue3 컴포넌트</h3>
  </div>
</template>

<script lang="ts" setup></script>

<!-- <style scoped src="./hello-some1.css"></style> -->
<!-- <style >
@import './hello-some1.css';
</style> -->

<!-- <style> -->
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: rgb(0, 158, 111);
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  padding: 10px;
  border: 1px dashed #333;
}
.greetings h1,
.greetings h3 {
  text-align: center;
  text-decoration: none;
}

.anchor {
  color: rgb(0, 190, 102);
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
