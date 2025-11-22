<template>
  <base-header>
    <h1 class="text-xl">Weather Widget</h1>
    <button @click="emit('changeComponent')">
      <settings-icon />
    </button>
  </base-header>
  <div class="flex flex-col gap-10">
    <weather-card v-for="city in cityStore.cities" :key="city" :city="city" />
  </div>
</template>

<script setup lang="ts">
import { useCityStore } from '@/stores/city_store'
import BaseHeader from '@/components/base_header/BaseHeader.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import WeatherCard from '@/components/weather_card/WeatherCard.vue'

const emit = defineEmits(['changeComponent'])

const cityStore = useCityStore()
</script>
