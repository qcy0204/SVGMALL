const express=require('express');
//引入body-parser
const bodyParser=require('body-parser');

var app=express();
//监听端口
app.listen(3366);
//把静态资源托管到public目录下
app.use(express.static('public'));

//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));

//