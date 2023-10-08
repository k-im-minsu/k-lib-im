var random=(min,max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}
/**
 * 랜덤 수
 * @param {number} min - n 이상
 * @param {number} max - n-1 이하
 * @returns {number} 랜덤 수
 */
exports.random=random;