export default ({ env }) => ({
  meilisearch: {
    config: {
      // Your meili host
      host: process.env.MILISEARCH_URL,
      // Your master key or private key
      apiKey: process.env.MILISEARCH_TOKEN,
    },
  },
});
