<template>
  <page-header>
    <h1 class="text-xl">Settings</h1>
    <router-link :to="{ name: 'HomePage' }">
      <close-icon />
    </router-link>
  </page-header>

  <div class="mt-4">
    <div class="mb-5 flex gap-4">
      <input
        v-model.trim="cityName"
        @keyup.enter="addNewCity"
        type="text"
        placeholder="City name"
        class="flex-1 h-10 border border-gray-200 outline-none px-3 rounded-lg"
        autofocus
      />

      <button
        class="text-indigo-600 font-medium h-10 px-4 rounded-lg border border-indigo-200 disabled:opacity-40"
        :disabled="isInvalidInput"
        @click="addNewCity"
      >
        Add
      </button>
    </div>

    <p v-if="alreadyExists" class="text-red-500 text-xs mb-4">This city is already added.</p>

    <draggable-component
      v-model="cityStore.cities"
      group="cities"
      animation="200"
      item-key="element"
      handle=".drag-handle"
    >
      <template #item="{ element }">
        <div class="flex items-center gap-4 py-2 border-t border-gray-200">
          <button class="drag-handle cursor-grab active:cursor-grabbing opacity-40">
            <menu-icon />
          </button>
          <div class="flex-1 capitalize select-none">
            {{ element }}
          </div>
          <button
            class="cursor-pointer text-red-500 hover:text-red-700 transition"
            @click="removeCity(element)"
          >
            <trash-icon />
          </button>
        </div>
      </template>
    </draggable-component>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCityStore } from '@/stores/city_store'
import draggableComponent from 'vuedraggable'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import TrashIcon from '@/components/icons/TrashIcon.vue'
import MenuIcon from '@/components/icons/MenuIcon.vue'
import PageHeader from '@/components/page_header/PageHeader.vue'

const cityStore = useCityStore()
const cityName = ref('')

const alreadyExists = computed(() =>
  cityStore.cities.map((c) => c.toLowerCase()).includes(cityName.value.toLowerCase()),
)

const isInvalidInput = computed(() => !cityName.value || alreadyExists.value)

const addNewCity = () => {
  if (isInvalidInput.value) return

  cityStore.addCity(cityName.value)
  cityName.value = ''
}

const removeCity = (city: string) => {
  if (confirm(`Remove "${city}"?`)) {
    cityStore.removeCity(city)
  }
}
</script>
