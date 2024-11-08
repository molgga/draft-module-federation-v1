<template>
  <div>
    <div>
      <RouterLink class="navi-btn" to="/">Home</RouterLink>
      <RouterLink class="navi-btn" to="/page-with-vue">
        page-with-vue
      </RouterLink>
    </div>
    <div>
      <h1>Vue Host App</h1>
    </div>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.navi-btn {
  margin: 2px 5px;
  padding: 2px 10px;
}
</style>
