/**
 * 全局响应拦截器
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {extend} from 'umi-request';
import {stringify} from "querystring";
import {message} from "antd";
import {history} from "umi";

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  credentials: 'include', // 默认请求是否带上cookie
  // requestType: 'form',
});

/**
 * 所有请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request url = ${url}`) // 打印请求访问路径
  return {
    url,
    options: {
      ...options,
      headers: {
      },
    },
  };
});

/**
 * 所有响应拦截器
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const res = await response.clone().json();//取出响应数据进行处理
  // console.log("全局响应拦截器", res)
  if (res.code === 0) {// 成功
    return res.data;
  }
  if (res.code === 40100) {// 未登录异常
    message.error('请先登录');
    history.replace({
      pathname: '/user/login',
      search: stringify({
        redirect: location.pathname,
      }),
    });
  } else {// 出现其他异常就显示异常详情信息
    message.error(res.description);
  }
  return res.data;
});

export default request;
