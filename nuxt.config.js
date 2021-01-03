export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Çilek | Online Alışveriş Sitesi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-cilekbutik.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDyqWb1aeh7FSehWbh-NxcoJCbWT4hYz50",
          authDomain: "cilek-butik.firebaseapp.com",
          projectId: "cilek-butik",
          storageBucket: "cilek-butik.appspot.com",
          messagingSenderId: "839058303191",
          appId: "1:839058303191:web:21aba96c082cf86c646892"
        },
        services: {
          auth: true,
          firestore: true,
          functions: true,
          storage: true,
          database: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ],
    [
      '@nuxtjs/axios',

    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
