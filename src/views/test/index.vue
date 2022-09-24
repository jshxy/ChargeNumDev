<template>
  <div class="app-container">
    <!-- 根标签 -->
    <el-form
      ref="form"
      :model="form"
      status-icon
      :rules="rules"
      label-width="100px"
      class="register-form"
      style="width: 400px;"
    >
      <el-form-item label="指令" prop="raw_pwd">
        <el-input
          v-model="form.textarea"
          type="textarea"
          :rows="10"
          placeholder="请输入指令"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">发送</el-button>
      </el-form-item>
      <el-button type="danger" @click="get_data">获取数据</el-button>
      <el-button type="danger" @click="start">打开守护进程</el-button>

    </el-form>
  </div>
</template>

<script>
import { send_msg, startTcp } from '@/api/test'

export default {
  name: 'Test',
  data() {
    return {
      form: {
        textarea: ''
      }
    }
  },
  methods: {
    submitForm() {
      send_msg({ msg: this.form.textarea })
        .then(() => {
          this.$notify({
            title: '成功',
            message: '发送成功',
            type: 'success'
          })
        }
        )
    },
    get_data() {

    },
    start() {
      startTcp().then(() => {
        this.$notify({
          title: '成功',
          message: '守护进程已启动',
          type: 'success'
        })
      }
      )
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>
