
const isProduction = process.env.NODE_ENV === 'production';
const serverUrl = `//${window.location.host}/api`;
const hostUrls = [
  '/',
];

export const hostUrl = isProduction ? serverUrl : hostUrls[0];

export const systemName = 'Antd';

export default {
  /** 
   * 公共
   */
  // 分页参数
  defaultPageSize: 20, // 默认每页显示条数
  pageSize: 20, // 每页显示条数
  pageSizeOptions: ['10', '20', '50', '100', '200', '500'], // 指定每页显示条数
  // 公共参数
  boolean: ['否', '是'],
  isSuccess: ['失败', '成功'],

};
