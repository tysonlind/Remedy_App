CREATE DATABASE  IF NOT EXISTS `homeopathicdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `homeopathicdb`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: homeopathicdb
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `approvals`
--

DROP TABLE IF EXISTS `approvals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `approvals` (
  `remedies_id` varchar(100) DEFAULT NULL,
  `Name` varchar(100) NOT NULL,
  `AffectedOrgans` varchar(100) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `AddedBy` varchar(45) DEFAULT NULL,
  `Uses` varchar(100) NOT NULL,
  `Dosage` varchar(45) NOT NULL,
  `isApproved` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `productImg` blob,
  `productRating` int DEFAULT NULL,
  `totalRatings` int DEFAULT NULL,
  `remedyLikes` int DEFAULT NULL,
  `remedyDislikes` int DEFAULT NULL,
  `price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `approvals`
--

LOCK TABLES `approvals` WRITE;
/*!40000 ALTER TABLE `approvals` DISABLE KEYS */;
INSERT INTO `approvals` VALUES ('3d576d92-301b-b9e9-93c6-7677806f98e8','test5','test5','test5','test user','test5','test5','0',NULL,NULL,NULL,NULL,NULL,NULL),('5e4ab147-4a0d-1c47-ccae-2282497f0648','test19','test19','test19','test user','test19','test19','0',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `approvals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `postId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `likeUserid_idx` (`userId`),
  KEY `likePostId_idx` (`postId`),
  CONSTRAINT `likePostId` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likeUserid` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (7,2,7),(8,2,9),(9,2,8),(32,4,9),(33,4,8),(34,4,7),(36,2,14),(37,2,13),(38,4,13),(40,4,17),(44,2,24),(45,4,19);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `userId` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'test2',NULL,1,NULL),(3,'test3',NULL,1,NULL),(7,'test','',2,'2023-03-02 10:35:18'),(8,'This is a test','',2,'2023-03-02 17:55:54'),(9,'This is another test','',2,'2023-03-02 17:56:03'),(13,'This comment','',4,'2023-03-03 19:07:54'),(14,'Hello!','',4,'2023-03-03 19:17:57'),(16,'This post','',4,'2023-03-04 11:02:23'),(17,'hello','',4,'2023-03-04 11:03:08'),(18,'hola desde alejandro','',4,'2023-03-06 07:22:43'),(19,'hola','',4,'2023-03-08 07:46:06'),(24,'Hello there!','',2,'2023-03-29 16:09:19'),(25,'relationship test','',3,'2023-04-03 12:20:05');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `remedies`
--

DROP TABLE IF EXISTS `remedies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `remedies` (
  `remedies_id` varchar(100) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `AffectedOrgans` varchar(100) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `AddedBy` varchar(45) DEFAULT 'test user',
  `Uses` varchar(100) NOT NULL,
  `Dosage` varchar(45) NOT NULL,
  `isApproved` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '1',
  `productImg` blob,
  `productRating` int DEFAULT NULL,
  `totalRatings` int DEFAULT NULL,
  `remedyLikes` int DEFAULT NULL,
  `remedyDislikes` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`remedies_id`),
  UNIQUE KEY `Name_UNIQUE` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='list of remedies and the organs they affect';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remedies`
--

LOCK TABLES `remedies` WRITE;
/*!40000 ALTER TABLE `remedies` DISABLE KEYS */;
INSERT INTO `remedies` VALUES ('','','','','test user','','','',NULL,NULL,NULL,NULL,NULL,NULL),('26','ginger tea','intestines',' youll feel better Im sure you will','test user','upset stomach','1 cup','1',NULL,NULL,NULL,NULL,NULL,NULL),('27','eye of newt','liver','it will fix ye for sure','test user','the black plague','2 drops','1',NULL,NULL,NULL,NULL,NULL,NULL),('29','elixir of life','lymphnodes','it is magic','test user','save yo life','2 drops','1',NULL,NULL,NULL,NULL,NULL,NULL),('3','Yarrow','brain','useful for doing stuff','test user','problems','1 drop/5 lbs','1',NULL,NULL,NULL,NULL,NULL,NULL),('37','Way to solve Confusion','brain','Really awesome solution to your confusion problems. Presto, Fantastico.','test user','Anytime you\'re confused','daily application','1',NULL,NULL,NULL,NULL,NULL,NULL),('8d04cc52-8c91-02cb-9eb6-7177cd8fbd07','OC Tanner Elixir of Coding','Brain','This is a new remedy item.','admin','Updating the LIDS system','once per day','1',NULL,NULL,NULL,NULL,NULL,NULL),('a8384258-fce1-b2e1-3a36-942d04140b41','test7','test7','test7','admin','test7','test7','1',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `remedies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(45) NOT NULL,
  `coverPic` varchar(300) DEFAULT NULL,
  `profilePic` varchar(300) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test@gmail.com','$2a$10$JUWOLUYl8.4gPpJ85J6WNuFVFou.VLweBOCntgcz21mqBnvHo.eSa','John Doe',NULL,NULL,NULL,NULL),(2,'test2','test2@gmail.com','$2a$10$bl2W3Z3n6c4IzVzT73kTiOfmD3ACOSgaTLV.8XbLwjhtM0yUKW7xq','Test2',NULL,NULL,NULL,NULL),(3,'test3','test3@gmail.com','$2a$10$ynknwoOkyl1RNNjFyZ5AwupuUCITinE5OQWa/FKeHoazFeldsBP..','Jane Doe',NULL,NULL,NULL,NULL),(4,'alejandro','adighiero1@gmail.com','$2a$10$5bOUFNv3QSI9ppCm1gmnGukQcM3BPmjEGZZBKnhaBxREwXgBtmSjq','Alejandro','1680538253568matar.jpg','1680538253556download.jpg','Brasil','InstaBook');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-27 21:56:19
