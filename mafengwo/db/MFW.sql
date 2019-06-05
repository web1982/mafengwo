
SET NAMES UTF8;

DROP DATABASE IF EXISTS MFW;

CREATE DATABASE MFW CHARSET=UTF8;

USE MFW;

#用户注册表
CREATE TABLE mfw_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname		VARCHAR(250),   #账号名称
	upwd		VARCHAR(50),    #用户名
	email		VARCHAR(250),   #邮箱地址
	phone		VARCHAR(16) NOT NULL UNIQUE,
	avatar		VARCHAR(128),   #头像地址
	user_name	VARCHAR(32),    #真实姓名
	card_id     VARCHAR(20),    #身份证号码
	gender		INT,            #性别
	reg_date    date            #注册时间

);

