


/**@typedef {import('./string.js')} str*/

/**@typedef {import('./time.js')} time*/

/**@type {str|time} */
module.exports=(function(){
    Object.assign(this,require('./string.js'))
    Object.assign(this,require('./time.js'))
})();