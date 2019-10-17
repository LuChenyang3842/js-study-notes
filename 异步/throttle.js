// 一定时间内只调用一次指定事件，如果多次触发则在一定时间内只执行一次回调函数，两种方法： 时间戳，定时器


function throttle(fn, gapTime) {
    let _lastTime = null;
  
    return function () {
      let _nowTime = + new Date()
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
        fn();
        _lastTime = _nowTime
      }
    }
  }
  
  let fn = ()=>{
    console.log('boom')
  }
  
  setInterval(throttle(fn,1000),10)

