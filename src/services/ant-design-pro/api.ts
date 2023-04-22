// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return {
    data: [
      {
        key: 99,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 99',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 503,
        status: '0',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 81,
      },
      {
        key: 98,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 98',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 164,
        status: '0',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 12,
      },
      {
        key: 97,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 97',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 174,
        status: '1',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 81,
      },
      {
        key: 96,
        disabled: true,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 96',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 914,
        status: '0',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 7,
      },
      {
        key: 95,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 95',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 698,
        status: '2',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 82,
      },
      {
        key: 94,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 94',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 488,
        status: '1',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 14,
      },
      {
        key: 93,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 93',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 580,
        status: '2',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 77,
      },
      {
        key: 92,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 92',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 244,
        status: '3',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 58,
      },
      {
        key: 91,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 91',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 959,
        status: '0',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 66,
      },
      {
        key: 90,
        disabled: true,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 90',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 958,
        status: '0',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 72,
      },
      {
        key: 89,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 89',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 301,
        status: '2',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 2,
      },
      {
        key: 88,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 88',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 277,
        status: '1',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 12,
      },
      {
        key: 87,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 87',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 810,
        status: '1',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 82,
      },
      {
        key: 86,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 86',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 780,
        status: '3',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 22,
      },
      {
        key: 85,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 85',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 705,
        status: '3',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 12,
      },
      {
        key: 84,
        disabled: true,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 84',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 203,
        status: '0',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 79,
      },
      {
        key: 83,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 83',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 491,
        status: '2',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 59,
      },
      {
        key: 82,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 82',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 73,
        status: '0',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 100,
      },
      {
        key: 81,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
        name: 'TradeCode 81',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 406,
        status: '3',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 61,
      },
      {
        key: 80,
        disabled: false,
        href: 'https://ant.design',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        name: 'TradeCode 80',
        owner: '曲丽丽',
        desc: '这是一段描述',
        callNo: 112,
        status: '2',
        updatedAt: '2022-12-06T05:00:57.040Z',
        createdAt: '2022-12-06T05:00:57.040Z',
        progress: 20,
      },
    ],
    total: 100,
    success: true,
    pageSize: 20,
    current: 1,
  } as any;
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
