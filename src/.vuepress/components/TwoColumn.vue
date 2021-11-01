<template>
  <div class="two-columns">
    <div><slot></slot></div>
    <div><slot name="right"></slot></div>
  </div>
</template>

<style scoped>
.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>