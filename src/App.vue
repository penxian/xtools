<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import dayjs from 'dayjs';
import TimeZoneList, { TimeZone } from './timeZone'
import copyText from './copyText'
import Zone from './Zone.vue';


enum TimeType {
  Second = "second",
  Millisecond = "millisecond"
}
const localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone

const timezoneOptins = reactive<TimeZone[]>(TimeZoneList)
const timestamp = ref<string>('')
const time = ref<string>('millisecond')
const timezoneSelect = ref<string>(localTimeZone)
const forTime = ref<string>('')
const nowTimeStamp = ref<string>('')
const timeFormat = ref<string>('')


const timelabel = computed(() => {
  if (!timestamp.value) return ""
  timestamp.value = time.value === TimeType.Millisecond ? timestamp.value.padEnd(13, '0') : timestamp.value.substring(0, 10)
  const t = time.value === TimeType.Millisecond ? dayjs(parseInt(timestamp.value)) : dayjs.unix(parseInt(timestamp.value))
  const f = t.tz(timezoneSelect.value || "Asia/Shanghai")
  return f.format('YYYY-MM-DD HH:mm:ss')
})

const forTimeStamp = computed(() => {
  if (!forTime.value) return ""
  const t = dayjs(forTime.value).tz(timezoneSelect.value || "Asia/Shanghai", true)
  return time.value === TimeType.Millisecond ? t.valueOf() : t.unix().toString()
})

function dealNowTimeStamp() {
  const date = dayjs()
  if (nowTimeStamp) {
    const t = date.unix().toString()
    nowTimeStamp.value = time.value == TimeType.Millisecond ? t.padEnd(13, '0') : t
  }
  if (timeFormat) {
    const f = date.tz(timezoneSelect.value)
    timeFormat.value = f.format("YYYY-MM-DD HH:mm:ss");
  }
}
const isRun = ref(true)
let tk: number = 0
function stop() {
  if (isRun.value) {
    clearInterval(tk)
    tk = 0
    isRun.value = false
  } else {
    isRun.value = true
    tk = setInterval(dealNowTimeStamp, 1000)
  }

}

function copyAct(e: Event) {
  const value = (e.target as HTMLInputElement).innerText
  copyText(value)
}

onMounted(() => {
  tk = setInterval(dealNowTimeStamp, 1000)
})

</script>
<template>
  <div role="tablist" class="tabs tabs-lifted">
    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="时区转换" checked />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <div class="h-full w-full rounded-sm">
        <select class="select select-sm w-1/2 select-bordered" v-model="timezoneSelect">
          <option v-for="item in timezoneOptins" :key="item.timeZoneName" :value="item.timeZoneName">
            {{ item.timeZoneDesc }}
          </option>
        </select>
        <!-- Tab 按钮 -->
        <div class="flex gap-2 mt-4">
          <label for="secondt"
            class="grid place-content-center cursor-pointer has-[:checked]:bg-cyan-600 has-[:checked]:text-white w-20 border border-cyan-600 h-8 text-cyan-600">
            <input id="secondt" type="radio" checked name="time" v-model="time" value="millisecond"
              class="appearance-none" />
            毫秒
          </label>
          <label for="secondt1"
            class="grid place-content-center cursor-pointer has-[:checked]:bg-cyan-600 has-[:checked]:text-white w-20 border border-cyan-600 h-8 text-cyan-600">
            <input id="secondt1" type="radio" name="time" v-model="time" value="second" class="appearance-none" />
            秒
          </label>
        </div>
        <!-- 时间戳转时间 -->
        <div class="flex items-end gap-5 mt-4">
          <div class="flex flex-col gap-1 w-1/2">
            <label class="text-cyan-600">时间戳</label>
            <input v-model="timestamp" id="timestamp" placeholder="请输入时间戳"
              class="w-full hover:border-cyan-500 border border-cyan-600 text-cyan-600 px-1 rounded-sm h-8" />
          </div>
          <span>-</span>
          <div class="tooltip" data-tip="点击复制">
            <div @click="copyAct" class="flex flex-col cursor-pointer">{{ timelabel }}</div>
          </div>
        </div>
        <!-- 时间转时间戳 -->
        <div class="flex items-end gap-5 mt-4">
          <div class="flex flex-col gap-1 w-1/2">
            <label class="text-cyan-600">时间(格式为YYYY-MM-DD HH:mm:ss)</label>
            <input v-model="forTime" placeholder="请输入时间"
              class="w-full hover:border-cyan-500 border border-cyan-600 text-cyan-600 px-1 rounded-sm h-8" />
          </div>
          <span>-</span>
          <div class="tooltip" data-tip="点击复制">
            <div @click="copyAct" class="flex flex-col cursor-pointer">{{ forTimeStamp }}</div>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-[200px_1fr_1fr_1fr] grid-rows-[1fr_40px] items-center grid-flow-col">
          <div class="col-start-1 col-span-1 text-zinc-600">当前时间:</div>
          <div class="col-start-2 text-zinc-600">当前时间戳:</div>
          <div class="tooltip col-start-2 col-span-1 text-left cursor-pointer" data-tip="点击复制" @click="copyAct">
            {{ nowTimeStamp }}
          </div>
          <div class="tooltip col-start-1 col-span-1 text-left cursor-pointer" data-tip="点击复制" @click="copyAct">
            {{ timeFormat }}
          </div>
          <button id="stop" @click="stop"
            class="col-start-3 row-start-2 border w-20 h-8 border-cyan-600 text-cyan-600 active:bg-cyan-500 active:text-white">
            {{ isRun ? '暂停' : '继续' }}
          </button>
        </div>
      </div>
    </div>

    <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="时区" />
    <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
      <Zone />
    </div>
  </div>
</template>