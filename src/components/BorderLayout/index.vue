<template>
  <div class="border-bg">
    <img class="gzzb-box" src="@/assets/image/common/gzzb.png" alt="">
    <div class="text-center title-box">{{ titleName || '' }}</div>
    <div class="text-center"><img class="mb-[5px]" src="@/assets/image/common/line.png" alt=""></div>

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
  background-image: url("@/assets/image/common/module-border.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 300px;
  position: relative;
}

.title-box {
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  background: linear-gradient(90deg, #1085D2, #00E3FF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.gzzb-box {
  position: absolute;
  right: 20px;
  top: 12px;
}
</style>