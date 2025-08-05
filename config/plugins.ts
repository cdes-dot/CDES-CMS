export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: JSON.parse(
          `{"type": "service_account","project_id": "indexador-demo-gemini","private_key_id": "3d1500ef667dd7dbb0d9da52363bfcf9a5db778f","private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC6c0Ra0NqDJaYJ\n2k5YMaaIHIC/sUp3UwtJlHLkF3gdzcnziwvmLVT4396H0OCA9CSSETf9Rw8OpWAo\nUrK5v9tjk/DgyM5FsFsahwNJfGMfRY9uUHLMxqJVz9PL5g93QqvVrQeirC1NsNPG\nvdEOryKwFs/fQG3HNYUFsHLd9VpYa7VKe0Z6WAfBJmYdlgc+wifhHgVIuxKy0Nuq\nXWNo/iDi2IAXAKJRCMq5hCynYw7elMj8x383sIEBdt3+9+FnC0aY1BMfLx8EvOeq\n16UDM/8v1WsIASAEPPDQhXMwRBLXWBsNbpkLFF+PLHw0iPzQoDBK4ta8DVY2TQdE\nbL9/O/mFAgMBAAECggEAB0J3MiEJLQuRejc7jzAJt6mCctRMnbZITXpf+dUXGnP5\njcfHdBQmR5Vx5PBjWWoIJX7RowU6Bxw10QQdTOG1QVyQh7QR4gFCntcMb/dNpblP\n4x/zRFlklzpDGSCRUBeyuJxm3HTfQ7Pjnwyjf/KeQ2Rz/hGUZKoHDqhm5JEJzkD8\nU80mf9NI9+v4nI5RBU/bFNZhD3Fyp2Qci9G9K5kWFqHdiNzAwdhMLbs7LZADBxJd\ns+UH+7+FsjiYvtUvTLhK8zJ3kQV/f3OHs5n1nPrHWQskouYcJHAVzH/gD8aVaZfX\n+JKRCQz3WUwRff2XvHs5UG/A2sj0nxlmrhrjV37n2QKBgQDkLe/t45xuyhlnGMxq\n0aC29peOtnOFWo1XQWPd96+sP0kzn1ldfkAK2M00W0lkduzve/eJmWH07vIh0Lh3\nuIin7krG9NtVHSEDL5NnuLEpAkJ1oTjGMB6Mhwtkpb8n/7A2JhRx9wJmvciTGY8X\nvJlvcJSk+JxRKAWFPvrGOGeQ+QKBgQDRLtsF0xLmRLtuEupPCf+eJH2x9J7fs4gE\n7mBHSJmA+1joHwoABFA1bcDV9Qz9o8j6m9ng7Huyv2V2cB3xE9pCnttivT6LFRPj\nkL6jLO0yV8LLdk7a8JzgLYTvjRaEi4jwH431dO6kpTTHndbiYxw3y4asGpdgshR3\nKSDeIDSb7QKBgCW6QrV+sNrQp6qYOxReXMhjtWNvX2JpOn123mBRF8bPH/ddHZWL\nzmL8vdEuVtA5qatfP+qMZdntuDNHI3kIFfBOQibrTWihTFgOgbzgmMpDCWIRqiV6\nx1JM8eFOVnDyodwSJ8dAJDGAp61KyJIQKP54CtvMD2yLxX3mj+g+Y0FhAoGAWwjC\nJpnCKtYUn4W51KXsSX1l+lET5xSxiDvZSIxuyXQZMAN6DaHS6j2WY0ae3a8uoum6\neylPd+3VkSKf1S+nl8Cchy8Gje6hVjLC1C6UF4mb64HUNXHrQ6Brrvi+qPY0pROG\nayD1Tk/bVVf6kVFCkYGQXUvBP0Kgp28Nr71iR80CgYAKAjXbM037vpjl4NzN/4XA\nw43Ba9C3xCG3+sEmD9yGR+sLT7wvcLMSjlwOwVooyjR9tvDl9sMeqc7ngnV+jMTl\ndRLwAGC0AFTwgRPdhFATNJa23w5tJCKbbisDL9mLC1FJ7MdPzb8gLFWt9tszEojt\nwQAfXikHDWLnBf03mb160A==\n-----END PRIVATE KEY-----\n","client_email": "firebase-adminsdk-fbsvc@indexador-demo-gemini.iam.gserviceaccount.com","client_id": "115716885843029845535","auth_uri": "https://accounts.google.com/o/oauth2/auth","token_uri": "https://oauth2.googleapis.com/token","auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40indexador-demo-gemini.iam.gserviceaccount.com","universe_domain": "googleapis.com"}`,
        ),
        // Custom bucket name
        bucket: "gs://indexador-demo-gemini.firebasestorage.app",
        sortInStorage: true, // true | false
        debug: false, // true | false
      },
    },
  },
  meilisearch: {
    config: {
      // Your meili host
      host: "http://localhost:7700",
      // Your master key or private key
      apiKey: "EPCi1cZvJRR5wL4imWxuePyA4Sieyao_A_Kyf6jVa0E",
    },
  },
});
