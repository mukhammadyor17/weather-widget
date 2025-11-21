import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCityStore = defineStore('city', () => {
  const LS_KEY = 'cities'

  const saved = localStorage.getItem(LS_KEY)
  const cities = ref<string[]>(saved ? JSON.parse(saved) : ['London'])

  const addCity = (name: string) => {
    if (!cities.value.includes(name)) {
      cities.value.push(name)
    }
  }

  const removeCity = (name: string) => {
    cities.value = cities.value.filter((c) => c !== name)
  }

  watch(cities, (val) => localStorage.setItem(LS_KEY, JSON.stringify(val)), { deep: true })

  return { cities, addCity, removeCity }
})
