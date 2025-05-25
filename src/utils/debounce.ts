export function debounce(callback: (...args: any) => void) {
  let timer = 0;

  return (...args: any) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback(...args);
    }, 500);
  };
}
