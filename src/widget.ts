import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router'

class WeatherWidget extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div')
    this.appendChild(mountPoint)

    const app = createApp(App)
    app.use(createPinia())
    app.use(VueQueryPlugin)
    app.use(router)

    app.mount(mountPoint)
  }
}

customElements.define('weather-widget', WeatherWidget)
