<template>
    <div class="min-h-screen bg-gray-50">
      <!-- En-tête du magasin -->
      <header class="bg-gradient-to-r from-black to-gray-900 text-white pb-32">
        <div class="max-w-7xl mx-auto px-4 pt-8">
          <div class="flex items-start gap-4">
            <div class="flex-1 space-y-4">
              <h1 class="text-4xl font-bold">
                Comparez les prix chez {{ storeName }}
                <span class="block text-xl font-normal mt-2 text-gray-300">
                  🛒 {{ productCount }} produits alimentaires
                </span>
              </h1>
              <p class="text-lg text-gray-300 max-w-3xl">
                Retrouvez ici tous les produits vendus chez {{ storeName }}. Comparaison des prix en temps réel, 
                suivi des promotions et alertes sur les variations tarifaires.
              </p>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Liste des produits -->
      <main class="max-w-7xl mx-auto px-4 -mt-24">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <!-- Carte produit -->
          <article 
            v-for="product in products"
            :key="product.price_id"
            class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="relative">
              <img
                :src="product.product_image_url"
                :alt="product.product_name"
                class="w-full h-48 object-contain bg-gray-50 p-4 rounded-t-2xl"
                loading="lazy"
              />
              <div 
                v-if="product.is_promo"
                class="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
              >
                🔥 PROMO
              </div>
            </div>
  
            <div class="p-4 space-y-3">
              <div class="space-y-1">
                <h2 class="text-lg font-bold line-clamp-2">
                  {{ product.product_name }}
                </h2>
                <p class="text-sm text-gray-500">{{ product.brand }}</p>
              </div>
  
              <div class="flex items-end justify-between">
                <div class="space-y-1">
                  <div class="text-2xl font-bold text-gray-900">
                    {{ product.price_un }} $
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ product.price ?  product.price+"/"+product.price_unit : product.product_unit }}
                  </div>
                </div>
                <button 
                  class="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
                  @click="navToListing(product)"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  Comparer
                </button>
              </div>
            </div>
          </article>
        </div>
  
        <!-- Chargement supplémentaire -->
        <div class="flex justify-center py-12">
          <button
            @click="navToListing()"
            class="bg-white border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all"
          >
            Voir plus de produits ➔
          </button>
        </div>
  
        <!-- Section SEO -->
        <section class="prose prose-lg py-12 max-w-none">
          <h2 class="text-3xl font-bold text-gray-900">
            Pourquoi comparer les prix chez {{ storeName }} ?
          </h2>
          
          <div class="grid md:grid-cols-2 gap-8 mt-8">
            <div class="space-y-4">
              <h3 class="text-xl font-semibold">💡 Notre analyse exclusive</h3>
              <p class="text-gray-600">
                Nous surveillons quotidiennement les prix des produits alimentaires 
                chez {{ storeName }} et d'autres supermarhés pour vous offrir une comparaison précise avec les autres enseignes.
              </p>
              <ul class="text-gray-600 space-y-2">
                <li>✔️ Économisez jusqu'à 30% sur votre panier</li>
                <li>✔️ Détection des promotions en temps réel</li>
                <li>✔️ Posibilité de faire son panier parmis plusieur supermarchés</li>
              </ul>
            </div>
  
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  const supabase = useSupabaseClient()
  const route     = useRoute()
  const router    = useRouter()
  
  const storeName = ref('')
  const products  = ref([])
  const offset    = ref(0)
  const limit     = 12
  const productCount = computed(() => products.value.length)
  
  // Head dynamique : titre et description basés sur storeName et productCount
  useHead(() => ({
    title: storeName.value
      ? `Comparez les prix chez ${storeName.value} – ${productCount.value} produits`
      : 'Chargement du comparateur…',
    meta: [
      {
        name: 'description',
        content: storeName.value
          ? `Retrouvez et comparez ${productCount.value} produits alimentaires chez ${storeName.value}. Suivi des promotions et alertes en temps réel.`
          : ''
      }
    ]
  }))
  
  // Récupère le nom du magasin depuis supabase
  const fetchStoreData = async () => {
    const { data, error } = await supabase
      .from('stores')
      .select('name')
      .ilike('name', route.params.slug)
      .limit(1)
      .maybeSingle()
    if (error) {
      console.error('❌ Erreur supabase stores :', error.message)
      storeName.value = route.params.slug
      return
    }
    storeName.value = data?.name ?? route.params.slug
  }
  
  // Charge les produits de ce magasin (RPC get_products_by_store_name)
  const fetchProducts = async () => {
    const { data, error } = await supabase.rpc('get_products_by_store_name', {
      p_offset:     offset.value,
      p_limit:      limit,
      p_store_name: storeName.value
    })
    if (error) {
      console.error('❌ Erreur supabase RPC :', error.message)
      return
    }
    products.value = [...products.value, ...data]
  }
  
  // Incrémente l'offset et charge la suite
  const loadMore = () => {
    offset.value += limit
    fetchProducts()
  }
  
  // Au montage du composant, on récupère le magasin puis ses produits
  onMounted(async () => {
    await fetchStoreData()
    await fetchProducts()
  })
  
  // Navigation vers la page listing
  function navToListing() {
    window.location.href = 'https://spygrocery.com/listing'
  }
  </script>
  
  <style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .prose ul {
    @apply list-none pl-0;
  }
  
  .prose li::before {
    content: '';
    @apply hidden;
  }
  </style>