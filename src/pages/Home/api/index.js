import { stringify } from 'qs';
import request from '@/utils/request';
import { getFormData, getUrlSearchParams } from '@/utils/utils';
import { hostUrl } from '@/services/params';

/**
 * 产品管理
 * @param {Object} params 
 */
export async function queryProductList(params) {
  return request(`${hostUrl}/product/list`, {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

/**
 * 产品详情
 * @param {Object} params 
 */
export async function queryProductDetail(params) {
  return request(`${hostUrl}/product/detail?${stringify(params)}`);
}

// 图片上传地址
export const productUploadUrl = `${hostUrl}/product/uploadPic`;

