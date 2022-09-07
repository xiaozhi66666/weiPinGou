import fly from '@/utils/request.js'

/**
 * 获取商品列表
 */
export const getGoodsAPI = (data) => fly.request('/goods/search', data)
