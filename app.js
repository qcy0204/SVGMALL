const express=require('express');
const userROws=require('./routes/user.js');

//引入body-parser
const bodyParser=require('body-parser');
var app=express();
//监听端口
app.listen(3366);
//把静态资源托管到public目录下
app.use(express.static('public'));

//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false  //不使用第三方的qs模块，而是使用核心模块querystring来解析查询的字符串为对象
}));

app.use('/user',userROws);
