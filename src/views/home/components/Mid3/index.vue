<template>
  <div class="grid grid-cols-2 gap-x-[20px]">
    <BorderLayout2 title-name="创新成果发布">
      <template #context>
        <div class="m-[10px] content-bg mt-0">
          <table>
            <thead>
            <tr>
              <th >类别</th>
              <th>成果名称</th>
              <th>奖项</th>
              <th>参与人</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in tableData" >
              <td>{{ item.category }}</td>
              <td>{{ item.resultName }}</td>
              <td>{{ item.award }}</td>
              <td>{{ item.participants }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </template>
    </BorderLayout2>

    <BorderLayout2 title-name="高质量媒体宣传">
      <template #context>
        <div class="m-[10px] content-bg mt-0 ">
          <table>
            <thead>
            <tr>
              <th>媒体</th>
              <th>名称</th>
              <th>发布时间</th>
              <th>撰写人</th>
              <th>链接</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in tableData2" :key="item.id">
              <td>{{ item.media }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.publishDate }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.link }}</td>
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
  { category: "QC", award: "省公司二等奖", participants: "XXX", resultName: "《****》", publicationDate: "2025-07-03" },
  { category: "QC", award: "省公司二等奖", participants: "XXX", resultName: "《****》", publicationDate: "2025-07-03" },
  { category: "QC", award: "省公司二等奖", participants: "XXX", resultName: "《****》", publicationDate: "2025-07-03" },
]);

const tableData2 = ref([
  { media: "中国电力报", title:"《****》", publishDate: "2025-07-03", author: "xxx", link: "xx" },
  { media: "中国电力报", title:"《****》", publishDate: "2025-07-03", author: "xxx", link: "xx" },
  { media: "中国电力报", title:"《****》", publishDate: "2025-07-03", author: "xxx", link: "xx" },
]);
</script>


<style scoped lang="scss">


.content-bg {
  height: 150px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(to top, rgba(1, 58, 161), rgba(5, 34, 122, 0.9));

}

table {
  text-align: center;
  width: 100%;
  border-collapse: collapse;

  thead {
    background: linear-gradient(to top, #009EFF, #113E72);

    tr {
      height: 30px;
      font-size: 16px;
      text-align: center;

      th {
        font-weight: normal;
      }
    }
  }

  tbody {
    tr {
      font-size: 14px;
      line-height: 40px;
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
</style>