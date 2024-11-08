<template>
  <div class="greetings">
    <h1>Vue Host component</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ msg?: string }>();
</script>

<style scoped>
h1 {
  color: rgb(119, 119, 119);
}
.greetings {
  padding: 10px;
  border: 1px dashed #ccc;
}
</style>
