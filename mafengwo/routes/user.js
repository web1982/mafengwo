/*1:引入express模块*/
const express = require("express");
/*2:引入数据库连接文件*/
const pool = require("../pool.js");
/*3:创建路由*/
var router = express.Router();

/*5：功能模块*/
    /*1：注册功能模块*/
    router.post('/regs',function(req,res){
        //第8步（获取数据并验证）
        console.log(req.body);
        //验证数据
        if(!req.body.uname){
            res.send({code:401,msg:'uname required'});
            return;
        }
        if(!req.body.upwd){
            res.send({code:402,msg:'upwd required'});
            return;
        }
    /*
        if(!req.body.phone){
            res.send({code:402,msg:'uphone required'});
            return;
        }*/

        pool.query('insert into mfw_user set ?',[req.body],function(err,result){
            if(err) throw err;
            if(result.affectedRows>0){
                res.send({code:200,msg:'register suc'});
                return;
            }
        });

    });

/*4:导出路由器对象*/
    module.exports=router;