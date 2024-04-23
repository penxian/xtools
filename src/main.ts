import './style.css'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import TimeZoneList from './timeZone'
dayjs.extend(utc)
dayjs.extend(timezone)
// 时间戳=>时间转
function timestapToStr(value: string) {
  const time = document.querySelector<HTMLElement>("#time")
  if (!value) {
    if (time) {
      time.innerText = ''
    }
  } else {
    const t = dayjs(parseInt(value))
    const timezoneSelect = document.querySelector<HTMLSelectElement>("#timezoneselect")
    const f = t.tz(timezoneSelect?.value || "Asia/Shanghai")
    const year = f.format('YYYY-MM-DD HH:mm:ss')
    if (time) {
      time.innerText = `${year}`
    }
  }
}

// 时间戳转换时间
const timestamp = document.querySelector<HTMLInputElement>("#timestamp")
if (timestamp) {
  timestamp.addEventListener("input", (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    timestapToStr(value)
  });
}

// 时间戳=>时间
function strToTimestap(value: string) {
  const timezoneSelect = document.querySelector<HTMLSelectElement>("#timezoneselect")
  const t = dayjs(value).tz(timezoneSelect?.value || "Asia/Shanghai", true)
  const time = document.querySelector<HTMLElement>("#forTimeStamp")
  if (time) {
    time.innerText = `${t.valueOf()}`
  }
}

// 时间转换时间戳
const forTime = document.querySelector<HTMLInputElement>("#forTime")
if (forTime) {
  forTime.addEventListener("input", (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    strToTimestap(value)
  });
}

// 当前时间戳
const nowTimeStamp = document.querySelector<HTMLElement>("#nowTimeStamp")
const timeFormat = document.querySelector<HTMLElement>("#timeFormat");

function dealNowTimeStamp() {
  if (document.querySelector('[name=time]:checked')) {

  }
  const date = dayjs()
  const timezoneSelect = document.querySelector<HTMLSelectElement>("#timezoneselect")
  if (nowTimeStamp) {
    nowTimeStamp.innerText = date.valueOf().toString()
  }
  if (timeFormat) {
    const f = date.tz(timezoneSelect?.value)
    timeFormat.innerText = f.format("YYYY-MM-DD HH:mm:ss");
  }
}
let tk: number = setInterval(dealNowTimeStamp, 1000)

document.querySelector<HTMLButtonElement>('#stop')?.addEventListener('click', (e: Event) => {
  if (tk) {
    clearInterval(tk)
    tk = 0
    if (e.target) {
      (e.target as HTMLButtonElement).innerText = "继续"
    }
  } else {
    tk = setInterval(dealNowTimeStamp, 1000)
    if (e.target) {
      (e.target as HTMLButtonElement).innerText = "暂停"
    }
  }
})


// 时区初始化

const timezoneSelect = document.querySelector<HTMLSelectElement>("#timezoneselect")
if (timezoneSelect) {
  timezoneSelect.addEventListener("change", (e: Event) => {
    const value = (e.target as HTMLSelectElement).value
    window.console.log(value, '====')
    if (timestamp && timestamp.value) {
      timestapToStr(timestamp.value)
    }
    if (forTime && forTime.value) {
      strToTimestap(forTime.value)
    }
  })
  TimeZoneList.forEach((item) => {
    const optionElement = document.createElement("option");
    optionElement.value = item.timeZoneName;
    optionElement.text = item.timeZoneDesc;
    timezoneSelect.appendChild(optionElement);
  })
  const localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone
  timezoneSelect.value = localTimeZone
  console.log(localTimeZone)
}