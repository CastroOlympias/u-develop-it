DROP TABLE IF EXISTS candidates;
DROP TABLE IF EXISTS parties;
DROP DATABASE IF EXISTS election;
CREATE DATABASE election;
USE election;

SOURCE db/schema.sql
SOURCE db/seeds.sql