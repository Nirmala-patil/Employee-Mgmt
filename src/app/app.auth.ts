import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: "8f585a0d-6a06-4f48-881c-8fc8015683de",
        authority: "https://login.microsoftonline.com/f3211d0e-125b-42c3-86db-322b19a65a22/",// Update with your redirect URL
        redirectUri: "http://localhost:4200"
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};
