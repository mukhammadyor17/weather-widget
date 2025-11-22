import { useQuery } from '@tanstack/vue-query'
import { getWeather } from '../queries/get_weather'

export function useWeather(city: string) {
  return useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeather(city),
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 2,
  })
}
