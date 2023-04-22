import { Dropdown, Tabs } from 'antd';
import { useCallback, useMemo } from 'react';
import { history } from '@umijs/max';

import { KeepAliveTab, useKeepAliveTabs } from './useKeepAliveTabs';
import type { ItemType, MenuInfo } from 'rc-menu/lib/interface';
import { KeepAliveTabContext } from './context';


enum OperationType {
  REFRESH = 'refresh',
  CLOSE = 'close',
  CLOSEOTHER = 'close-other',
}

type MenuItemType = ItemType & { key: OperationType } | null;

const KeepAliveLayout = () => {

  const {
    keepAliveTabs,
    activeTabRoutePath,
    closeTab,
    refreshTab,
    closeOtherTab,
    onHidden,
    onShow,
  } = useKeepAliveTabs();

  const menuItems: MenuItemType[] = useMemo(() => [
    {
      label: '刷新',
      key: OperationType.REFRESH,
    },
    keepAliveTabs.length <= 1 ? null : {
      label: '关闭',
      key: OperationType.CLOSE,
    },
    keepAliveTabs.length <= 1 ? null : {
      label: '关闭其他',
      key: OperationType.CLOSEOTHER,
    },
  ].filter(o => o), [keepAliveTabs]);


  const menuClick = useCallback(({ key, domEvent }: MenuInfo, tab: KeepAliveTab) => {
    domEvent.stopPropagation();

    if (key === OperationType.REFRESH) {
      refreshTab(tab.routePath);
    } else if (key === OperationType.CLOSE) {
      closeTab(tab.routePath);
    } else if (key === OperationType.CLOSEOTHER) {
      closeOtherTab(tab.routePath);
    }
  }, [closeOtherTab, closeTab, refreshTab]);

  const renderTabTitle = useCallback((tab: KeepAliveTab) => {
    return (
      <Dropdown
        menu={{ items: menuItems, onClick: (e) => menuClick(e, tab) }}
        trigger={['contextMenu']}
      >
        <div style={{ margin: '-12px 0', padding: '12px 0' }}>
          {tab.icon}
          {tab.title}
        </div>
      </Dropdown>
    )
  }, [menuItems]);

  const tabItems = useMemo(() => {
    return keepAliveTabs.map(tab => {
      return {
        key: tab.routePath,
        label: renderTabTitle(tab),
        children: (
          <div
            key={tab.key}
            style={{ height: 'calc(100vh - 112px)', overflow: 'auto' }}
          >
            {tab.children}
          </div>
        ),
        closable: keepAliveTabs.length > 1,
      }
    })
  }, [keepAliveTabs]);

  const onTabsChange = useCallback((tabRoutePath: string) => {
    const curTab = keepAliveTabs.find(o => o.routePath === tabRoutePath);
    if (curTab) {
      history.push(curTab?.pathname);
    }
  }, [keepAliveTabs]);

  const onTabEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'remove') {
      closeTab(targetKey as string);
    }
  };

  const keepAliveContextValue = useMemo(
    () => ({
      closeTab,
      closeOtherTab,
      refreshTab,
      onHidden,
      onShow,
    }),
    [closeTab, closeOtherTab, refreshTab, onHidden, onShow]
  );

  return (
    <KeepAliveTabContext.Provider value={keepAliveContextValue}>
      <Tabs
        type="editable-card"
        items={tabItems}
        activeKey={activeTabRoutePath}
        onChange={onTabsChange}
        className='keep-alive-tabs'
        hideAdd
        animated={false}
        onEdit={onTabEdit}
      />
    </KeepAliveTabContext.Provider>
  )
}

export default KeepAliveLayout;