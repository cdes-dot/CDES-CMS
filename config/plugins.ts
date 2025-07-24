export default ({env}) => ({
     upload: {
      config: {
        provider: "strapi-provider-firebase-storage",
        providerOptions: {
          serviceAccount: JSON.parse(env("FIREBASE_SERVICE_ACCOUNT")),
          // Custom bucket name
          bucket: 
            "gs://indexador-demo-gemini.firebasestorage.app",
          sortInStorage: true, // true | false
          debug: false, // true | false
        },
      },
    },
    meilisearch: {
        config: {
            // Your meili host
            host: 'http://localhost:7700',
            // Your master key or private key
            apiKey: 'EPCi1cZvJRR5wL4imWxuePyA4Sieyao_A_Kyf6jVa0E',
        },
    },
});
