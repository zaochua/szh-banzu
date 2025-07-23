<template>
  <div class="border-bg">
    <div class="text-center title-box">{{ titleName || '' }}</div>

    <slot name="context"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  titleName: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.border-bg {
  background-image: url("@/assets/image/mid1/mid-moudle-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 200px;
  position: relative;
}

.title-box {
  height: 34px;
  line-height: 34px;
  font-size: 20px;
  background: linear-gradient(90deg, #1085D2, #00E3FF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


</style>