/**
 * throttle(fn, wait)
 * 
 * Creates a version of the function that, when invoked repeatedly, will call
 * the original  function once per  every wait milliseconds.  It’s useful for
 * limiting events that occur faster.
 *
 * @param {*} fn 
 * @param {*} interval 
 */

export default function throttle(fn, interval) {
    let lastTime;
    return function throttled() {
        let timeSinceLastExecution = Date.now() - lastTime;
        if(!lastTime || (timeSinceLastExecution >= interval)) {
            fn.apply(this, arguments);
            lastTime = Date.now();
        }
    };
}