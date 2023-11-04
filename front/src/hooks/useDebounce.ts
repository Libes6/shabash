

export function useDebounce<F extends Function>(func:F, wait=50):F {
  let timeoutID:number;

  if (!Number.isInteger(wait)) {
    console.warn("Called debounce without a valid number")
    wait = 300;
  }

  return <any>function(this:any, ...args: any[]) {
    console.log(func)
    clearTimeout(timeoutID);
    const context = this;

    timeoutID = window.setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
};