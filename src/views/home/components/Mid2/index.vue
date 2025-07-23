<template>
  <div class="mid2-box my-[10px]">
    <div class="value-box">98%</div>


    <div class="text-bg text-bg1 w-[150px] h-[40px]"><span>标杆排行</span></div>
    <div class="text-bg text-bg2 w-[150px] h-[40px]"><span>人才培养</span></div>
    <div class="text-bg text-bg3 w-[150px] h-[40px]"><span>班组园地</span></div>

    <div class="text-bg text-bg4 w-[150px] h-[40px]"><span>人员动向</span></div>
    <div class="text-bg text-bg5 w-[150px] h-[40px]"><span>数智赋能</span></div>
  </div>
</template>

<script setup>


</script>


<style scoped lang="scss">

.mid2-box {
  position: relative;
  height: 510px;
  background-image: url("@/assets/image/mid2/mid2-bg.png");

  .value-box {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 80px;
    font-weight: bold;
    background: linear-gradient(to bottom, #F3F4F5, #7FFFFA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.text-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  text-align: center;
  line-height: 40px;

  span {
    font-size: 20px;
    font-weight: bold;
    background: linear-gradient(to bottom, #F3F4F5, #C4F0FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.text-bg1 {
  background-image: url("@/assets/image/mid2/text-bg-1.png");
  position: absolute;
  left: 4%;
  top: 40%;
}

.text-bg2 {
  background-image: url("@/assets/image/mid2/text-bg-1.png");
  position: absolute;
  left: 10%;
  top: 55%;
}

.text-bg3 {
  background-image: url("@/assets/image/mid2/text-bg-3.png");
  position: absolute;
  left: 50%;
  top: 62%;
  transform: translateX(-50%);
}

.text-bg4 {
  background-image: url("@/assets/image/mid2/text-bg-5.png");
  position: absolute;
  right: 10%;
  top: 55%;
}

.text-bg5 {
  background-image: url("@/assets/image/mid2/text-bg-5.png");
  position: absolute;
  right: 4%;
  top: 40%;
}
</style>