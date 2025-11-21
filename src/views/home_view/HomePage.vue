<template>
  <page-header>
    <h1 class="text-xl">Weather Widget</h1>
    <router-link :to="{ name: 'SettingsPage' }">
      <settings-icon />
    </router-link>
  </page-header>
  <div class="flex flex-col gap-10">
    <weather-card v-for="city in cityStore.cities" :key="city" :city="city" />
  </div>
</template>

<script setup lang="ts">
import { useCityStore } from '@/stores/city_store'
import PageHeader from '@/components/page_header/PageHeader.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import WeatherCard from '@/components/weather_card/WeatherCard.vue'

const cityStore = useCityStore()
</script>
