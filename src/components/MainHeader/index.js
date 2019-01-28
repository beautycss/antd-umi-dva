import React, { PureComponent } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Menu, Icon } from 'antd';

import ChooseLang from '@/components/ChooseLang';
import { systemName } from '@/services/params';
import styles from './index.less';

export default class MainHeader extends PureComponent {

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const { currentMenu } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.lang}>
          <ChooseLang />
        </div>
        <div className={styles.logo}>
          <Link to="/" key="logo">
            {systemName}
          </Link>
        </div>
        <div className={styles.mainMenu}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[currentMenu]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              {formatMessage({ id: 'menu.home', defaultMessage: '首页' })}
            </Menu.Item>
            <Menu.Item key="products">
              {formatMessage({ id: 'menu.products', defaultMessage: '新品' })}
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
