<template>
  <div class="title-box">
    <!--    logo-->
    <img class="logo-box" src="@/assets/image/title/logo.png" alt="" />

    <!--    bg-->
    <img class="bg-box" src="@/assets/image/title/title-bg.png" alt="">
    <div class="title-text text-center">
      <div class="pt-[4px]">数字化标杆班组全景看板</div>
      <div class="py">SHU ZI HUA BIAO GAN BAN ZU QUAN JING KAN BAN</div>
    </div>

    <!--    两侧-->
    <div class="left-box">
      <span class="pr-[18px]">国网常州供电公司</span>
      <span>信息通信分公司运检三班</span>
    </div>
    <div class="right-box flex items-center">
      <div><img src="@/assets/image/title/zhoubao.png" alt="" />工作周报</div>
      <div class="mx-[20px]"><img src="@/assets/image/title/houtai.png" alt="" />后台管理</div>
      <div>2025-07-0114:00:00 星期二</div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.title-box {
  position: relative;
  height: 80px;

  .title-text {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 38px;
    font-weight: bold;
    letter-spacing: 3px;
    background: linear-gradient(to bottom, #F3F4F5, #C2EFFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;


    div.py {
      font-size: 8px;
    }
  }

  .left-box {
    position: absolute;
    left: 9%;
    top: 54%;
    padding: 5px 20px;
    font-size: 18px;
    background-image: url("@/assets/image/title/text-bg-left.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  .right-box {
    position: absolute;
    right: 4%;
    top: 54%;
    padding: 5px 20px;
    font-size: 18px;
    background-image: url("@/assets/image/title/text-bg-right.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;


    img {
      margin: 0 4px;
    }
  }

  .logo-box {
    position: absolute;
    left: 2%;
    top: 40%;
  }

  .bg-box {
    height: 100%;
    position: absolute;
    left: 4.2%;
  }
}
</style>