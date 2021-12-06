--Create Database--
create database skilvul_music_streaming;

--Use Database--
use skilvul_music_streaming;

--Create table--
create table user (
    user_id int not null primary key auto_increment,
    name varchar(30),
    email varchar(30),
    password varchar(30)
);

--Create table--
create table singer (
    singer_id int not null primary key auto_increment,
    name varchar(30)
);

--Create table--
create table album (
    album_id int not null primary key auto_increment,
    name varchar(30)
);

--Create table--
create table album (
    album_id int not null primary key auto_increment,
    singer_id int not null,
    constrain fk_track_singer_singer_id
    foreign key(singer_id)
    references singer(singer_id),
);

--Create table--
create table playlist (
  playlist_id int not null primary key auto_increment,
    user_id int not null,
    name varchar(30),
    constrain fk_playlist_user_user_id
    foreign key(user_id)
    references user(user_id),   
)
--Create table--
create table track (
    track_id int not null primary key auto_increment,
    title varchar(30),
    singer_id int not null,
    album_id int not null,
    constrain fk_track_singer_singer_id
    foreign key(singer_id)
    references singer(singer_id),
    constrain fk_track_album_album_id
    foreign key(album_id)
    references album(album_id),
);

--Create table conjunction--
create table playlist_track(
   playlist_id int not null,
   track_id int not null,
   constrain fk_playlist_id_Reff 
   foreign key(playlist_id)
   references playlist(playlist_id),
   constrain fk_track_id_reff
   foreign key(track_id)
   references track(track_id)
);

--Show table--
show tables;