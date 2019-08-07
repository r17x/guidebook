const {
  NODE_ENV: env,
  REACT_APP_NAME: appName,
  REACT_APP_DESCRIPTION: appDescription,
} = process.env

export default {
    isDevelopment: env === 'development',
    isProduction: env === 'production',
    appName,
    appDescription,
}
