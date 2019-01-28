import request from '@/utils/request';
import { getUrlSearchParams } from '@/utils/utils';
import { hostUrl } from './params';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

export async function queryLogin(params) {
  return request(`${hostUrl}/login`, {
    method: 'POST',
    body: getUrlSearchParams(params),
    defaultHeaders: true,
  });
}
