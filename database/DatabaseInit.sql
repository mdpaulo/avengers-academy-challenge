--Run ApplicationUser.sql before running this script
create database avengers_academy owner avengers_group;

create table authentication(
id bigserial NOT NULL PRIMARY KEY,
username varchar(255) not null,
userpassword text not null,
userlevel varchar(100) default 'OPERATOR'
);

insert into authentication(username,userpassword) values ('admin','admin');

create table hero(
id bigserial NOT NULL PRIMARY KEY,
"name" varchar(255) not null,
"rank"
),