import React, { Fragment } from 'react';
import Link from 'umi/link';
import { Icon } from 'antd';

import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';
import { systemName } from '@/services/params';
import styles from './MainLayout.less';

const links = [{
  key: '帮助',
  title: '帮助',
  href: '',
}, {
  key: 'github',
  title: <Icon type="github" />,
  href: 'https://github.com/ant-design/ant-design-pro',
  blankTarget: true,
}, {
  key: '条款',
  title: '条款',
  href: '',
  blankTarget: true,
}];

const copyright = <div>Copyright <Icon type="copyright" /> {new Date().getFullYear()} {systemName} All Rights Reserved.</div>;

class MainLayout extends React.PureComponent {

  render() {
    const { children, route: { routes } } = this.props;
    console.log(routes);
    
    return (
      <Fragment>
        <MainHeader />
        <div className={styles.content}>
          {children}
        </div>
        <MainFooter links={links} copyright={copyright} />
      </Fragment>
    );
  }
}

export default MainLayout;
