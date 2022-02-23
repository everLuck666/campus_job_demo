<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input
          class="username"
          v-model="form.name"
          :disabled="forbidden"
        ></el-input>
      </el-form-item>
      <el-form-item label="学校名称">
        <el-input v-model="form.schoolName" :disabled="forbidden"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.phone" :disabled="forbidden"></el-input>
      </el-form-item>
      <el-form-item label="项目经历">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="form.projectTextarea"
          :disabled="forbidden"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="个人爱好">
        <el-checkbox-group v-model="form.type" :disabled="forbidden">
          <el-checkbox label="运动" name="type"></el-checkbox>
          <el-checkbox label="二次元" name="type"></el-checkbox>
          <el-checkbox label="书宅" name="type"></el-checkbox>
          <el-checkbox label="爱宠人士" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="是否应届毕业生" label-width="120px">
        <el-radio-group v-model="form.identity" :disabled="forbidden">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否存在就业困难" label-width="125px">
        <el-radio-group v-model="form.question" :disabled="forbidden">
          <el-radio label="有问题"></el-radio>
          <el-radio label="无问题"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个人宣言">
        <el-input
          type="textarea"
          v-model="form.desc"
          :disabled="forbidden"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{ buttonText }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      buttonText: "修改",
      forbidden: true,
      form: {
        name: "3232",
        schoolName: "",
        date1: "",
        date2: "",
        type: [],
        identity: "",
        question: "",
        desc: "",
        practiceTextarea: "",
        projectTextarea: "",
        phone: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");

      if (!this.forbidden) {
        this.$store.dispatch('uploadStudentInfo', this.form);
      }

      this.forbidden = !this.forbidden;

    }
  },
  watch: {
    forbidden(newValue) {
        this.buttonText = !this.forbidden ? '完成' : '修改';
    }

  }
};
</script>
<style>
.username {
  width: 120px;
}
</style>
