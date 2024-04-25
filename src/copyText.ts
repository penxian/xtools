import toast from './toast'

function copyTextToClipboard(text: string) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Failed to copy text:', error);
    });
}
/**
 * Copies the text content of an element to the clipboard.
 *
 * @param {T | string} timelabel - The element or a selector string to target the element.
 * @return {void} This function does not return anything.
 */
export default function copyText<T extends HTMLElement>(timelabel: T | string): void {
  let ele: T
  if (timelabel instanceof HTMLElement) {
    ele = timelabel
  } else {
    ele = document.querySelector(timelabel) as T
  }
  ele?.addEventListener("click", (e: Event) => {
    const value = (e.target as HTMLElement).innerText
    if (value) {
      if (window.utools) {
        utools.copyText(value)
      } else {
        copyTextToClipboard(value)
      }
      toast('复制成功')
    } else {
      toast('复制失败')
    }
  })
}