/* 防抖 */
export function debounce2(func,delay){
    let timeout = null;
    return function(){
        let that = this;
        let args = arguments;
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            func.apply(that,args)
        },delay)
    }
}

/* 节流 */
export function throttle2(func,delay){
    let flag = true;
    return function(){
        let that = this;
        let args = arguments;
        if(!flag){
            //未超过时间间隔，flag无效，不执行func
            return false;
        }
        func.apply(that,args);
        flag = false;
        setTimeout(() => {
            flag = true
        },delay)
    }
}