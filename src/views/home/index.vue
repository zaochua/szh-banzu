<template>
  <div class="bg-box">
    <!--头部-->
    <TitleTop />

    <!--内容部分-->
    <div class="content-box grid grid-cols-[1fr_725px_1fr] gap-x-[20px] py-[20px] px-[30px]">
      <div>
        <Left1 />
        <Left2 class="my-[20px]" />
        <Left3 />
      </div>

      <div class="mid-box">
        <Mid1 />
        <Mid2 />
        <Mid3 />
      </div>

      <div>
        <Right1 />
        <Right2 class="my-[20px]" />
        <Right3 />
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleTop from "@/views/home/components/TitleTop/index.vue";
import Left1 from "@/views/home/components/Left1/index.vue";
import Left2 from "@/views/home/components/Left2/index.vue";
import Left3 from "@/views/home/components/Left3/index.vue";
import Mid1 from "@/views/home/components/Mid1/index.vue";
import Mid2 from "@/views/home/components/Mid2/index.vue";
import Mid3 from "@/views/home/components/Mid3/index.vue";
import Right1 from "@/views/home/components/Right1/index.vue";
import Right2 from "@/views/home/components/Right2/index.vue";
import Right3 from "@/views/home/components/Right3/index.vue";
</script>


<style scoped lang="scss">
.bg-box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("@/assets/image/bg/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
}

.content-box {
  height: calc(100vh - 80px);

  > div {
  }

  .mid-box {
    //border: 1px solid red;
  }
}


</style>