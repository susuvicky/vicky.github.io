<template>
     <p>{{ msg }} </p>
     <Head />
     <el-button type="primary" class="btn">点击</el-button>
</template>
 
<script>
export default {
 data () {
  return {
   msg: 'Hello VuePress!'
  }
 }
}
</script>
<style scoped>
 p {
  font-size: 32px;
  color: Green;
}
.btn {
    margin: 12px 0;
}
</style>
