
const moment=require('moment')
/**
 * convert time to text format
 * @param {string} format the text format literal [YYYY, MM, DD, HH, mm, ss]
 * @param {number} tick total milliseconds from 1970 to the present
 * @param {string} add_type type of time to be added [y, M, w, d, h, m ,s, ms]
 * @param {number} add_num number of time to be added
 * @param {boolean} is_utc is true if $tick is time of utc
 * @returns {string} time of text
 */
exports.time_view=(format='YYYY/MM/DD HH:mm:ss',tick=undefined,add_type='',add_num=0,is_utc=true) =>{
    switch(add_type){
        case 'y':
        case 'M':
        case 'w':
        case 'd':   
        case 'h':
        case 'm':
        case 's':
        case 'ms':
            if(add_num==0){
                add_type='';
            }
            break;
        default :
        add_type=''
            break;
    }
    if(is_utc){
        if(add_type.length==0){
            if(tick){
                return moment.utc(tick).format(format);
            }else{
                return moment.utc().format(format);
            }
        }else{
            if(tick){
                return moment.utc(tick).add(add_num,add_type).format(format);
            }else{
                return moment.utc().add(add_num,add_type).format(format);
            }
        }
    }else{
        if(add_type.length==0){
            if(tick){
                return moment(tick).format(format);
            }else{
                return moment().format(format);
            }
        }else{
            if(tick){
                return moment(tick).add(add_num,add_type).format(format);
            }else{
                return moment().add(add_num,add_type).format(format);
            }
        }
    }
}
/**
 * get present time tick of total millisecond
 * @param {string|null} add_type type of time to be added [y, M, w, d, h, m ,s, ms]
 * @param {number} add_num number of time to be added
 * @returns {number} total milliseconds
 */
exports.time_tick=(add_type=null,add_num=0) =>{  
    if(!add_type){
        return moment().valueOf();
    }else{
        switch(add_type){
        case 'y':
        case 'M':
        case 'w':
        case 'd':   
        case 'h':
        case 'm':
        case 's':
        case 'ms':
            if(!add_num){
                return moment().valueOf();
            }else{
                return moment().add(add_num,add_type).valueOf();
            }
        default :
        return moment().valueOf();
        }
    }
};
/**
 * get increase or decrease time tick of total millisecond
 * @param {number} old_tick base time tick(ms)
 * @param {string} add_type type of time to be added [y, M, w, d, h, m ,s, ms]
 * @param {number} add_num number of time to be added
 * @returns {number} new total milliseconds
 */
exports.time_tick_add=(old_tick,add_type,add_num)=>{
    return moment(old_tick).add(add_num,add_type).valueOf();
}
