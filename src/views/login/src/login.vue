<template>
  <div>
    This is Login
    <mt-button @click="login">接口访问测试</mt-button>
  </div>
</template>
<script>
import UserService from '../services/login.service'
export default {
  methods: {
    async login () {
      const dt = await UserService.logout()
      console.log(dt)
    }
  }
}
</script>
