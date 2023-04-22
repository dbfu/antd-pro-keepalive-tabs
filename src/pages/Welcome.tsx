import { KeepAliveTabContext } from '@/layouts/context';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Input, Space } from 'antd';
import React, { useContext, useEffect } from 'react';

const Welcome: React.FC = () => {

  const {
    closeTab,
    closeOtherTab,
    refreshTab,
    onHidden,
    onShow,
  } = useContext(KeepAliveTabContext);

  useEffect(() => {
    onHidden(() => {
      console.log('hidden');
    });
    onShow(() => {
      console.log('show');
    });
  }, [])

  return (
    <PageContainer>
      <h1>打开控制台测试hidden和show事件</h1>
      <Input />
      <Space>
        <Button onClick={() => { refreshTab() }}>刷新</Button>
        <Button onClick={() => { closeTab() }}>关闭</Button>
        <Button onClick={() => { closeOtherTab() }}>关闭其他</Button>
      </Space>
    </PageContainer>
  );
};

export default Welcome;
