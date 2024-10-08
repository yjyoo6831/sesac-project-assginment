show databases;

show tables;

drop table if exists todo;

create table TODO(
	id INT not null primary key auto_increment,
    title varchar(100) not null ,
    done BOOLEAN not null default false
);


desc todo;

insert into todo VALUES (null,'my todo1',0);
insert into todo VALUES (null,'my todo2',0);
insert into todo VALUES (null,'my todo3',1);
insert into todo VALUES (null,'my todo4',0);
insert into todo VALUES (null,'my todo5',1);
insert into todo VALUES (null,'my todo6',1);

update todo set title="할일 2번" where id=2;
delete from todo where id=3;
select * from todo order by id desc;

select * from mysql.user;

-- user 생성
create user 'user'@'%' identified by '1234'; 

create user 'user'@'%' identified with mysql_native_password by '1234'; 

-- 권한 부여 
grant all privileges on *.* to 'user'@'%' with grant option;

-- 캐시삭제 
flush privileges;
