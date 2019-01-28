// 公共service文件
import { message } from 'antd';

/**
 * 操作成功提醒
 */
export const successMessage = (msg) => {
  message.success(msg || '操作成功');
};
/**
 * 操作失败提醒
 * @param {string} msg
 */
export const errorMessage = (msg) => {
  message.error(`${msg || '操作失败'}`);
};
