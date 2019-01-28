import {
  queryProductList, queryProductDetail,
 } from '../api';
import { successMessage, errorMessage } from '@/utils/utils';
import Params from '@/services/params';

const defaultData = {
  list: [],
  pagination: {},
};

export default {
  namespace: 'home',

  state: {
    productList: defaultData, // 列表数据
    searchFormData: {}, // 产品详情
  },

  effects: {
    // 产品管理列表
    *fetchProductList({ payload }, { call, put }) {
      const response = yield call(queryProductList, payload);
      yield put({
        type: 'save',
        payload: {
          productList: response || defaultData,
          selectedRows: [],
        },
      });
    },

  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    saveSearchForm(state, { payload }) {
      return {
        ...state,
        searchFormData: {
          ...state.searchFormData,
          ...payload,
        },
      };
    },
  },
};
