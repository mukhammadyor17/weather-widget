import { ref, watch } from 'vue'

const LS_KEY = 'cities'

const saved = localStorage.getItem(LS_KEY)
export const cities = ref<string[]>(saved ? JSON.parse(saved) : ['London'])

export const addCity = (name: string) => {
  if (!cities.value.includes(name)) {
    cities.value.push(name)
  }
}

export const removeCity = (name: string) => {
  cities.value = cities.value.filter((c) => c !== name)
}

watch(
  cities,
  (val) => {
    localStorage.setItem(LS_KEY, JSON.stringify(val))
  },
  { deep: true },
)
