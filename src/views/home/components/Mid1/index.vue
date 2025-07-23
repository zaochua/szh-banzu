<template>
  <div class="grid grid-cols-2 gap-x-[20px]">
    <BorderLayout2 title-name="班组员工排行榜">
      <template #context>
        <div class="m-[10px] content-bg mt-0 grid grid-cols-3 gap-x-[20px] px-[10px] left-box">
          <div class="left flex flex-col items-center photo-bg">
            <div class="touxiang-box"></div>
            <img src="@/assets/image/mid1/no2.png" alt="">
            <div class="text-center pt-[18px]">
              <div class="text-[12px]">NO.2</div>
              <div class="text-[14px]">员工姓名</div>
            </div>
          </div>
          <div class="center flex flex-col items-center photo-bg">
            <div class="touxiang-box"></div>
            <img src="@/assets/image/mid1/no1.png" alt="">
            <div class="text-center pt-[18px]">
              <div class="text-[12px]">NO.1</div>
              <div class="text-[14px]">员工姓名</div>
            </div>
          </div>
          <div class="right flex flex-col  items-center photo-bg">
            <div class="touxiang-box"></div>
            <img src="@/assets/image/mid1/no3.png" alt="">
            <div class="text-center pt-[18px]">
              <div class="text-[12px]">NO.3</div>
              <div class="text-[14px]">员工姓名</div>
            </div>
          </div>
        </div>
      </template>
    </BorderLayout2>

    <BorderLayout2 title-name="数字化重点项目">
      <template #context>
        <div class="m-[10px] content-bg mt-0 right-box">
          <table>
            <thead>
            <tr>
              <th>序号</th>
              <th>年度</th>
              <th>项目</th>
              <th>简介</th>
              <th>负责人</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in tableData" :key="item.id">
              <td>
                <div :class="['xuhao','xuhao'+(index+1)]">0{{ index + 1 }}</div>
              </td>
              <td>{{ item.year }}</td>
              <td>{{ item.project }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.leader }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </template>
    </BorderLayout2>
  </div>
</template>

<script setup>
import BorderLayout2 from "@/components/BorderLayout2/index.vue";

import { ref, onMounted } from "vue";

const tableData = ref([
  { id: 1, year: "2025", project: "智慧城市建设", description: "xxx", leader: "张三" },
  { id: 2, year: "2025", project: "AI客服机器人", description: "xxx", leader: "李四" },
  { id: 3, year: "2025", project: "大数据平台", description: "xxx", leader: "王五" },
]);

</script>

<style scoped lang="scss">
.left-box {
    height: 150px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(to bottom, rgba(0, 158, 255, 0.2), rgba(16, 61, 112, 0.9));


  .center, .left, .right {
    position: relative;

    img {
      position: absolute;
      width: 38px;
      height: 25px;
      left: 50%;
      transform: translateX(-50%);
      bottom: 36%;
      z-index: 3;
    }
  }

  .left, .right {
    top: 15px;
  }

  .touxiang-box {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: #00E3FF;
    position: relative;
    top: 4px;
    left: 0;
  }

  .photo-bg {
    width: 82px;
    height: 122px;
    background-image: url("@/assets/image/mid1/photo-bg.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
}


.right-box {
    height: 150px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(to bottom, rgba(0, 158, 255, 0.2), rgba(16, 61, 112, 0.9));

  table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;

    thead {
      background: linear-gradient(to top, #009EFF, #113E72);

      tr {
        height: 30px;
        font-size: 16px;

        th {
          font-weight: normal;
        }
      }
    }

    tbody {
      tr {
        font-size: 14px;
        line-height: 30px;
      }

      .xuhao {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        margin: 4px;
      }

      .xuhao1 {
        background-image: url("@/assets/image/mid1/xuhao1.png");
      }

      .xuhao2 {
        background-image: url("@/assets/image/mid1/xuhao2.png");
      }

      .xuhao3 {
        background-image: url("@/assets/image/mid1/xuhao3.png");
      }
    }
  }

}
</style>