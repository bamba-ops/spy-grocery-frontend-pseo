<script setup>
import { HomeIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/vue/24/outline'

const router = useRouter()
const route = useRoute()
const active = ref("pSEO")

const navItems = [
  { 
    name: "Landing", 
    icon: HomeIcon,
    label: "Accueil",
    path: "/"
  },
]

function activate(name) {
  const item = navItems.find(i => i.name === name)
  active.value = name
  router.push(item.path)
}

watch(() => route.path, (newPath) => {
  const item = navItems.find(i => i.path === newPath)
  if (item) active.value = item.name
})
</script>

<template>
  <!-- Contenu principal avec padding pour la navigation -->
  <div class="min-h-screen pb-24"> <!-- Ajout des paddings responsives -->
    <slot/>
  </div>

  <!-- Navigation fixe -->
  <nav class="fixed inset-x-0 bottom-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50 py-3 sm:py-3">
    <ul class="flex justify-around items-center h-16 sm:h-14">
      <li v-for="item in navItems" :key="item.name">
        <button
          @click="activate(item.name)"
          :class="[
            'group relative w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl transition-all duration-200',
            active === item.name 
              ? 'bg-black text-white shadow-sm'
              : 'text-gray-600 hover:bg-gray-100/60 hover:text-gray-800'
          ]"
        >
          <component 
            :is="item.icon" 
            class="h-7 w-7 sm:h-6 sm:w-6"
            :class="active === item.name ? 'stroke-[1.8]' : 'stroke-1'"
          />
          
          <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-700 text-white text-sm sm:text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-md whitespace-nowrap">
            {{ item.label }}
          </span>
        </button>
      </li>
    </ul>
</nav>
</template>

<style scoped>
nav {
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.25);
}

@media (min-width: 640px) {
  nav {
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.25);
  }
}

button {
  transform-origin: center;
}

button:hover {
  transform: scale(1.1);
}

button:active {
  transform: scale(0.95);
}

/* Garantit que le footer n'est pas caché sur mobile */
@media (max-width: 639px) {
  div[min-h-screen] {
    padding-bottom: 6rem; /* Ajustez selon la hauteur de votre navigation */
  }
}
</style>