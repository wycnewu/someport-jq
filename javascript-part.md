### location
- href 获得url
- host 域名+端口号
- hostname 域名
- pathname 路径
- search 查询字符串
- hash 哈希值
- origin  "http://10.94.120.96:8088"
- port 端口号
- protocol 协议 "http"
- reload 刷新页面

### slice()
[].slice()克隆对内部的引用数据类型只是克隆了地址；
### window.histiry
- window.history.back()返回上一个页面；效果同网页上的撤回按钮；
- window.history.forward()前进一个页面；
- window.history.go()从session历史中载入特定页面；IE中支持传url;
- window.history.length找到浏览器历史堆栈中的总页数;
- history.pushState(state,title,url)
```js
     'state:一个对象，可是是任意json字符串，用来存储你要插入到历史记录条目的相关信息；' ;
     'title:暂时没用，可以传null';
     'url:新的url，浏览器不会加载这个url,因为pushState()函数不会触发popstate事件';
```
- history.replaceState(state,title,url)用法跟pushState一样，区别是pushState会将history实体加一，replaceState()history实体数量不变,可以用history.length检查；
### popstate事件
- 当活动历史记录条目更改时，将触发popstate事件。如果被激活的历史记录条目是通过对history.pushState（）的调用创建的，或者受到对history.replaceState（）的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。
- 需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()）
- 不同的浏览器在加载页面时处理popstate事件的形式存在差异。页面加载时Chrome和Safari通常会触发(emit )popstate事件，但Firefox则不会。


### 数组reduce(function(previousValue,currentValue,index,array){}，initialValue)
- previousValue 上一次调用该函数的返回值，或者是初始值；
- currentValue 当前值；
- 当前项的索引；
- 该数组本身；
- initialValue 可不传，传的话代表初始值；
```js
[1,2,3,4].reduce(function(a,b) {
  return a+b;
})//=>10;
[1,2,3,4].reduce(function(a,b) {
  return a+b;
},10)//=>20
```

#### e.stopPropagation()阻止冒泡；
- e.stopImmediatePropagation()阻止冒泡，并且会阻止剩余的事件处理函数执行；

#### 块级作用域{}
- 也就是说在{}内部声明的变量只能够在{}内部访问到，在{}外部无法访问到其内部声明的变量
#### JSON.stringify(value,[replacer],[space])
- value 必选。
```js
JSON.stringify(1)// 1
JSON.stringify(null)// 'null'
JSON.stringify(undefined)// undefined
JSON.stringify({a:1})// '{a:1}'
JSON.stringify([1,2])// '[1,2]'
```
- replace 可选。函数或者数组
```js
    var ary=[1,2,3];
//传函数
    ary=JSON.stringify(ary,function (key, value) {
        console.log(typeof key);//string
        console.log(value);//[1,2,3]
        value=value.map(function (item) {
            return 'a';
        });
        console.log(value)//['a','a','a']
        return value.toString().toUpperCase();//'A,A,A'
    })
    console.log(ary)
```
```js
    var ary=[1,2,3];
    ary=JSON.stringify(ary,[5,4])
    console.log(ary)//'1,2,3'
```
- 传俩数组，忽略第二个数组；
- value传对象，replace传数组；对象的key值在数组中有的留下，没有的不保存
```js
var obj={a:1,b:2,c:3};
obj=JSON.stringify(obj,['a','c'])//'{"a":1,"c":3}'
```
- space分隔符，省略则输出的字符串没有分隔符；分隔符如果是空格或字符，最多支持10个字符；
```js
var student = new Object();
            student.qq = "5485891512";
            student.name = "Lanny";
            student.age = 25;
 
            var stu = new Array();
            stu[0] = "qq";
            stu[1] = "age";
            stu[2] = "Hi";
 
            var json = JSON.stringify(student,stu,100);//注意这里的100
            alert(json);
            //'{
            //      "qq": "5485891512",
            //      "age":25
            // }'
```
### moment(time).format(str)
- moment插件；
- time时间戳(13位精确到毫秒的)
- str:格式；YYYY(年)/MM(月)/DD(日) 中间可以是自定义符号 HH(时):mm(分):ss(秒) a(可标记是am还是pm)