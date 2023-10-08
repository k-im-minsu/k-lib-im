// @ts-check
const zlib=require('zlib')
const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
/**
 * replace all specific word to desired word
 * @param {string} str - sentence to be changed
 * @param {string} old_word specific word in str
 * @param {string} new_word desired word
 * @returns {string} - a changed sentence
 */
exports.replace=(str,old_word,new_word) =>{
    try{
        return  str.replace(new RegExp(old_word, 'g'),new_word)
    }catch{
        return  str.replace(new RegExp(escapeRegExp(old_word), 'g'),new_word)
    }
}
/**
 * compress string data by using gzip
 * @param {string} str 
 * @returns {Promise<string>} compress str
 */
exports.compress_gz= async (str)=>{
    return new Promise((res,rej)=>{
        zlib.gzip(str,(e,r)=>{
            if(!e){
                res(r.toString('base64'))
            }else{
                rej(e)
            }
        })
    })
}
/**
 * decompress compress data by using gzip
 * @param {string} str 
 * @returns {Promise<string>} decompress str
 */
exports.decompress_gz= async (str)=>{
    return new Promise((res,rej)=>{
        zlib.gunzip(Buffer.from(str,'base64'),(e,r)=>{
            if(!e){
                res(r.toString('utf8'))
            }else{
                rej(e)
            }
        })
    })
}