import './style.css'

function dealTime(value: string) {
  const t = new Date(parseInt(value))
  const year = t.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' }) + ' ' + t.toLocaleTimeString()
  const time = document.querySelector<HTMLElement>("#time")
  if (time) {
    time.innerHTML = `${year}`
  }
}

const timestamp = document.querySelector<HTMLInputElement>("#timestamp")

if (timestamp) {
  timestamp.value = new Date().valueOf().toString()
  dealTime(timestamp.value)
  timestamp.addEventListener("input", (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    dealTime(value)
  });
}

function dealForTime(value: string) {
  const t = new Date(value)
  const time = document.querySelector<HTMLElement>("#forTimeStamp")
  if (time) {
    time.innerHTML = `${t.valueOf()}`
  }
}

const forTime = document.querySelector<HTMLInputElement>("#forTime")
if (forTime) {
  const t = new Date()
  const year = t.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' }) + ' ' + t.toLocaleTimeString()
  forTime.value = year
  dealForTime(year)
  forTime.addEventListener("input", (e: Event) => {
    const value = (e.target as HTMLInputElement).value
    dealForTime(value)
  });
}

// 按钮切换
const millisecond = document.querySelector<HTMLButtonElement>("#millisecond")
const second = document.querySelector<HTMLButtonElement>("#second")
second?.addEventListener('click', (e: Event) => {
  (millisecond?.classList as DOMTokenList).remove("active");
  (e.target as HTMLButtonElement).classList.add("active");
})

millisecond?.addEventListener('click', (e: Event) => {
  (second?.classList as DOMTokenList).remove("active");
  (e.target as HTMLButtonElement).classList.add("active");
})

const nowTimeStamp = document.querySelector<HTMLElement>("#nowTimeStamp")
const timeFormat = document.querySelector<HTMLElement>("#timeFormat");
// 当前时间戳

function dealNowTimeStamp() {
  const date = new Date()
  if (nowTimeStamp) {
    nowTimeStamp.innerHTML = date.valueOf().toString()
  }
  if (timeFormat) {
    timeFormat.innerHTML = date.toLocaleString();
  }
}
let tk: number = setInterval(dealNowTimeStamp, 1000)

document.querySelector<HTMLButtonElement>('#stop')?.addEventListener('click', (e: Event) => {
  if (tk) {
    clearInterval(tk)
    tk = 0
    if (e.target) {
      (e.target as HTMLButtonElement).innerHTML = "继续"
    }
  } else {
    tk = setInterval(dealNowTimeStamp, 1000)
    if (e.target) {
      (e.target as HTMLButtonElement).innerHTML = "暂停"
    }
  }
})