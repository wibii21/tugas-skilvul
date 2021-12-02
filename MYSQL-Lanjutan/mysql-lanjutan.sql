--- Create Database ---
create database skilvulbookstore;

--- Use Database ---
use skilvulbookstore;

--- Create Table ---
create table penerbit (id int not null auto_increment primary key,
    -> nama varchar(50),
    -> kota varchar(50) 
    -> );

--- Create Table ---
create table penulis (id int(10) not null auto_increment primary key,
    -> nama varchar(50),
    -> kota varchar(50)
    -> );

--- Create Table ---
create table buku ( id int not null auto_increment, 
    ->     ISBN varchar(50), 
    ->     judul varchar(50), 
    ->     harga int, 
    ->     stock int, 
    ->     penulis int, 
    ->     penerbit int, 
    ->     foreign key (penulis) references penulis(id),  
    ->     foreign key (penerbit) references penerbit(id) ,
    ->     constraint pk_buku primary key (id) );

--- Insert ---
INSERT INTO `penulis` (`id`, `nama`, `kota`) VALUES 
    (NULL, 'babas', 'cikampek'), 
    (NULL, 'wibi', 'purwakarta'),
    (NULL, 'putri', 'depok'),
    (NULL, 'riani', 'kepulaun riau'), 
    (NULL,'diar', 'bogor'), 
    (NULL, 'qimore', 'depok');

---insert ---
INSERT INTO `penerbit` (`id`, `nama`, `kota`) VALUES 
    (NULL, 'riani', 'kepri'), 
    (NULL, 'putri', 'depok'), 
    (NULL, 'bastian', 'bandung'), 
    (NULL, 'dyna', 'pasuruan'),
    (NULL, 'rafly', 'bekasi'),
    (NULL, 'frensi', 'bali'),
    (NULL, 'wibi', 'cikampek'),
    (NULL, 'diar', 'bogor');

--- insert ---
INSERT INTO `buku` (`id`, `ISBN`, `judul`, `harga`, `stock`, `penulis`, `penerbit`) VALUES 
    (NULL, '12', 'atomic habbit', '120000', '50', '6', '8'), 
    (NULL, '21', 'design your life', '39250', '50', '6', '8'), 
    (NULL, '45', '7 habbit', '49250', '50', '6', '8'), 
    (NULL, '97', 'critical eleven', '50250', '40', '6', '8');

--- join ---
SELECT *
FROM buku
INNER JOIN penerbit
ON buku.id = penerbit.id;

--- left ---
SELECT *
FROM buku
LEFT JOIN penerbit
ON buku.id = penerbit.id;

--- right ---
SELECT *
FROM buku
RIGHT JOIN penerbit
ON buku.id = penerbit.id;

--- max ---
SELECT MAX(harga)
FROM buku
WHERE stock < 10;

--- min ---
SELECT MIN(harga)
FROM buku;

--- count ---
SELECT COUNT(harga)
FROM buku
WHERE harga < 10000;