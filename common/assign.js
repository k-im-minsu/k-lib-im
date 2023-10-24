

var hasOwnProperty = Object.prototype.hasOwnProperty;
const specify={}
function assign(dest,src){
    if(dest!==src){
        for(var k in src){
            if(hasOwnProperty.call(dest,k)){
                const v=src[k]
                const t=typeof v
                switch(t){
                   case 'object':
                        const dv=dest[k]
                        if(dv&&(t===typeof dv)){
                            if(specify[v.constructor.name]){
                                dest[k]=v
                            }else{
                                assign(dv,v)
                            }
                        }else{
                            dest[k]=v
                        }
                    break;
                    default:
                        dest[k]=v
                        break
                }
            }else{
                dest[k]=src[k]
            }
        }
    }
}
/**
 * deep assign object
 * @param {object} target 
 * @param {...object} args 
 * @returns {object}
 */
exports.merge=(target,...args) =>{
    if(target&&(typeof target==='object')){
        for(var i=0;i<args.length;i++){
            const t=args[i]
            if(t&&(typeof t==='object'))
                assign(target,t)
        }
    }
    return target;
}
/**
 * specify objects from the corresponding class as values
 * @param {object} obj 
 */
exports.class_to_value=(obj)=>{
    specify[obj.constructor.name]=true
}