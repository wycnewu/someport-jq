## 小结分享-王玉超
### $.Deferred延迟对象
- 创建

```js
    var dfd=$.Deferred()
```
- state :pending(尚未完成状态),resolved（成功）,rejected（失败）
- 改变状态的两个方法resolve(),reject()
- $.when(Deferred对象或者promiss对象)监听
- 回调函数:done()成功的回调；fail()失败的回调；then(successFun,failFun),always(function(){})不管成功还是失败都会走；

### data()与attr()，dataset的区别
- data(key,value) value可以是任意数据类型，通过data(key)取出来还是原来数据类型；attr(key,value)不论value设的是什么类型，通过attr(key)取出来的都是字符串；
- $([selector]).data()方法会单独建一个对象cache={},来储存通过data()方法做的增删改查时数据，所以通过data()添加的方法只能通过data()来增删改查；attr()方法会改变目标对象身上的attribuates（数组）属性；所以通过data()方法对元素自定义属性做的修改在标签上不显示，而attr做的修改会显示；
- 通过$([selector])[0].dataset[key]改变目标对象身上的dataset的值，反应在标签上会看到data-xxx的值被修改；
- 删除data()设置的值$([selector]).removeData(key)

### prop(name|properties|key,value|fn)与attr(name|properties|key,value|fn);
- prop用于对DOM自带属性的操作；
- attr 一般用于对自定义属性的操作；
- name取值
- properties:对象，可以设置多对属性
- key,value设置一对属性

### $(selector).delegate(childSelector,event,data,function)
- childSelector子节点，也是要操作的元素
- 事件
- 传给函数的参数
- 执行的函数
- 阻止绑定在某个子元素身上的事件发生用阻止冒泡的方法
- 阻止冒泡 event.stopPropagation();
- 阻止冒泡并且阻止剩余事件处理函数的执行event.stopImmediatePropagation()；
- 阻止默认事件event.preventDefault();
- 同时阻止冒泡还阻止默认事件 return false;

### es6中let定义的变量会识别块级作用域
- 变量提升
- 块级作用域
- var声明的变量会成为window的一个属性，let 不会;
- let 在严格模式下是保留词；
```js
let let = 1;//违法
var let =1 ;//可以
```
#### 块级作用域{}
- 也就是说在{}内部声明的变量只能够在{}内部访问到，在{}外部无法访问到其内部声明的变量
#### eval()作用域
- 当直接用eval()时，作用域为当前作用域；
- window.eval(),作用域是window，eval()的结果存在于全局作用域下；

### closest([selector]) && parentes([selector])
- 都是沿着DOM树往上找，根据选择器找到符合要求的元素；
- 区别：1.前者，只得到一个元素，即找到一个就停；后者会返回所有符合要求的集合；2.前者从自身开始找，后者从父级开始找；