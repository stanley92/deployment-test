const env = process.env.REACT_APP_ENV;

let config = {
  baseUrl: "http://localhost:3000",
};

if (env) {
  switch (env.toUpperCase()) {
    case "STAGE":
      config.baseUrl = "http://stage.localhost/";
      break;
    case "PRODUCTION":
      config.baseUrl = "http://localhost.com/";
  }
}

export default config;
