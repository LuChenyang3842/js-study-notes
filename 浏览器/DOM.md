DOM的操作
1. 更新
2. 遍历
3. 添加
4. 删除

三个常用方法
1. document.getElementById()
2. document.getElementByTagName()
3. document.getElementByClassName()
4. document.querySelector()

## 1. 更新DOM
innerHTML -- 有xss攻击
innerText, innerContent ---自动对字符串进行编码，保证无法设置任何html标签
innerText不返回隐藏元素的文本
innerContent 返回所有文本

设置css:
```
<p id = 'p-id'> .. </p> 
var p = document.getElementById('p-id')
p.style.color = '#ff000'
p.style.fontSize = '20px'

```

## 2. 插入DOM
- 如果内部节点为空，可以直接使用InnerHTML
- 如果非空
  - apendChild, 添加至最后一个节点。 注意： 如果插入已存在的元素，会先删除原有元素。 当然也可从0创建并添加： document.creatElement()
  - insertBefore(new,prev)