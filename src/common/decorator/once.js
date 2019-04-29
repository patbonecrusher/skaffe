
/**
 * once(fn)
 * 
 * creates a version of the function that executes only once. It’s useful for
 * an initialization function, where we want to make sure it  runs only once,
 * no matter how many times it is called from different places.
 * 
 * @param {\} fn 
 */

export default function once(fn){
	let returnValue;
	let canRun = true;
	return function runOnce(){
		if(canRun) {
			returnValue = fn.apply(this, arguments);
			canRun = false;
		}
		return returnValue;
	}
}