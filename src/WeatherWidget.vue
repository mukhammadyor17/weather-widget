<template>
  <main class="max-w-xl mx-auto p-10">
    <weather-list
      v-if="activeComponent == 'home'"
      @change-component="setActiveComponent"
    ></weather-list>
    <settings-card
      v-if="activeComponent == 'settings'"
      @change-component="setActiveComponent"
    ></settings-card>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeatherList from './components/weather_list/WeatherList.vue'
import SettingsCard from './components/settings_card/SettingsCard.vue'

const activeComponent = ref<'home' | 'settings'>('home')

const setActiveComponent = () => {
  activeComponent.value = activeComponent.value == 'home' ? 'settings' : 'home'
}
</script>

<style>
@import './assets/main.css';
</style>
