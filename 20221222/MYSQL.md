# DB

단순하게 데이터를 저장하는 공간

## RDBMS

Relational Data Base Management System

관계형 데이터베이스 대표적인 프로그램
Oracle
Mysql
MariaDB
PostgreSQL
Mssql

비 관계형 데이터베이스
MongoDB

## DBMS

Data Base Management System

## SQL

Structured Query Language
DBMS에서 구현된 기능을 실행시키기 위한 특정한 언어이다.
데이터를 보관, 저장, 삭제, 수정등에 사용

`NO SQL vs SQL` 구분이 됨 sql을 사용하는게 근본적인것

sql 분류

ddl 데이터 정의어
dml 데이터 조작어
dcl 데이터 제어어

데이터 정의어
CREATE
SHOW
DROP
ALTER

데이터 조작어

SELECT
INSERT
UPDATE
DELETE

데이터 제어어

GRANT
REVOKE

SHOW DATABASES; S붙여야한다

CREATE DATABASE 폴더명;

CREATE DATABASE cheol DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CHARACTER SET utf8mb4
글자셋을 utf8로 설정하고 이모지까지 입력 할 수 있게 되는것

모든 데이터는 엑셀식으로 저장이 된다.(TABLE 형식)
중복값이 많은 형태는 좋은 테이블 형태는 아니다.

CREATE TABLE store(
category VARCHAR(50),
store_name VARCHAR(50),
menu_name VARCHAR(50),
price VARCHAR(50),
tel VARCHAR(50),
address VARCHAR(50)
);

마지막줄 ,붙여도 오류 . , 붙여도 오류

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ')' at line 8

line 8번째의 ")" 근처에서 문법이 오류난것

중요한 정보를 하나 가지고 있어야한다. 필드가 있어야한다.(어떤 데이터를 저장할지 값) no hangle

ALTER TABLE store RENAME TO store2;

mysql> DESC store;

+------------+-------------+------+-----+---------+-------+
| Field | Type | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| category | varchar(50) | YES | | NULL | |
| store_name | varchar(50) | YES | | NULL | |
| menu_name | varchar(50) | YES | | NULL | |
| price | varchar(50) | YES | | NULL | |
| tel | varchar(50) | YES | | NULL | |
| address | varchar(50) | YES | | NULL | |
+------------+-------------+------+-----+---------+-------+

varchar > string type 바꿔주는것

# Field type

숫자형, 문자형,날짜형,이진데이터타입(Buffer같은것)

숫자형

INT 가장 많이쓴다
INT: 4byte -21억 ~ 21억

문자형

CHAR: 255byte 고정 데이터
VARCHAR: 255byte (대부분이정도 저장) 가변데이터
TEXT : 65535byte

고정데이터 >> 성별 처럼 남자,여자 등 2글자로 확정된 데이터
가변데이터 >> 그외 거의 모든것

날짜형
DATE : 년월일 처음부터 이걸 쓰게 되면 나중에 시간을 표현 할 때 표현 할 수 없다. 이미 데이터 원본이 저장되는 형식이 년월일만 저장되었기 때문에
TIME : 시간
DATETIME : 년월일 시간 (yyyy-mm-dd hh:MM:ss) 8byte 용량은 크지만 다 표현 가능
TIMESTAMP : 년월일 시간 1900년부터의 시간을 초로 표현 4byte 용량은 적지만 다 표현 가능
YEAR

이진 데이터 타입
BLOB : 이미지 (DB에서 이미지 파일을 저장하는 일이 거의 없다.)

KEY

PRIMARY KEY : 중복 입력 불가 null X, 테이블당 하나만 넣을 수 있음
UNIQUE : 중복 입력 불가 null 한번정도는 됨 , 여러개 넣을 수 있음

AUTO_INCREMENT 자동으로 1 2 3 4 5 6 7 등등을 생성 1씩 자동생성
PRIMARY KEY 같이 걸어두면 절대 중복되지 않음

user

CREATE TABLE user(
user_id VARCHAR(50) PRIMARY KEY,
user_pw VARCHAR(50) NOT NULL,
user_name VARCHAR(50) NOT NULL,
gender CHAR(4) DEFAULT "남자",
register_data DATETIME DEFAULT now()
);

객체형태를 만든것과 비슷하다.

# insert

INSERT INTO [테이블명](필드명들) values(입력값들);

INSERT INTO user(user_id, user_pw, user_name, gender) values('web7722','1234','박경철','남자');

SELECT 필드명들, FROM 어디꺼

SELECT user_id, user_pw, user_name, gender FROM user;

mysql> SELECT 뱔 FROM user; 모든 필드를 볼 수 있는것 `별` = 모든것

where 절

SELECT \* FROM user WHERE user_id='admin';

# update

UPDATE user SET gender='여자' WHERE user_id='admin';
UPDATE user SET user_pw='0000', user_name='슈퍼관리자', gender='남자' WHERE user_id='admin';
변경

# DELETE

DELETE FROM user WHERE user_id='admin';
삭제

# 연습

게시판 테이블 만들기

CREATE TABLE board(
idx int(11) AUTO_INCREMENT PRIMARY KEY,
subject VARCHAR(100) NOT NULL,
content TEXT NULL,
writer VARCHAR(50) NOT NULL,
register_date DATETIME NOT NULL DEFAULT now(),
hit int(11) DEFAULT 0
);

mysqldump -uroot -p cheol > backup.sql
계정명 db명 >

npm install mysql << musql 을 연결 할 수 있는 드라이브

서버 한 페이지를 만드는 실행순서
server > router > controllers > services > repository

server > 로직을 처리하는 부분
router > 요청 응답만 하는 친구
