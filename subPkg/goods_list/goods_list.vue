<template>
  <view>
    <view v-for="item in goods" :key="item.goods_id">
      <van-card
        thumb-link="/subPkg/goods_detail/goods_detail"
        :price="item.goods_price | priceFormat"
        :title="item.goods_name"
        :thumb="item.goods_small_logo || defaultPic"
      ></van-card>
    </view>
  </view>
</template>

<script>
import { getGoodsAPI } from '@/api/goods.js';
import message from '@/utils/toast.js';
export default {
  data() {
    return {
      queryData: {
        query: '',
        cid: '',
        pagesize: 10,
        pagenum: 1
      },
      goods: [],
      total: 0,
      // 默认的空图片
      defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
      isLoainng: false
    };
  },
  methods: {
    async getGoods(cb) {
      this.isLoainng = true;
      const { goods, total } = await getGoodsAPI(this.queryData);
      this.isLoainng = false;
      this.goods = [...this.goods, ...goods];
      this.total = total;
      cb && cb();
    }
  },
  onLoad({ query, cid }) {
    this.queryData.query = query || '';
    this.queryData.cid = cid || '';
    this.getGoods();
  },
  onPullDownRefresh() {
    this.queryData = {
      query: this.queryData.query,
      cid: '',
      pagesize: 10,
      pagenum: 1
    };
    this.goods = [];
    this.total = 0;
    this.getGoods(() => {
      uni.stopPullDownRefresh();
    });
  },
  onReachBottom() {
    const isTotalMax = this.queryData.pagenum * this.queryData.pagesize >= this.total;
    if (isTotalMax) {
      message.to('没有更多数据了');
      return;
    }
    if (this.isLoainng) return;
    this.queryData.pagenum++;
    this.getGoods();
  }
};
</script>

<style lang="scss"></style>
