/**
 * debounce(fn, wait)
 * 
 * creates a version of the function that, when invoked repeatedly, will call
 * the original function  after wait  milliseconds since the last invocation.
 * It’s useful  for running  a function  only  after  the event  has  stopped
 * arriving.
 * 
 * @param {*} fn 
 * @param {*} interval 
 */
 
export default function debounce(fn, interval) {
    let timer;
    return function debounced() {
        clearTimeout(timer);
        let args = arguments;
        let that = this;
        timer = setTimeout(() => fn.apply(that, args), interval);
    };
}