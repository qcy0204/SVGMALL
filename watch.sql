set names utf8;
drop database if exists watch;
create database watch charset=utf8;
use watch;
create table watch_user(
  uid int primary key  auto_increment,
  uname varchar(32),
  upwd varchar(32),
  email varchar(50),
  phone int,
  avatar varchar(128),
  user_name varchar(32),
  gender bool
);
insert into watch_user values(1,'qcy','362034','15544315559@163.com',15544315559,'','邱超越',true);