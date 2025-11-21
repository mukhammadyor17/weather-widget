import { useQuery } from '@tanstack/vue-query'
import { getWeather } from '@/views/home_view/api/get_weather'

export function useWeather(city: string) {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeather(city),
    staleTime: 1000 * 60 * 5,
  })
}
