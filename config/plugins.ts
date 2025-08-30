export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: JSON.parse(
          `{"type":"service_account","project_id":"cdes-admin","private_key_id":"56c4e18c60774d5599338f776793cbc19032029f","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/pi5kRscd9EvenQEheFPPdyzGm08aiIDThr7QSEz9DBeXcPLQr7IDfOOGKXrI9zBj1QQNw/w41tZbsvec2ELZsO0INvkcXuxLDl8rD+W68d+80CqHlC0h3hBgJ/ENxAVfkuUruFWna5gJsvAVC2Uq0ph5hkb4+IUW1AW1Uh93irGqOf+CcnxgYZEPAykkry8Bn3OJcx8fminACGUpDHt3ZZ/T1KQpiuTFaDaIvfntj6P9T8oqjbthczwRhLsQVtL6CA/OV3NgnAdiYsfRyL2hAtNURwK9ZDhQU+or231IdyV9/1jL4oIN0VHGrmJ10zBNMQDG6LxMqFQesZkpY0hTAgMBAAECggEAC/WZKYVygX+wMwPF1p/aowoDJPWmJGK7n0zmSrsS9YDerAL5Xrpyt7MAbmvXj1jq5R/y28+3b+3q0dgY3unD6i/B6uRQpqDpypk//muZ4LudRFFn21liI53m6bPfCrEzy04Ft7UOFfTUjQO55aZLZDZgxhycqzFe+hi1rntMdA97oJYzUJ3O/fhg2GsEx6XXplKBwPhvMm40uicn5yKY0MriGfMWNCN4Pzm5zaesRsrO99pvCO9UIAJYRvS9Yh8CSwMfW9gLlIXBi7+JHfGIAe+eHBkv0RELDG6054fE088IYI0fQ3yBOzeRPMeQDWTQJpq0gSJ99HbHJYsqm84EuQKBgQDij1dFtuzC8BetVP5Ex1detmOZObh9AJrutgCfTiuUjD41sU/juKOM1m/jyHclzuAdIPtt67ivmSy4YSw/z6txIkv/Df+iIoKN/UrgsIp8RKxC0CD4yjeJdJGQH9eGBWrItPpW/Gmg4qWJydPj99+oBsqcnoLPvJTTG7zZO+a1/QKBgQDYjYLawNTZsJgVoQfXsv/DWM64kBEW/2xJBHzInKWa5tUwnm10xK269bYYEvVE7pBzuisTBp5P0yNL1Ww4TbpGceJvVlINgjRi9CSOS79f65/yKgLywJropbDdvFmoyr77Ll/OC+nXu+Lz41jt5WlOLg8P2ZbJIsHW6ntiyRQgjwKBgFp52+RfVNXUg+AYnSJiaSXNuKCsSFzDLRw/WqhD02uTRhSzJrBOQCIyUKSqncpff2iij0YqaKrXhOBtDfq9uD2J8Md+k6PwHCsQCCMK3YMa+aAE9eXk+6DNCISB8tP2vdpBS+gJDTXOzUTlcNUNXCgB7k/1jU/gg5566UPnhA8RAoGAO1hMi/ZcXmvuwb6nj40WWkp0HFAe3taQrlH0gGWtXI31zqUcCev8UEgV5vMLFCDspUpXk5c0u1t5SMbsKWHjsnpzO1/EjL8p7BRMEFLh1z+TTaIFvNDbovYFSj7bs04cmGlVB/pr0xtCTuP28vrzqOEmb4mJsQU9adBIkAHa6jECgYA4hBdcp6YVlrWGJaYnwjthhuagn3e3NSADy2f3bNmEcI9M39pgecqE7wf3DWUBs09ofFGwT70mj5AWnTUUGFWBiWHoTOCW3Tv1NNJN8zDZjph+NqxaZPhhFkvIE0flJrL+rMv33O+7X6H7B3ix+HDjIq78pL9kGldFaVDaLKETlw==\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-fbsvc@cdes-admin.iam.gserviceaccount.com","client_id":"116392582066395289426","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40cdes-admin.iam.gserviceaccount.com","universe_domain":"googleapis.com"}`,
        ),
        // Custom bucket name
        bucket: "cdes-admin.firebasestorage.app",
        sortInStorage: true, // true | false
        debug: false, // true | false
      },
    },
  },
  meilisearch: {
    config: {
      // Your meili host
      host: process.env.MILISEARCH_URL,
      // Your master key or private key
      apiKey: process.env.MILISEARCH_TOKEN,
    },
  },
});
