const URL = {
  api: "http://localhost:8080/api",
  account: "http://localhost:8080/account",
  ioHost: "http://localhost:8081"
};

// if (process.env.NODE_ENV === 'development') {
//     URL.api = process.env.REACT_APP_URL_DEVELOPMENT_API
//     URL.account = process.env.REACT_APP_URL_DEVELOPMENT_ACCOUNT
// } else if (process.env.NODE_ENV === 'staging') {
//     URL.api = process.env.REACT_APP_URL_STAGING_API
//     URL.account = process.env.REACT_APP_URL_STAGING_ACCOUNT
// } else if (process.env.NODE_ENV === 'production') {
//     URL.api = process.env.REACT_APP_URL_PRODUCTION_API
//     URL.account = process.env.REACT_APP_URL_PRODUCTION_ACCOUNT
// }

export default {
  URL
};
