-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE bookstore1;

-- Use Database --
USE bookstore1;

-- Show Table --
SHOW tables;

-- Create Table --
create table books ( id int auto_increment primary key, 
author1 varchar(100) not null, 
author2 varchar(100), 
author3 varchar(100), 
title varchar(100), 
description varchar(100), 
place_sell varchar(3), 
stock int default 0, 
creation_date datetime  default  current_timestamp  on update current_timestamp );

-- Update Table --
Alter table books 
add price int default 0,
status enum('available','out of stock','limited');

-- Delete Table --
alter table books drop place_sell;

-- Insert Table --
insert into books(author1, author2, author3, title, description, stock, creation_date, price, status) values('rani','rei','rio','kancil','buku anak anak',10,'2000/01/01 15:18:45',20000,'limited'),
 ('dani','dei','dio','buaya','buku pokoknya',10,'2010/01/01 15:18:58',22000,'limited'),
('tani','tei','tio','cicak','buku bukuana',10,'2018/04/01 15:18:50',52000,'limited');

-- Select Table --
select * from books;

-- Alias --
SELECT id as ID, author1 as A1, author2 as A2, author3 as A3
FROM books;

-- Select Where --
select * from books where ID = 1;

-- Operator AND --
select * from books where ID = 1 and author1 = 'rani' ;

-- Operator OR --
select * from books where ID = 1 or author2 = 'rei' ;

-- Operator NOT --
select * from books where not ID = 1; 

--- Order By ---
select * from books order by id asc;

--- Limit ---
select * from books
    -> limit 2;

--- Update ---
update books
set author1 = 'erfan', price =10500
where id = 1;

--- Delete Row ---
delete from books where id = 2;