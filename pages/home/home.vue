<template>
  <view>
    <view class="top-search"><view class="search">搜索</view></view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.top-search {
  width: 100%;
  height: 200rpx;
  background-color: #c00000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  .search {
    width: 60%;
    height: 70rpx;
    background-color: #fff;
    border-radius: 20rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
