<template>
  <BorderLayout title-name="数据质量治理">
    <template #context>
      <div class="px-[20px] left-box1">
        <div class="flex justify-between mb-[5px]">
          <div>
            <div><span class="text-[#1AF1E9]">核心成员：</span>李佳蔚 徐杰</div>
          </div>
          <div class="text-[#1AF1E9]">当前排名：第<span class="text-[#FF9834]">5</span>名</div>
        </div>

        <div class="flex justify-between">
          <div class="left-text-box">
            <div>
              <img src="@/assets/image/left1/zdwa-icon.png" alt="">
              数据中台账号权限运维
              <div class="px-[20px] text-[#1AF1E9] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/xxxl-icon.png" alt="">
              审核/授权数据表
              <div class="px-[20px] text-[#1AF1E9] text-[20px]">7/8</div>
            </div>

            <div>
              <img src="@/assets/image/left1/jcaq-icon.png" alt="">
              数据表审核/授权超期
              <div class="px-[20px]"><span class="text-[#1AF1E9] text-[20px]">0</span>起</div>
            </div>
            <div>
              <img src="@/assets/image/left1/xxaq-icon.png" alt="">
              数据质量问题治理率
              <div class="px-[20px]"><span class="text-[#1AF1E9] text-[20px]">100</span>%</div>
            </div>

          </div>


          <div class="echarts-box flex-1 mx-[5px] flex flex-col items-center justify-center">
            <div ref="wclEchartsRef" class="w-[150px] h-[150px] mb-[10px]"></div>
            <div class="text-center">年度指标完成率</div>
          </div>

          <div class="right-text-box">
            <div>
              <img src="@/assets/image/left1/wlaq-icon.png" alt="">
              治理工单发起/流转
              <div class="px-[20px] text-[#1AF1E9] text-[20px]">7/8</div>
            </div>
            <div>
              <img src="@/assets/image/left1/dxjy-icon.png" alt="">
              数据质量监测通报
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


let value = 55;
const pieValue = (value / 100) * 270;
const wclEchartsOption = ref({
  title: {
    show: false,
  },
  angleAxis: {
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    min: 0,
    max: 135,
    startAngle: 225,
  },
  radiusAxis: {
    type: "category",
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    z: 10,
  },
  polar: {
    radius: "100%",
  },
  series: [
    // 最外层圆圈
    {
      type: "pie",
      z: 2,
      radius: ["98%", "100%"], // 关键修改：设置为圆环而非实心圆
      center: ["50%", "50%"],
      startAngle: 225,
      label: { show: false },
      labelLine: { show: false },
      tooltip: { show: false },
      silent: true,
      itemStyle: { borderWidth: 0 },
      data: [
        {
          value: 270,
          itemStyle: {
            color: "#FFF100",
          },
        },
        {
          value: 90,
          itemStyle: { color: "transparent" },
        },
      ],
    },
    // 刻度
    {
      name: "刻度",
      type: "gauge",
      startAngle: 225,
      endAngle: -45,
      radius: "110%",
      min: 0,
      max: 100,
      splitNumber: 10, //刻度数量
      axisLine: {
        show: false,
      },
      title: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        distance: "0",
        color: "#fff",
        fontSize: 12,
      },
      pointer: {
        show: false,
        shadowColor: "auto",
        shadowBlur: 10,
        length: "50",
        width: 2,
      },
      itemStyle: {
        color: "#FFF",
        borderColor: "#FFF",
        borderWidth: 1,
      },
      anchor: {
        show: true,
        showAbove: true,
        size: 10,
        itemStyle: {
          borderWidth: 2,
          color: "#010F6A",
          borderColor: "#FFF100",
        },
      },
      data: [{
        value: value,
      }],
      detail: {
        valueAnimation: true,
        fontSize: 24,
        color: "#FFF",
        offsetCenter: [0, "80%"],
        // 关键：添加formatter格式化显示，拼接百分号
        formatter: "{value}%",
      },
    },
    // 新增饼图覆盖层
    {
      type: "pie",
      z: 2,
      radius: ["0%", "90%"],
      center: ["50%", "50%"],
      startAngle: 225, // 与仪表盘起始角度一致
      label: { show: false },
      labelLine: { show: false },
      tooltip: { show: false },
      silent: true,
      itemStyle: { borderWidth: 0 },
      data: [
        {
          value: pieValue,
          itemStyle: {
            color: {
              x: 0, y: 0, x2: 1, y2: 0,
              colorStops: [
                { offset: 0, color: "rgba(205, 137, 46, 0.9)" },
                { offset: 1, color: "rgba(255, 241, 0, 0.7)" },
              ],
            },
          },
        },
        // 仪表盘内未完成部分
        {
          value: 270 - pieValue,
          itemStyle: { color: "transparent" },
        },
        // 仪表盘范围外的部分（固定90度透明区域）
        {
          value: 90,
          itemStyle: { color: "transparent" },
        },
      ],
    },
  ],
  tooltip: {
    show: false,
  },
});
const wclEchartsRef = ref();
let wclChart = null;


const initChart = () => {
  if (!wclEchartsRef.value) return;
  wclChart = echarts.init(wclEchartsRef.value);
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