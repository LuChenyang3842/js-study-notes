## 浏览器
目前 safari 和Chrome都是 基于webkit内核的浏览器

# 对象

## window 对象
1. 表示全局作用域
2. 表示浏览器窗口

**属性**
1. innerWidth
2. innerHeight
3. navigator (浏览器信息)
   1. navigator.appName (浏览器名称)
   2. navigator.appVersion(浏览器版本)
   3. navigator.langugae(浏览器设置语言)
   4. navigator.platform (操作系统类型)
   5. navigator.userAgent(浏览器设定的userAgent字符串)
4. screen （屏幕信息）
   1. screen.width
   2. screen.height
   3. screen.colorDepth
5. location(当前url信息)
   1. location.protocol //http
   2. location.host //www.example.com
   3. location.port //8080
   4. locaton.pathname ///path/index.html
   5. location.search // ?a=1
   6. location.reload (重新加载当前页面)
   7. location.assign('/')
6.  document (DOM树的根节点)
    1.  document.title
    2.  document.getElemenById()
    3.  document.getElementsByTagName()
    4.  document.cookie
7. history (任何情况下都不应该使用History对象，因为现在web打量异步交互)
   1. history.back()
   2. history.forward()