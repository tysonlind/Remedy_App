CREATE DATABASE  IF NOT EXISTS `homeopathicdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `homeopathicdb`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: homeopathicdb
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `remedies`
--

DROP TABLE IF EXISTS `remedies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `remedies` (
  `remedies_id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `AffectedOrgans` varchar(100) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `AddedBy` varchar(45) DEFAULT NULL,
  `Uses` varchar(100) NOT NULL,
  `Dosage` varchar(45) NOT NULL,
  PRIMARY KEY (`remedies_id`),
  UNIQUE KEY `Name_UNIQUE` (`Name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='list of remedies and the organs they affect';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remedies`
--

LOCK TABLES `remedies` WRITE;
/*!40000 ALTER TABLE `remedies` DISABLE KEYS */;
INSERT INTO `remedies` VALUES (1,'test','brain','testing1','test user','sprinkle','back to 0.75mg/lb'),(3,'Yarrow','brain','useful for doing stuff','test user','problems','1 drop/5 lbs'),(6,'Carrow','postman','postman','test user','postman','postman'),(7,'undefined','undefined','undefined','test user','undefined','undefined'),(13,'Plarrow','Narrow','Kaching','test user','dasdfewasdf','Garrow'),(22,'Making a thing for testing','brain','lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, lorem ipsum datum to the moon, ','test user','Making a use case','a dosage'),(23,'Event','brain','testing event firing','test user','firing','0.5mg/lb'),(25,'Lemon Ginger Tea','GITract','Will help with an upset stomach and the digestion process','test user','Upset stomach','1 cup'),(26,'ginger tea','intestines',' youll feel better Im sure you will','test user','upset stomach','1 cup'),(27,'eye of newt','liver','it will fix ye for sure','test user','the black plague','2 drops'),(28,'test remedy','heart','works like a charm','test user','broken heart','1 drop'),(29,'elixir of life','lymphnodes','it is magic','test user','save yo life','2 drops');
/*!40000 ALTER TABLE `remedies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 11:43:46
