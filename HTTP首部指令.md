##图解HTTP
### 一、http首部指令(cache-control:max-age:0......)
#### 1.request首部max-age
- 0缓存服务器通常会将请求转发给原服务器，也就是会向源服务器确认资源是否有效；
- n则缓存时间小于n的可以直接返回缓存；
#### 2.response首部max-age
- 0要求每次都向原服务器确认资源的有效性；
- n 在n时间段内，直接读取缓存，不需要再向服务器确认资源的有效性；
- 当request的该首部与response的冲突时，以response的首部为准；
#### 缓存服务器遇到max-age与Experies并存的情况
- HTTP/1.1会优先处理max-age,忽略掉Experies
- HTTP/1.0会优先处理Experies,忽略掉max-age
#### only-if-cached
- 客户端只要缓存服务器本地缓存的资源，他要求缓存服务器不重新加载响应，也不向源服务器确认；如果缓存服务器的本地缓存无响应，则返回状态码504；
#### must-revalidate
- 代理会向原服务器再次确认要返回的缓存资源的有效性，若无法连接到原服务器则必须返回504；另外must-revalidate会忽略请求首部的max-stale指令；
#### 客户端max-stale
- 如果有值，则指示缓存服务器返回过期时间不超过该值的缓存，即使缓存资源已过期，只要不超过max-stale规定的时间，都会返回；如果没值，则永恒返回缓存资源；
#### proxy-revalidate
- 要求所有的缓存服务器在返回响应前，必须向源服务器确认资源的有效性；
#### no transform
- 要求无论请求还是响应都不准更改实体主体的媒体类型；这样做可防止代理或缓存压缩图片等类似操作；
#### expires与max-age的区别
- max-age是相对时间，从客户端请求时算起，过多长时间
- expires可以指定相对时间（Atime）,绝对时间（Mtime）
#### Last-modified文件的最后更新时间
- 第一次请求时，服务器会返回给客户端一个Last-modified属性标记（response Header）表示此文件在服务器端最后被修改的时间；当客户端再次请求该资源时，根据HTTP规定，浏览器会向服务器发送If-Modified-Since报文，值就是第一次请求时服务器返回的Last-modified的值；如果服务器资源没变化，就返回304，并且返回的内容为空，以节省传输数据量；
- 缺点：如果用旧文件覆盖新文件，浏览器不会请求旧文件；
#### Etag
- HTTP协议规格说明定义ETag为“被请求变量的实体值” 。另一种说法是，ETag是一个可以与Web资源关联的记号（token），个人理解就类似个MD5戳；
#### Expires、max-age于Last-Modified/Etag的区别；
- Expires与max-age类似，一旦在符合的时间段内，则不会跟服务器建立连接，直接从电脑缓存中读取（from disk cache），状态码为200;Last-Modified和Etag都是会跟服务器建立连接，相当于一次正常的请求，只是返回的内容为空，并且状态码一般为304；
##### 以上header中的参数，可以通过meta标签在html中配置；也可以在nginx上配置；
#### waiting(FFTB)