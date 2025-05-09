// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  supabase: {
    redirect: false
  },
  site: {
    url: process.env.NUXT_SITE_URL || 'http://localhost:3000',
    name: process.env.NUXT_SITE_NAME || 'SpyGrocery'
  },
  sitemap: {
    // 1) Domaine canonique
    hostname: process.env.NUXT_SITE_URL || 'http://localhost:3000',
    // 2) Compression du XML
    gzip: true,
    // 3) On appelle ton handler dynamique pour récupérer toutes les URLs
    sources: [
      '/api/__sitemap__/urls'
    ],
    // 4) (Optionnel) pour voir les logs de debug en local
    debug: process.env.NODE_ENV !== 'production'
  }

})