<template>
    <div class="min-h-screen bg-gray-50 relative">
      <!-- État de chargement -->
      <div v-if="isLoading" class="max-w-4xl mx-auto px-4 py-6 animate-pulse">
        <!-- En-tête -->
        <div class="mb-8">
          <div class="h-8 bg-gray-200 rounded-full w-48 mb-2"></div>
          <div class="h-4 bg-gray-200 rounded-full w-32"></div>
        </div>
  
        <!-- Produit principal -->
        <section class="bg-white rounded-xl p-6 shadow-sm">
          <div class="flex flex-col md:flex-row gap-6">
            <!-- Image -->
            <div class="md:w-1/3 relative">
              <div class="w-full h-32 bg-gray-200 rounded-lg p-2">
                <svg
                  class="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
  
            <!-- Détails -->
            <div class="md:w-2/3 space-y-4">
              <!-- Magasin -->
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div class="h-4 bg-gray-200 rounded-full w-32"></div>
              </div>
  
              <!-- Prix -->
              <div class="space-y-3">
                <div class="h-8 bg-gray-200 rounded-full w-32"></div>
                <div class="h-4 bg-gray-200 rounded-full w-48"></div>
              </div>
  
              <!-- Bouton -->
              <div class="h-12 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </section>
  
        <!-- Alternatives de chargement -->
        <section v-for="n in 2" :key="n" class="space-y-4 mt-8">
          <!-- En-tête magasin -->
          <div class="flex items-center gap-3 px-2">
            <div class="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div class="h-4 bg-gray-200 rounded-full w-48"></div>
          </div>
  
          <!-- Produits -->
          <div class="overflow-x-auto pb-4 scrollbar-hide">
            <div class="flex gap-4 w-max">
              <div
                v-for="n in 3"
                :key="n"
                class="w-64 flex-shrink-0 bg-white rounded-lg p-4 shadow-sm border"
              >
                <div class="w-full h-32 bg-gray-200 rounded-lg"></div>
                <div class="h-4 bg-gray-200 rounded-full mt-3 w-3/4"></div>
                <div class="h-4 bg-gray-200 rounded-full mt-2 w-1/2"></div>
                <div class="h-8 bg-gray-200 rounded-full mt-3 w-16"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <template v-else>
        <!-- En-tête principal -->
        <header class="bg-white top-0 z-50 shadow-xl">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-black">
            {{ targetStore.products[0].product_name }}
            <span class="block text-sm font-normal text-gray-800 mt-1">
              Analyse des prix en temps réel
            </span>
          </h1>
        </div>
      </div>
    </header>

    <!-- Contenu principal -->
    <main class="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <!-- Section produit principal -->
      <section class="bg-white rounded-2xl shadow-lg border">
        <div class="grid md:grid-cols-2 gap-6 p-6">
          <!-- Image produit -->
          <div class="relative aspect-square">
            <img
              :src="targetStore.products[0].product_image_url"
              :alt="`${targetStore.products[0].product_name} - Comparaison de prix`"
              class="w-full h-full object-contain bg-gray-50 rounded-xl p-4"
            />
            <div class="absolute bottom-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm">
              🔍 Référence de comparaison
            </div>
          </div>

          <!-- Détails produit -->
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <img
                :src="targetStore.store_image_url"
                :alt="`Logo ${targetStore.store_name}`"
                class="w-14 h-14 rounded-lg border-2 border-white shadow-md"
              />
              <div>
                <h2 class="text-xl font-bold">{{ targetStore.store_name }}</h2>
              </div>
            </div>

            <!-- SEO Text -->
            <div class="prose prose-sm text-gray-600">
              <p>
                Comparez instantanément les prix du produit <strong>{{ targetStore.products[0].product_name }}</strong>. 
                Notre comparateur intelligent analyse plusieurs supermarchés en ligne pour 
                vous aider à trouver la meilleure offre. Mise à jour quotidienne des données de prix, 
                promotions exclusives et comparaison multi-enseignes.
              </p>
            </div>

            <!-- Prix et CTA -->
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-xl">
                <div class="flex items-baseline gap-3">
                  <span class="text-3xl font-bold">
                    {{ targetStore.products[0].price_un }}$
                  </span>
                  <span class="text-gray-500 text-sm">prix unitaire moyen</span>
                </div>
              </div>

              <a
                href="/listing"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full bg-black text-white py-4 rounded-xl font-bold text-center hover:bg-gray-800 transition-colors"
              >
                Voir plus de produit de chez
                <span class="block text-sm font-normal mt-1">{{ targetStore.store_name }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Alternatives par magasin -->
      <section 
        v-for="(store, index) in alternativeStores" 
        :key="store.store_id" 
        class="space-y-6"
      >
        <!-- En-tête magasin -->
        <div class="flex items-center justify-between px-4">
          <div class="flex items-center gap-4">
            <img
              :src="store.store_image_url"
              :alt="`Logo ${store.store_name} - Comparateur de prix`"
              class="w-12 h-12 rounded-lg border-2 border-white shadow-md"
            />
            <div>
              <h3 class="text-lg font-bold">{{ store.store_name }}</h3>
              <p class="text-gray-500 text-sm">{{ store.products.length }} options à comparer</p>
            </div>
          </div>
        </div>

        <!-- Liste produits scrollable -->
        <div class="overflow-x-auto pb-4 scrollbar-hide">
          <div class="flex gap-4 w-max px-4">
            <div
              v-for="product in store.products"
              :key="product.product_id"
              class="w-72 flex-shrink-0 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all"
            >
              <a
                href="/listing"
                target="_blank"
                rel="noopener noreferrer"
                class="block relative group"
              >
                <img
                  :src="product.product_image_url"
                  :alt="`${product.product_name} - Comparaison de prix`"
                  class="w-full h-48 object-contain bg-gray-50 rounded-lg"
                />
                <div class="absolute top-3 right-3 flex gap-2">
                  <span 
                    v-if="product.is_promo"
                    class="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold"
                  >
                    PROMO
                  </span>
                  <span class="bg-black/90 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                    </svg>
                    Comparer
                  </span>
                </div>
              </a>

              <div class="mt-4 space-y-2">
                <h4 class="font-semibold line-clamp-2">{{ product.product_name }}</h4>
                <p class="text-gray-500 text-sm">{{ product.brand }}</p>

                <div class="flex items-center justify-between mt-3">
                  <div>
                    <span class="text-xl font-bold">{{ product.price_un }}$</span>
                    <span class="text-gray-500 text-sm ml-2">/unité</span>
                  </div>
                  <div 
                    :class="[
                      'text-sm font-medium',
                      getDiff(product) < 0 ? 'text-green-600' : 'text-red-600'
                    ]"
                  >
                    {{ Math.abs(getDiff(product)).toFixed(2) }}$
                    {{ getDiff(product) < 0 ? 'Économie' : 'Différence' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Inter-section -->
        <div class="bg-black text-white p-6 rounded-xl text-center mt-4 mx-4">
          <h3 class="text-xl font-bold mb-2">Besoin de plus de comparaisons ?</h3>
          <p class="text-gray-300 mb-4">
            Découvrez notre site complet pour optimiser vos achats
          </p>
          <NuxtLink 
            to="/listing" 
            class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Explorer le comparateur
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </NuxtLink>
        </div>
      </section>
    </main>

      </template>
    </div>
  </template>
  
  <script setup>
  // accès au slug et au client Supabase
  const route = useRoute()
  const productSlug = route.params.slug
  const supabase = useSupabaseClient()
  
  // états réactifs
  const targetStore = ref(null)
  const alternativeStores = ref([])
  const isLoading = ref(true)
  
  // configuration dynamique du <head>
  useHead(() => {
    if (!targetStore.value) {
      return {
        title: 'Chargement du comparateur…',
        meta: [{ name: 'description', content: '' }]
      }
    }
    const prod  = targetStore.value.products[0]
    const store = targetStore.value
    return {
      title: `${prod.product_name} chez ${store.store_name} – Comparateur de prix`,
      meta: [
        {
          name: 'description',
          content: `Comparez le prix de ${prod.product_name} chez ${store.store_name} et découvrez les meilleures offres du jour.`
        }
      ]
    }
  })
  
  // constantes et erreurs
  const ERROR_MESSAGES = {
    SUPABASE: "❌ Erreur lors de l'appel de la fonction search_products_v3:",
    PROCESSING: "❌ Erreur lors du traitement:",
    SIMILARITY: "[localSimilarity] Error:",
  }
  const LOCAL_API = "https://api.spygrocery.com/similarity"
  const SIMILARITY_THRESHOLD = 0.3
  const defaultImage = ref(
    "https://us.123rf.com/450wm/pgmart/pgmart1604/pgmart160400055/55602454-lettre-de-capital-s-des-bandes-entrelac%C3%A9es-blanches-sur-un-fond-noir-mod%C3%A8le-pour-embl%C3%A8me-logos-et.jpg"
  )
  
  // cycle de vie : chargement des données
  onMounted(async () => {
    try {
      const result = await searchProductsById(productSlug)
      targetStore.value      = result.targetStore
      alternativeStores.value = result.alternativeStores
    } catch (err) {
      console.error("❌ Erreur:", err.message)
    } finally {
      isLoading.value = false
    }
  })
  
  // gestion de l'image par défaut
  function onImgError(event) {
    event.target.src     = defaultImage.value
    event.target.onerror = null
  }
  
  // appel au microservice pour similarité textuelle
  async function localSimilarity(source, sentencesArray) {
    try {
      return await $fetch(LOCAL_API, {
        method: 'POST',
        body:   { source_sentence: source, sentences: sentencesArray },
        timeout: 60000
      })
    } catch (err) {
      console.error(ERROR_MESSAGES.SIMILARITY, err.data || err.message)
      return null
    }
  }
  
  // récupération et traitement des produits via Supabase + PostgreSQL
  async function searchProductsById(slug) {
    try {
      // 1. produit de référence
      const { data: refProd, error: fetchError } = await supabase
        .from("products")
        .select("id, name")
        .eq("slug", slug)
        .limit(1)
        .maybeSingle()
      if (fetchError) throw fetchError
  
      // 2. appel de la fonction RPC
      const { data: storeResults, error: rpcError } = await supabase.rpc(
        "search_products_v4",
        { search_text: refProd.name }
      )
      if (rpcError) throw rpcError
  
      // 3. séparation cible vs alternatives
      let target      = null
      const alternatives = []
      for (const store of storeResults) {
        const idx = store.products.findIndex(p => p.product_id === refProd.id)
        if (idx > -1) {
          target = { ...store, products: [ store.products[idx] ] }
        } else {
          alternatives.push(store)
        }
      }
  
      // 4. calcul des similarités pour filtres
      const allProducts = alternatives.flatMap(store =>
        store.products.map(p => ({ ...p, store }))
      )
      const scores = await localSimilarity(
        refProd.name,
        allProducts.map(p => p.product_name)
      )
  
      // 5. reconstitution du résultat filtré
      const processed = allProducts
        .map((p, i) => ({ ...p, similarity: scores[i] }))
        .filter(p => p.similarity >= SIMILARITY_THRESHOLD)
        .reduce((acc, p) => {
          const sid = p.store.store_id
          if (!acc[sid]) acc[sid] = { ...p.store, products: [] }
          acc[sid].products.push(p)
          return acc
        }, {})
  
      return {
        targetStore:       target,
        alternativeStores: Object.values(processed)
      }
  
    } catch (error) {
      console.error("Erreur recherche:", error)
      return { targetStore: null, alternativeStores: [] }
    }
  }
  
  // fonctions utilitaires de comparaison de prix
  function canCompareBasePrice(product) {
    return product.price != null && targetStore.value.products?.[0]?.price != null
  }
  function getLeftPrice(product) {
    return canCompareBasePrice(product) ? product.price : product.price_un
  }
  function getRightPrice(product) {
    return canCompareBasePrice(product)
      ? targetStore.value.products[0].price
      : targetStore.value.products[0].price_un
  }
  function getDiff(product) {
    return getLeftPrice(product) - getRightPrice(product)
  }
  </script>
  
<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
  