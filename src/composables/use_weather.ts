import { ref, watch } from 'vue'
import { getWeather } from '../queries/get_weather'
import type { Response } from './response'

export function useWeather(city: string) {
  const data = ref<Response | null>(null)
  const isLoading = ref(false)

  const fetchWeather = async () => {
    if (!city) return
    isLoading.value = true
    try {
      data.value = await getWeather(city)
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }

  watch(() => city, fetchWeather, { immediate: true })

  return { data, isLoading }
}
