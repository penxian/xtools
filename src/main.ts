import './style.css'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import TimeZoneList from './timeZone'
import copyText from './copyText'

dayjs.extend(utc)
dayjs.extend(timezone)

enum TimeType {
  Second = "second",
  Millisecond = "millisecond"
}

// 时间戳=>时间转
const timelabel = document.querySelector<HTMLElement>("#time")!
function timestapToStr(value: string) {
  if (!value) {
    if (timelabel) {
      timelabel.innerText = ''
    }
  } else {
    const ms = (document.querySelector('[name=time]:checked') as HTMLInputElement).value || 'second'
    const t = ms == TimeType.Millisecond ? dayjs(parseInt(value)) : dayjs.unix(parseInt(value))
    const timezoneSelect = document.querySelector<HTMLSelectElement>("#timezoneselect")
    const f = t.tz(timezoneSelect?.value || "Asia/Shanghai")
    const year = f.format('YYYY-MM-DD HH:mm:ss')
    if (timelabel) {
      timelabel.innerText = `${year}`
    }
  }
}

// 复制功能实现
copyText(timelabel)
copyText("#timeFormat")
copyText("#nowTimeStamp")
copyText("#forTimeStamp")


// 时间戳=》转换时间
const timestamp = document.querySelector<HTMLInputElement>("#timestamp")
if (timestamp) {
  timestamp.addEventListener("input", (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    timestapToStr(value)
  });
}

// 时间戳=>时间
function strToTimestap(value: string) {
  if (!value) {
    return
  }
  const timezoneSelect = document.querySelector<HTMLSelectElement>("#timezoneselect")
  const ms = (document.querySelector('[name=time]:checked') as HTMLInputElement).value || 'second'
  const t = dayjs(value).tz(timezoneSelect?.value || "Asia/Shanghai", true)
  const time = document.querySelector<HTMLElement>("#forTimeStamp")
  if (time) {
    time.innerText = ms == TimeType.Millisecond ? `${t.valueOf()}` : t.unix().toString()
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

// 秒和毫秒转换
document.querySelectorAll('[name=time]').forEach((item) => {
  item.addEventListener("change", (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    if (timestamp && timestamp.value) {
      if (value === TimeType.Second) {
        timestamp.value = timestamp.value.substring(0, 10).padEnd(10, '0')
      } else {
        timestamp.value = timestamp.value.substring(0, 13).padEnd(13, '0')
      }
    }
    timestapToStr(timestamp!.value)
    strToTimestap(forTime!.value)
  })
})
//====================================================
// 当前时间戳
const nowTimeStamp = document.querySelector<HTMLElement>("#nowTimeStamp")
const timeFormat = document.querySelector<HTMLElement>("#timeFormat");

function dealNowTimeStamp() {
  const ms = (document.querySelector('[name=time]:checked') as HTMLInputElement).value || 'second'
  const date = dayjs()
  const timezoneSelect = document.querySelector<HTMLSelectElement>("#timezoneselect")
  if (nowTimeStamp) {
    const t = date.unix().toString()
    nowTimeStamp.innerText = ms == TimeType.Millisecond ? t.padEnd(13, '0') : t
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