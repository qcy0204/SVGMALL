const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//注册路由
router.post('/reg',(req,res)=>{
    var obj=req.body;
    console.log(obj);
    for(var key in obj){
       if(!obj[key]){
           res.send({code:400,msg:"can not be blank"})
       }
    }
pool.query('insert into watch_user set ?',[obj],(err,result)=>{
   if(err) throw err;
 		//console.log(result);
 		//如果数据插入成功
 		if(result.affectedRows>0){
 			res.send({cood:200,msg:'插入成功'});
 		}
 	});
});

//登录路由
router.post('/login',(req,res)=>{
   var obj=req.body;
   if(!obj.uname){
        res.send({code:400,msg:"name can not be blank"});
        return;
   }
   if(!obj.upwd){
        res.send({code:400,msg:"password can not be blank"});
        return;
   }
   pool.query('select * from  watch_user where uname=? and upwd=?',[obj.uname,obj.upwd],(err,result)=>{
       if(err) throw err;
       if(result.length>0){
           res.send({code:200,msg:'登陆成功'})
       }else{
           res.send({code:400,msg:'登陆失败'})
       }
   })
})




//导出路由对象
module.exports=router;