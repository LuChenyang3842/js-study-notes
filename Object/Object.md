# 面向对象编程

1. 不是区分类和实例，通过原型（proptype）实现面向对象编程
2. 根对象 Object.prototype 

- array的原型链：
arr ----> Array.prototype ----> Object.prototype ----> null

- 函数的原型链
foo ----> Function.prototype ----> Object.prototype ----> null
因为function定义了apply() 所以所有function都可以使用这个方法

```
var arr = [1,2,3]

```
## 构造函数

用 new 关键字创建对象，如以下带吗

```
function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}

xiaoming = new Student("xiaoming")

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}


```
1. 原型链： xiaoming --> studnet.proptype --> object.proptype --> null
2. xiaoming也自动继承了 contsructor() 属性， 指向 student 本身
3. 也可以通过proptype往原类型里加入 新的方法


```
xiaoming.constructor === Student.prototype.constructor; // true
Student.prototype.constructor === Student; // true
Object.getPrototypeOf(xiaoming) === Student.prototype; // true
```
插播： instancof 返回boolean value, typeof 返回七个基本对象

```
xiaoming instanceof Student // true
typeof(xiaoming) //object

```



## 继承方式

### 1. 改变propto的指向实现继承

```
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;
```

### 2. Object.create() 实现继承

```
// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true

```


## 多次继承

使用空函数f调整原型链指向

```
function inherits(parent, child){
    var f = function(){};
    f.proptype = parent.proptype;
    child.proptype = new f()

}

function Student(props) {
    this.name = props.name || 'Unnamed';
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

```

## class 继承

```
class student{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log("Hello World")
    }

}

class primaryStudent extends student{
    constructor(name, grade){
        super(name);
        this.grade = grade;
    }

    myGrade(){
        console.log()
    }
}


```




## 基本类型

1. typeof()

```
typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'
```

2. 包装对象

```
var n = new Number(123); // 123,生成了新的包装类型
var b = new Boolean(true); // true,生成了新的包装类型
var s = new String('str'); // 'str',生成了新的包装类型

typeof new Number(123); // 'object'
new Number(123) === 123; // false

typeof new Boolean(true); // 'object'
new Boolean(true) === true; // false

typeof new String('str'); // 'object'
new String('str') === 'str'; // false


var n = Number('123'); // 123，相当于parseInt()或parseFloat()
typeof n; // 'number'

var b = Boolean('true'); // true
typeof b; // 'boolean'

var b2 = Boolean('false'); // true! 'false'字符串转换结果为true！因为它是非空字符串！
var b3 = Boolean(''); // false

var s = String(123.45); // '123.45'
typeof s; // 'string'


```
