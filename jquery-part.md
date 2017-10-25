
### fieldset 
fieldset 元素可将表单内的相关元素分组;
当一组表单元素放到 <fieldset> 标签内时，浏览器会以特殊方式来显示它们，它们可能有特殊的边界、3D 效果，或者甚至可创建一个子表单来处理这些元素。
- disable属性，规定禁用fieldset标签；
- form:formId规定fieldset所属的表单
- name 规定fieldset的名称；
##### legend标签
为fieldset添加标题

#### $(selector).select(function)
- input文本框或者textarea，当文本被选择时会触发select事件；主动触发select方法，会选中文本；
- function可选。规定发生select事件时，执行的函数；
#### $(selector).trigger(event)
- 发布一个事件订阅的函数
#### $(selector).bind(event,function)
- 订阅自定义事件；
- bind()方法相当于浏览器自带的addEventListener()方法；
#### $(selector).unbind(event，function)
- 解除自定义事件；
- event 元素身上的一个或多个事件，如果是多个事件，用空格分隔；
- function 事件对应的函数名；
#### closest([selector])&&parntes([selector])
- 都是沿着DOM树往上找，根据选择器找到符合要求的元素；
- 区别：1.前者，只得到一个元素，即找到一个就停；后者会返回所有符合要求的集合；2.前者从自身开始找，后者从父级开始找；
### data与dataset
- $([selector]).data(key,value)设置属性；
- $([selector]).data(key)取属性key的值，不写key的话取该元素身上的所有属性；
- dataset原生js的h5新属性，oDiv.dataset.abc="123"(oDiv是dom元素);给oDiv设置data-abc="123";
- 区别是，dataset设置的属性可以反映在标签身上，从控制台中可以看到改变；而data()方法设置的属性是存在jq设置的自定义空间里的，初次设置时，jq会读取标签身上的该属性，以后得操作则发生在jq自定义的空间里，所以当通过data()改变该属性时，控制台标签上不会显示改动；并且通过dataset.abc拿到的值也不会变；总结一下：dataset和data是两套不同的系统，他们可以操作同一个dom元素，但互不影响；
