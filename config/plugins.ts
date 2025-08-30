export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: JSON.parse(
          `{"type":"service_account","project_id":"cdes-admin","private_key_id":"76479bfe204c24595a28ac9782b12a2304158c03","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvZZXVnuf0BCMs\nKY+nH6nIWC/56FkBINwnNwwvqmzEPrg1ytQB3nQ+WrOPhfGOx0JrPKEb5oGJv094\nQAgtI9LVWyUbS5X4b7Rzl6vJEbBjjfqXcKeD2L5W3jk0GkhAedYaX0SG/cjfCaWI\n5CZsadob759EI2sMbByu3wscUeGmFx+CgqpWb3NDyqgpYf8cZ0Dab5mEJrNHzREv\nxOiJRWWGqqgjZB/Co9Ky98TftDIf8jm8B4XenkKk9h4jppXT8+TTjY4CM6RFSKJO\nWbGEh4ClafnG+PedrWqyBCxE8w1W6noKxl8oFO+NgbfR1tsFbmkzkpSXWIkKxcFe\nTJlnZx05AgMBAAECggEANbplFRyJyjZwPcl3b0bkP/I/tAqIJS/XMI4MxhcrHUxn\nKlc47V+i9Szcn0T1E3sXbfkTExRfrv3zDo9y0b0NCv1SFxPm20UAnn4iCcRI554o\n2rYQInPFDqAhHsRESLfprYdsWvunyibO1empmYEtZmxXOcytsI73lFvPr/unJzSg\n+6eqPmIobwO8w1VOY9LJhVPZoYFoFrYxWZz4kcx9ldNgFvtRAHXvk4apMVGGuhgf\n87L1fG5rY0uf1AqfQ0SIlcs4+47gcNxE8wm/Ov+Q9/fq+Z4pbDk7gGZS7o936NKP\n3kpVAfXezFk/lDtT+2ZWh7c2MtVlbYJedeXEMoad9wKBgQDizzuJkheGzM4VDQ6P\njJK3HLLYRpznmG7ylljrmL8kfXQXcy2GNtjGXeHu4LPK6o3JRdVQut9UALa6tVTy\nDLGCog/7Qyb+duBjv90oWVmMsMnnGyy6zLRLWF3Kw5lvOjwRnV22UObYmoIxovGz\nCXLe4JBNhYMepNTDlFC6ScE/rwKBgQDF+HEqcexM4SGFBnspT2fS9Frt8aHgV28A\nkJSoZCn2w954U+W6ShCB0NUswO97GZUZjbsXDzQrMoukmOKf4lJElE6hTipT4QDM\nHHAMXpQW44utU0Dlv4BIb1y4zlWWor+TbBLeGfGnwAwn4ifW3ec6PeutEJoVkVHF\nof27a2yDlwKBgAOFBb5/xt+vo+8NsdEmdExlJJ1YkyzA38/h52VYjHbLf5axkd5I\nUZracBwd3oxikWqzK7lB/R83l55UHApZihOl4iubAirmu1qw6oSqxkn5oFh2wn3v\nmUimCWaRHHtuYuo/D+o5XSu1UhnlFm0Z02+D+plJXhyGoEqcrZgGdvo/AoGAd8Ed\n06suYiMdf7a38flSuM2P47fzUB4Ty6eqBWLx74/0l51IrjP3YE/PZE8hjrme8+JE\ndmKAEFF3H45MKKNjWJDOL8101WCadt4M+a6MrnvfFm3yKAh7tVWIJVLLe1/fu3H4\nx9mx0OPfdpDbwKJjKVwjoIEWdE1/xamEL0eAUOkCgYEApA3gTW0M6wwNR23WGa12\nEfrx5pSQ0c5/PNRV+AYJnK3HQ/yxC/ecN+NkLcA5pH6UtORb3b4ALPXtnvD/GxVl\nTyHMUpV34TAK7Qlsj6iVdhoKJZIvJaX23HVb5ihgmcOBmg35zxzmRSCPo7QIteOH\nJtHqksgi6p23b/uo5wkY34M=\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-fbsvc@cdes-admin.iam.gserviceaccount.com","client_id":"116392582066395289426","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40cdes-admin.iam.gserviceaccount.com","universe_domain":"googleapis.com"}`,
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
