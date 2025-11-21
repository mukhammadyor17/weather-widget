import WeatherService from '@/services/weather_service'

export const getWeather = async (city: string) => {
  try {
    const { data } = await WeatherService.get(city)
    return data
  } catch (error) {
    console.error(error)
  }
}
