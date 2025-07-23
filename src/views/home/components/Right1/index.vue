<template>
  <BorderLayout title-name="系统深化应用">
    <template #context>
      <div class="px-[20px] left-box1">
        <div class="flex justify-between mb-[5px]">
          <div>
            <div><span class="text-[#1AF1E9]">核心成员：</span>金高铭 杨凯</div>
          </div>
          <div class="text-[#1AF1E9]">当前排名：第<span class="text-[#FF9834]">4</span>名</div>
        </div>

        <div class="flex justify-between ">
          <div class="left-text-box ">
            <div>
              <img src="@/assets/image/left1/zdwa-icon.png" alt="">
              支撑省侧平台工具培训
              <div class="px-[20px] text-[#1AF1E9] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/xxxl-icon.png" alt="">
              业务系统应用同通报
              <div class="px-[20px] text-[#1AF1E9] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/jcaq-icon.png" alt="">
              数字化项目不合规情
              <div class="px-[20px]"><span class="text-[#1AF1E9] text-[20px]">0</span>个</div>
            </div>
            <div>
              <img src="@/assets/image/left1/xxaq-icon.png" alt="">
              使用频次过低白建系统
              <div class="px-[20px]"><span class="text-[#1AF1E9] text-[20px]">0</span>个</div>
            </div>
          </div>


          <div class="echarts-box flex-1 mx-[5px] flex flex-col items-center justify-center">
            <div ref="wclEchartsRef" class="w-[140px] h-[140px] mb-[10px]"></div>
            <div class="text-center text-[#1AF1E9]">年度指标完成率</div>
          </div>

          <div class="right-text-box">
            <div>
              <img src="@/assets/image/left1/wlaq-icon.png" alt="">
              人工智能创新应用
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

const wclEchartsOption = ref({
  title: {
    text: "{val|" + 60 + "%" + "}",
    top: "center",
    left: "center",
    textStyle: {
      rich: {
        val: {
          fontSize: 28,
          fontWeight: "bold",
          color: "#fff",
        },
      },
    },
  },
  series: [
    // 中心阴影圆
    {
      name: "中心效果圆",
      type: "gauge",
      radius: "90%",
      startAngle: 0,
      endAngle: 360,
      axisLine: {
        lineStyle: {
          color: [[1, "#0AFFE9"]],
          width: 1,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      detail: {
        show: false,
      },
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        width: 80,
        itemStyle: {
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "#021B5B",
              },
              {
                offset: 0.8,
                color: "#021B5B",
              },
              {
                offset: 1,
                color: "#0A7B9B",
              },
            ],
          },
        },
      },
      data: [
        {
          value: 100,
        },
      ],
      z: 0,
    },
    // 原有的进度条饼图
    {
      type: "pie",
      radius: ["68%", "88%"],
      silent: true,
      clockwise: true,
      startAngle: 90,
      endAngle: -360,
      z: 1, // 调整层级高于背景
      label: {
        position: "center",
      },
      animation: false,
      data: [
        {
          value: 60,
          name: "",
          itemStyle: {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#A4FFFC",
                },
                {
                  offset: 1,
                  color: "#5BFFF9",
                },
              ],
            },
          },
        },
        {
          value: 100 - 60,
          name: "",
          label: {
            show: false,
          },
          itemStyle: {
            color: "transparent",
          },
        },
      ],
    },
    // 环形图上的刻度线
    {
      name: "",
      type: "gauge",
      radius: "100%",
      center: ["50%", "50%"],
      startAngle: 90,
      endAngle: -360,
      splitNumber: 12,
      emphasis: {
        scale: true,  // 替代 hoverAnimation，实现悬停缩放效果
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        length: 60,
        distance: -30,
        lineStyle: {
          width: 4,
          color: "#021B5B",
        },
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          opacity: 0,
        },
      },
      detail: {
        show: false,
      },
      animation: false,
      data: [
        {
          value: 0,
          name: "",
        },
      ],
      z: 2,
    },
    // 外层装饰圆环
    {
      type: "pie",
      radius: ["98%", "100%"],
      emphasis: {
        scale: false,
        labelLine: {
          show: false,
          length: 30,
          length2: 55,

        },
      },
      name: "",
      data: [
        {
          name: "",
          value: 0,
          itemStyle: {
            color: "#0A7B9C",
          },
        },
      ],
      z: 3, // 调整层级
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