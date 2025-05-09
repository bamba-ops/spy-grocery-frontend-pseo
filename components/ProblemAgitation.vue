<script setup>

function navToListing() {
  window.location.href = 'https://spygrocery.com/listing'
}
</script>

<template>
  <section class="bg-white py-20 md:py-28 px-4">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-14 md:mb-20">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Quand l’épicerie dévore votre budget
        </h2>
        <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Fermer les yeux, c’est :
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Problème 1 -->
        <!-- Problème 1 -->
        <div
          class="p-6 md:p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6"
          >
            <svg
              class="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Voir jusqu’à 1 500 $ s’échapper de votre compte chaque année
          </h3>
          <p class="text-gray-600 mb-4">
            Un gouffre pour votre budget, repas après repas.
          </p>
          <div class="bg-red-50 p-4 rounded-xl">
            <p class="text-sm text-red-700">
              Chaque visite en caisse épuise votre épargne et vous prive de vos
              projets.
            </p>
          </div>
        </div>

        <!-- Problème 2 -->
        <div
          class="p-6 md:p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6"
          >
            <svg
              class="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Payer jusqu’à 35 % de plus pour le même panier
          </h3>
          <p class="text-gray-600 mb-4">
            Les écarts invisibles entre enseignes vous coûtent cher.
          </p>
          <div class="bg-blue-50 p-4 rounded-xl">
            <p class="text-sm text-blue-700">
              Sans comparaison, chaque dollar s’évapore.
            </p>
          </div>
        </div>

        <!-- Problème 3 -->
        <div
          class="p-6 md:p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6"
          >
            <svg
              class="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            Subir des hausses imprévisibles mois après mois
          </h3>
          <p class="text-gray-600 mb-4">
            +14 % des Québécois en insécurité alimentaire depuis 2019.
          </p>
          <div class="bg-green-50 p-4 rounded-xl">
            <p class="text-sm text-green-700">
              Votre budget reste à la merci de l’inflation.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 md:mt-20 text-center">
        <button
          @click="navToListing"
          class="bg-black text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl"
        >
          <span class="font-semibold text-lg"> Comparer les prix </span>
          <svg
            class="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animations supplémentaires si nécessaire */
</style>
