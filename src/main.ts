import { defineCustomElement } from 'vue'
import './assets/main.css'

import WeatherWidget from './WeatherWidget.vue'
const element = defineCustomElement(WeatherWidget)

customElements.define('weather-widget', element)
