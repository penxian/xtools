import { createApp } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import './style.css'
import App from './App.vue';

dayjs.extend(utc)
dayjs.extend(timezone)

createApp(App).mount('#app')