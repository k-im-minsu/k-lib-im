// @ts-check
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