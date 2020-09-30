create database avengers_academy;
use avengers_academy;

create user avengers_app@localhost IDENTIFIED WITH mysql_native_password BY '123456789';
grant usage on *.* to avengers_app@localhost;
grant all privileges on avengers_academy.* to avengers_app@localhost;
grant SELECT, UPDATE ,delete, insert, create, drop on *.* to avengers_app@localhost;


create table authentication(
id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
username varchar(255) not null,
userpassword text not null,
userlevel varchar(100) default 'OPERATOR'
);

insert into authentication(username,userpassword,userlevel) values ('admin','admin','ADMIN');

create table avengers(
id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
codename varchar(255) not null,
arank char(1) DEFAULT 'C',
latitude text NOT NULL,
longitude text NOT NULL,
status varchar(100) NOT NULL
);

insert into avengers(codename,arank,latitude,longitude,status) values('Miss Marvel','B','-315613','-612365','AVAILABLE');
