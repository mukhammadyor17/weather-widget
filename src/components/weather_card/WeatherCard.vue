<template>
  <div class="flex justify-center">
    <div v-if="isLoading" class="text-gray-500 text-lg py-10">Loading...</div>
    <div
      v-if="data"
      class="w-80 bg-white rounded-3xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100"
    >
      <div class="text-center mb-4">
        <h2 class="text-2xl font-semibold text-gray-900">{{ data.name }}</h2>
        <p class="text-sm text-gray-500 capitalize">
          {{ data.weather[0]?.description }}
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          :src="`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`"
          class="w-24 h-24"
          alt="weather icon"
        />
        <div class="text-5xl font-semibold text-gray-900">{{ roundValues(data.main.temp) }}°C</div>
        <div class="text-sm text-gray-500">
          feels like {{ roundValues(data.main.feels_like) }}°C
        </div>
      </div>
      <div class="my-5 border-t border-gray-200"></div>
      <div class="grid grid-cols-3 text-center gap-2">
        <div>
          <p class="text-xs text-gray-500">Humidity</p>
          <p class="text-sm font-medium text-gray-700">💧 {{ data.main.humidity }}%</p>
        </div>
        <div>
          <p class="text-xs text-gray-500">Clouds</p>
          <p class="text-sm font-medium text-gray-700">☁️ {{ data.clouds.all }}%</p>
        </div>
        <div>
          <p class="text-xs text-gray-500">Wind</p>
          <p class="text-sm font-medium text-gray-700">💨 {{ data.wind.speed }} m/s</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeather } from '@/composables/use_weather'

const props = defineProps<{ city: string }>()

const { data, isLoading } = useWeather(props.city)

const roundValues = (val: number) => Math.round(val)
</script>
