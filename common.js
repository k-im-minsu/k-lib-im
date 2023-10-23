
//@ts-check

/**@typedef {import('./common/http.js')} Http*/

/**@typedef {import('./common/string.js')} Str*/

/**@typedef {import('./common/time.js')} Time*/

/**@typedef {import('./common/math.js')} Math*/

/** @typedef {import('./common/assign.js')} Assign */

/**
 * @typedef {object} Common
 * @property {Http} http
 * @property {Function} sleep
 */
/**@type {Common} */
const common=(function(){
    /**@type {Http} */
    this.http=require('./common/http.js')
    /**
     * @function sleep use await to sleep by ms
     * @param {number} ms millisecond
     * @return {Promise<null>}
     */
    this.sleep=(ms)=>{
         return new Promise(resolve=>{
             setTimeout(resolve,ms)
         })
     }
     return this;
})()

/**@type {Common&Str&Time&Math&Assign} */
module.exports=(function(){
    Object.assign(this,common)
    Object.assign(this,require('./common/string.js'))
    Object.assign(this,require('./common/time.js'))
    Object.assign(this,require('./common/math.js'))
    Object.assign(this,require('./common/assign.js'))
    return this;
})();