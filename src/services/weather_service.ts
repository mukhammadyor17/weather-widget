import axios from 'axios'

export default class WeatherService {
  static get(city: string) {
    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: city, appid: import.meta.env.VITE_APP_ID, units: 'metric' },
    })
  }
}
