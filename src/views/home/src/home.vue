<template>
  <div>{{ $t("loginbtn.btn") }}
    <p class="bbb">daf</p>
  </div>
</template>
<script>
async function aa () {
  console.log('adfadf')
}
aa()
console.log('adf')
export default {
  created () {
    console.log(this.$Http)
  }

}
</script>
<style lang="less">
  .bbb {
    border: 1px solid red;
    height: 200PX;
    transform: rotate(7deg);
    display: flex;
    font-size: 40px;
    background-image: url(../../../assets/img/cart-delete.png)
  }
</style>
