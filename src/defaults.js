// Used throughout the browser extension.
export const DEFAULT_SETTINGS = {
  url: "http://127.0.0.1",
  port: "8000",
  token: "",
  apiEndpoint: "/api/antares2goats/",
  antaresEnv: "PRODUCTION", // "PRODUCTION" or "DEVELOPMENT"
  antaresUrls: {
    PRODUCTION: "https://antares.noirlab.edu",
    DEVELOPMENT: "https://development.antares.noirlab.edu",
  },
};
