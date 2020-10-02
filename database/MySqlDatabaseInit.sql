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

insert into avengers(codename,arank,latitude,longitude,status) values('Goku','S','50.455738355108','-20.80019452816703','AVAILABLE');
insert into avengers(codename,arank,latitude,longitude,status) values('Luffy','S','69.455738355108','-10.80065452965403','AVAILABLE');
insert into avengers(codename,arank,latitude,longitude,status) values('Doutor Estranho','S','10.455738355108','-50.80035462816703','AVAILABLE');
insert into avengers(codename,arank,latitude,longitude,status) values('Batman','A','09.498752455208','-90.12310162895103','AVAILABLE');
insert into avengers(codename,arank,latitude,longitude,status) values('Wolverine','A','30.411738355208','-11.79410162816703','AVAILABLE');
insert into avengers(codename,arank,latitude,longitude,status) values('Deadpool','B','-48.30082981543115','160.27333565349713','AVAILABLE');
insert into avengers(codename,arank,latitude,longitude,status) values('Falcão','C','-22.42045526449409','102.42962452766108','AVAILABLE');
insert into avengers(codename,arank,latitude,longitude,status) values('Gavião Arqueiro','C','-22.42045526449409','102.42962452766108','AVAILABLE');


create table occurrence(
id bigint NOT NULL PRIMARY KEY AUTO_INCREMENT,
latitude text NOT NULL,
longitude text NOT NULL,
dangerlevel varchar(100) NOT NULL,
monstername text NOT NULL,
status varchar(100) default 'ASSAULT',
creationdate timestamp default current_timestamp
);

