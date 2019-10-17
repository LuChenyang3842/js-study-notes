// 事件触发n秒后执行回调， 如果n秒后又被出发则重新记时间

function debounce(fn, delay){
    var context = this
    var args = arguments
    var timer = null
    clearInterval(timer)
    setTimeout(function(){
        fn.apply(context, args)}, delay)
}



function handle() {
    console.log(Math.random()); 
}


window.addEventListener('scroll', debounce(handle, 1000));