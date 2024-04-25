
export default function toast(msg: string, ms: number = 1000) {
  const toastEl: HTMLElement | null = document.getElementById('toast')
  if (toastEl) {
    toastEl.querySelector('span')!.innerText = msg
    toastEl.style.display = 'block'
    setTimeout(() => {
      toastEl.style.display = 'none'
    }, ms);
  }
}