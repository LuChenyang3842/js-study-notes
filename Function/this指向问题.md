# This 指向问题


##一些例

```
luke = {
    birthday : 1994,
    age: function(){
        var y = new  Date().getFullYear() - this.borthday
    }
}

luke.age() // this 指向luke
var fn = xiaoming.age; // 先拿到xiaoming的age函数
fn(); // NaN

```

```
var getAge() = function(){
     var y = new  Date().getFullYear() - this.borthday
}
luke = {
    birthday : 1994,
    age: getAge()
}

luke.age // this指向
getAge() // NaN

```
**总结: 只有 object.fucntion() 才能使得object内部函数的this指向object！！**

##解决方法：

1. 使用 var that = this
```
luke = {
    birthday : 1994,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
}

luke.age // this指向
getAge() // NaN

```

2. 使用 apply, apply接收两个参数，第一个参数是this指向的对象，第二个参数是array，表示函数自身参数
```
var getAge() = function(){
     var y = new  Date().getFullYear() - this.borthday
}
luke = {
    birthday : 1994,
    age: getAge()
}

getAge.apply(luke, []) //25

```

3. 使用call, call 的第一个参数是this指向的对象，剩下按顺序传续函数原本的参数 （非arrat，区别于apply）
```
var getAge() = function(){
     var y = new  Date().getFullYear() - this.borthday
}
luke = {
    birthday : 1994,
    age: getAge()
}

getAge.apply(luke) //25

```



