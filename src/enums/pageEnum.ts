// export enum PageEnum {
//   // basic login path
//   BASE_LOGIN = '/ding',
//   // basic home path
//   BASE_HOME = '/dashboard',
//   // error page path
//   ERROR_PAGE = '/exception',
//   // error log page path
//   ERROR_LOG_PAGE = '/error-log/list',
// }
// @ts-ignore
const useDingLogin = import.meta.env.VITE_USE_DING_LOGIN === 'true';
export const PageEnum = {
  // basic login path
  BASE_LOGIN: useDingLogin ? '/ding' : '/Login',
  // basic home path
  BASE_HOME: '/dashboard',
  // error page path
  ERROR_PAGE: '/exception',
  // error log page path
  ERROR_LOG_PAGE: '/error-log/list',
};
