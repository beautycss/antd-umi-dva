import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, Card, Divider, Icon, Modal, message, Tooltip } from 'antd';
import moment from 'moment';
import Link from 'umi/link';

import { successMessage, errorMessage } from '@/utils/utils';
import Params from '@/services/params';
import styles from './Home.less';

const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');
const ButtonGroup = Button.Group;

const renderNowrapContent = value => {
  return (<div className={styles.nowrap}>{value || ''}</div>)
};

const renderNowrapTooltip = value => {
  return (
    <Tooltip title={value} placement="bottom">
      <div className={styles.nowrap} >
        {value || ''}
      </div>
    </Tooltip>
  )
};

const renderTime = value => {
  return value && (<div className={styles.nowrap}>{moment(value).format('YYYY-MM-DD') || ''}</div>)
};

@connect( ({ home, loading }) => ({
  home,
  loading: loading.models.home,
}))
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getProductList();
  }

  // 获取列表
  getProductList = (payload) => {
    const { home: { productList: { pagination } } } = this.props;
    const params = payload || pagination;
    this.props.dispatch({
      type: 'home/fetchProductList',
      payload: {
        query: {
          time: null,
        },
      },
    });
  }

  render() {
    const { home: { productList }, loading } = this.props;

    return (
      <Fragment>
        <div className={styles.wrapper}>
          <Card bordered={false}>
            Home
          </Card>
        </div>
      </Fragment>
    );
  }
}
