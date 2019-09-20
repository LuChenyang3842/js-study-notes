
var x = 2/0 //infinately
console.log(typeof(x)) //number 

//  NAN 与任何值都不同
console.log(NaN == NaN) // false 用isNaN 判断

console.log(2/3) // 自动成浮点数

i= 1 //变成全局变量 设计缺陷
console.log(i)

//反引号打多行字符串 
console.log(`这是一个
多行
字符串`)



//-------------- Array -----------------------

//请注意，直接给Array的length赋一个新的值会导致Array大小的变化：
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]

// 请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
var arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr变为[1, 2, 3, undefined, undefined, 'x']

// Array make copy
// slice() 和 string 里 substring 方法类似
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();

//Array 删除元素
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
arr.splice(2, 3, 'Google', 'Facebook');  // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// push and pop
var arr = [1, 2];
arr.push('A', 'B'); // 返回Array新的长度: 4
arr; // [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
arr; // [1, 2, 'A']
arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
arr; // []

//Array 排序
var arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']


// Array concat()
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);  // 返回新的array
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']



//join 和 python 的 join一样
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'



//-------------- object -----------------------

// 访问属性是通过.操作符完成的(object.proptype)，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来：
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};

// xiaohong的属性名middle-school不是一个有效的变量，就需要用''括起来。访问这个属性也无法使用.操作符，必须用['xxx']来访问：
//访问不存在属性 返回undefined, 不报错


//Delete 属性

var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错
xiaoming.age = 18;
//判断属性是否存在
'name' in xiaoming //false 注意，属性可能不是小明的，可能是继承的，比如 toSting in xiaoming true


//判断一个属性是不是小明自己的， 用hasOwnProperty
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false


//-------------- loop -----------------------
// for  ... in 打出所有属性
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}


// for  ... of 打出所key 

// --------------- map ---------------------

// 用 set（）做
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined


// --------------- Set ---------------------
var s = new Set([1, 2, 3, 3, '3']); // 3 '3'为不同元素
s.add(4);

// --------------- Iteratble ---------------------
// for ... of..
//for each 方法更好

//array
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

//set
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});
//map
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});

//如果对其它参数不感兴趣， 直接用element 一个参数
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});