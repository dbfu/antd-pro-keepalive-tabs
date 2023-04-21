import { useEffect, useState } from 'react';
import { useMatchRoute } from './useMatchRoute';

export interface KeepAliveTab {
  title: string;
  routePath: string;
  key: string;  // 这个key，后面刷新有用到它
  pathname: string;
  icon?: any;
  children: any;
}

function getKey() {
  return new Date().getTime().toString();
}

export function useKeepAliveTabs() {
  const [keepAliveTabs, setKeepAliveTabs] = useState<KeepAliveTab[]>([]);
  const [activeTabRoutePath, setActiveTabRoutePath] = useState<string>('');

  const matchRoute = useMatchRoute();

  useEffect(() => {

    if (!matchRoute) return;

    const existKeepAliveTab = keepAliveTabs.find(o => o.routePath === matchRoute?.routePath);

    // 如果不存在则需要插入
    if (!existKeepAliveTab) {
      setKeepAliveTabs(prev => [...prev, {
        title: matchRoute.title,
        key: getKey(),
        routePath: matchRoute.routePath,
        pathname: matchRoute.pathname,
        children: matchRoute.children,
        icon: matchRoute.icon,
      }]);
    }

    setActiveTabRoutePath(matchRoute.routePath);
  }, [matchRoute])


  return {
    keepAliveTabs,
    activeTabRoutePath,
  }
}