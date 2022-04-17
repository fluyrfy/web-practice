-- #db.sql 創建表添加數據
-- #學子商城 mintui版本
-- 功能一：創建表xz_login 用戶登錄表
USE xz;
CREATE TABLE xz_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd VARCHAR(32)
);
-- 功能二：添加二條測試數據
INSERT INTO xz_login VALUES(null,'tom',md5('123'));
INSERT INTO xz_login VALUES(null,'jerry',md5('123'));

CREATE TABLE xz_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  lname VARCHAR(50)
);

-- 功能三：向商品表中添加一列 img_url
ALTER TABLE xz_laptop ADD img_url VARCHAR(255);
-- 更新商品表圖片 01.jpg 02.jpg
UPDATE xz_laptop SET img_url='01.jpg'
WHERE lid = 1;
UPDATE xz_laptop SET img_url='02.jpg'
WHERE lid = 2;

ALTER TABLE xz_laptop ADD price INT(10);
UPDATE xz_laptop SET price=28000 WHERE lid = 1;
UPDATE xz_laptop SET price=38000 WHERE lid = 2;

SELECT lid,lname,price,img_url FROM xz_laptop;

INSERT INTO xz_laptop VALUES(null,'asus','02.jpg',38000);

ALTER TABLE xz_laptop modify column price VARCHAR(10);

--創建購物車表
--高精度浮點數
CREATE TABLE xz_cart(
  id INT PRIMARY KEY  AUTO_INCREMENT,
  lid INT,
  price DECIMAL(10,2),
  count INT,
  lname VARCHAR(255),
  uid INT
);


