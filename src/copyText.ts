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
 * copies the text content of an element to the clipboard.
 *
 * @param {string} value - The text content to be copied.
 * @return {void} This function does not return anything.
 */
export default function copyText(value: string): void {
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
}