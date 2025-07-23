<template>
  <BorderLayout title-name="数据分析服务">
    <template #context>
      <div class="px-[20px] left-box1">
        <div class="flex justify-between mb-[5px]">
          <div>
            <div><span class="text-[#1AF1E9]">核心成员：</span>李佳蔚 金高铭</div>
          </div>
          <div class="text-[#1AF1E9]">当前排名：第<span class="text-[#FF9834]">6</span>名</div>
        </div>

        <div class="flex justify-between ">
          <div class="left-text-box ">
            <div>
              <img src="@/assets/image/left1/zdwa-icon.png" alt="">
              内部数据应用自主开发
              <div class="px-[20px] text-[#1AF1E9] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/xxxl-icon.png" alt="">
              数据分艺方周营陆人次
              <div class="px-[20px] text-[#1AF1E9] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/jcaq-icon.png" alt="">
              基础安全问题发生情况
              <div class="px-[20px]"><span class="text-[#1AF1E9] text-[20px]">0</span>起</div>
            </div>
            <div>
              <img src="@/assets/image/left1/xxaq-icon.png" alt="">
              采集感知装置运营通报
              <div class="px-[20px]"><span class="text-[#1AF1E9] text-[20px]">0</span>起</div>
            </div>
          </div>


          <div class="echarts-box flex-1 mx-[5px] flex flex-col items-center justify-center">
            <div ref="wclEchartsRef" class="w-[140px] h-[140px] mb-[10px]"></div>
            <div class="text-center">年度指标完成率</div>
          </div>

          <div class="right-text-box">
            <div>
              <img src="@/assets/image/left1/wlaq-icon.png" alt="">
              对外数据分析应用开发
              <div class="px-[20px] text-[#1AF1E9] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/dxjy-icon.png" alt="">
              典型经验/专利/表彰
              <div class="px-[20px] text-[#F8A70F] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/nlfg-icon.png" alt="">
              能力覆盖率
              <div class="px-[20px] text-[#F8A70F] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/cxcx-icon.png" alt="">
              创新创效
              <div class="px-[20px]"><span class="text-[#1AF1E9] text-[20px]">0</span>分</div>
            </div>
          </div>
        </div>

      </div>
    </template>
  </BorderLayout>
</template>

<script setup>
import BorderLayout from "@/components/BorderLayout/index.vue";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import "echarts-liquidfill"


const wclEchartsOption = ref({
  series: [{
    type: "liquidFill",
    radius: "100%",
    center: ["50%", "50%"],
    amplitude: 10,
    backgroundStyle: {
      color: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: "#011076",
          },
          {
            offset: 0.8,
            color: "#03187C",
          },
          {
            offset: 1,
            color: "rgb(34, 131, 234,0.8)",
          },
        ],
        globalCoord: false,
      },
    },
    color: [

      {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 1,
            color: "#08288E",
          },
          {
            offset: 0,
            color: "#08288E",
          },
        ],
        globalCoord: false,
      },
      {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 1,
            color: "#2794FB",
          },
          {
            offset: 0,
            color: "#1046AE",
          },
        ],
        globalCoord: false,
      },
    ],
    data: [0.32, 0.32],
    label: {
      color: "white",        // 文字颜色
      fontSize: 24,          // 文字大小
      position: ["50%","70%"],    // 文字位置：'inside', 'top', 'bottom', 'left', 'right'
      insideColor: "#fff",   // 内部文字颜色（可选）
      formatter: function (params) {
        return (params.value * 100).toFixed(0) + '%'; // 自定义文字格式
      }
    },
    outline: {
      show: true,
      itemStyle: {
        borderWidth: 0,
      },
      borderDistance: 0,
    },
  },
  ],
});
const wclEchartsRef = ref();
let wclChart = null;


const initChart = () => {
  if (!wclEchartsRef.value) return;
  wclChart = echarts.init(wclEchartsRef.value);

  // 使用配置项显示图表
  wclChart.setOption(wclEchartsOption.value);
};

onMounted(() => {
  initChart();
});
</script>

<style scoped lang="scss">
.left-box1 {
  .left-text-box {
    > div {
      margin-bottom: 2px;
      letter-spacing: 2px;
      color: #F3FFFF;
      font-size: 13px;
    }
  }

  .right-text-box {
    > div {
      letter-spacing: 2px;
      margin-bottom: 2px;
      color: #F3FFFF;
      font-size: 13px;
    }
  }
}
</style>