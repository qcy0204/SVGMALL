const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//注册路由
router.post('/reg',(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
	var $uemail=req.body.email;
 pool.query('insert into watch_user set uname=?,upwd=?,email=?',[$uname,$upwd,$uemail],(err,result)=>{
	  if(err) throw err;
 	
	  if(result.affectedRows>0){
 	  res.send("注册成功,请返回登录页面");
 	  }
    });
});

router.get("/regname/:uname",(req,res)=>{
	var $uname=req.params.uname;
	pool.query(`select * from watch_user where uname=?`,[$uname],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send("1")
		}else{
			res.send("0")
		}
	})
});

//登录路由
router.post('/login',(req,res)=>{
//  var uname=req.body;
//   if(!obj.uname){
//        res.send({code:400,msg:"name can not be blank"});
//        return;
//   }
//   if(!obj.upwd){
//        res.send({code:400,msg:"password can not be blank"});
//        return;
//   }
    var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	
	if(!$uname){
		res.send("用户不能为空");
		return;
	}
	if(!$upwd){
		res.send("密码不能为空");
		return;
	}
   pool.query('select * from  watch_user where uname=? and upwd=?',[$uname,$upwd],(err,result)=>{
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