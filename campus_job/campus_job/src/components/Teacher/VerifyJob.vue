<template>
<div>
   <el-table :data="tableData" border style="width: 100%">
    <el-table-column fixed prop="workBegin" label="日期" width="150">
    </el-table-column>
    <el-table-column prop="name" label="公司名称" width="120"> </el-table-column>
    <el-table-column prop="name" label="岗位名称" width="120">
    </el-table-column>
    <el-table-column prop="demand" label="岗位要求" width="120"> </el-table-column>
    <el-table-column prop="responsibility" label="岗位职责" width="300"> </el-table-column>
    <el-table-column prop="salaryMin" label="薪资待遇" width="120"> </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small"
          >通过</el-button
        >
        <el-button type="text" size="small">驳回</el-button>
      </template>
    </el-table-column>
  </el-table>

  {{jobList}}
</div>
 
</template>

<script>



export default {
  name: "VarifyJob",
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  computed: {
    jobList() {
      return this.$store.state.jobList;
    }
  },
  
  mounted() {
    this.$store.dispatch('getNoVerifyJob');

  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
