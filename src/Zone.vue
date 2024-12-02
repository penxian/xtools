<script setup lang="ts">
import dayjs from 'dayjs';
import { onMounted, ref, reactive } from 'vue';
import { TimeZone } from './TimeFlag';

type Country = {
  country: string
  city: string
  timeZone: string
  time: string
  code: string
}
const time = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))
const country = reactive<Country[]>(TimeZone)

function updateTime() {
  function start() {
    requestAnimationFrame(() => {
      setTimeout(() => {
        time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
        country.map((item) => {
          item.time = dayjs().tz(item.timeZone).format('YYYY-MM-DD HH:mm:ss ddd')
        })
        start()
      }, 1000)
    })
  }
  start()
}
onMounted(() => {
  updateTime()
})
</script>
<template>
  <div class="flex justify-between">
    <input v-model="time" type="text" placeholder="Type here" class="input input-bordered max-w-xs" />
    <div>{{ country.length }}个国家</div>
  </div>
  <div class="h-[calc(100vh-20rem)] overflow-auto">
    <div class="flex flex-col">
      <div v-for="(item, index) in country" :key="index" class="flex items-center gap-2">
        <img :src="`/public/flag/${item.code}`" class="w-[38px] h-[38px]" />
        <span class="flex-auto">{{ item.country }} ({{ item.city }})</span>
        <span class="text-xs text-gray-500">{{ item.timeZone }}( {{ dayjs().tz(item.timeZone).format('Z') }})</span>
        <span class="text-right font-mono">{{ item.time }}</span>
      </div>
    </div>

  </div>
</template>