
SET NAMES UTF8;

DROP DATABASE IF EXISTS MFW;

CREATE DATABASE MFW CHARSET=UTF8;

USE MFW;

#�û�ע���
CREATE TABLE mfw_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname		VARCHAR(250),   #�˺�����
	upwd		VARCHAR(50),    #�û���
	email		VARCHAR(250),   #�����ַ
	phone		VARCHAR(16) NOT NULL UNIQUE,
	avatar		VARCHAR(128),   #ͷ���ַ
	user_name	VARCHAR(32),    #��ʵ����
	card_id     VARCHAR(20),    #���֤����
	gender		INT,            #�Ա�
	reg_date    date            #ע��ʱ��

);

