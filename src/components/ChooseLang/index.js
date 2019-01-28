import React, { PureComponent } from 'react';
import { formatMessage, setLocale, getLocale } from 'umi/locale';
import { Menu, Icon, Dropdown } from 'antd';
import styles from './index.less';

export default class ChooseLang extends PureComponent {
  changLang = ({ key }) => {
    setLocale(key);
  };

  render() {
    const selectedLang = getLocale();
    
    return (
      <Menu className={styles.menu} selectedKeys={[selectedLang]} mode="horizontal" onClick={this.changLang}>
        <Menu.Item key="zh-CN">
          {' '}
          简体中文
        </Menu.Item>
        <Menu.Item key="zh-TW">
          {' '}
          繁体中文
        </Menu.Item>
        <Menu.Item key="en-US">
          {' '}
          English
        </Menu.Item>
      </Menu>
    );
  }
}
