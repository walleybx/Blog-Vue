/**
 * @description pinia 持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @param {Array} [paths] 需要持久化的 state name
 * @return {Object} persist 配置对象
 */
const piniaPersistConfig = (key, paths) => {
  const persist = {
    key,
    storage: localStorage, // 可以选择 localStorage 或 sessionStorage
    // storage: sessionStorage,
    paths
  };
  return persist;
};

export default piniaPersistConfig;
