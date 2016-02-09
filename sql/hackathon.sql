CREATE DATABASE  IF NOT EXISTS `hackathon` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `hackathon`;
-- MySQL dump 10.13  Distrib 5.5.46, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: hackathon
-- ------------------------------------------------------
-- Server version	5.5.46-0ubuntu0.14.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Customer`
--

DROP TABLE IF EXISTS `Customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Customer` (
  `CustomerId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `EmailId` varchar(100) DEFAULT NULL,
  `Postcode` varchar(10) DEFAULT NULL,
  `Plan` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`CustomerId`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Customer`
--

LOCK TABLES `Customer` WRITE;
/*!40000 ALTER TABLE `Customer` DISABLE KEYS */;
INSERT INTO `Customer` VALUES (1,'Martin Roy','martin@gmail.com','3000','R-1'),(2,'Albert Lusi','albert@gmail.com','2000','R-2'),(11,'John Smith','john@gmail.com','3001','C-1'),(12,'Marry Com','marry.c@gmail.com','2001','C-2'),(13,'Jane Doe','jane@gmail.com','',''),(52,'namrata','namrata@gmail.com',NULL,NULL),(53,'reshma','reshma@gmail.com',NULL,NULL),(55,'Edmund Jackd','edmundj234@gmail.com',NULL,NULL),(59,'Edmund Jackson','edmund234@gmail.com',NULL,NULL);
/*!40000 ALTER TABLE `Customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Doctor`
--

DROP TABLE IF EXISTS `Doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Doctor` (
  `DoctorId` int(11) NOT NULL AUTO_INCREMENT,
  `DoctorName` varchar(45) DEFAULT NULL,
  `DoctorEmail` varchar(100) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`DoctorId`),
  UNIQUE KEY `DoctorEmail_UNIQUE` (`DoctorEmail`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Doctor`
--

LOCK TABLES `Doctor` WRITE;
/*!40000 ALTER TABLE `Doctor` DISABLE KEYS */;
INSERT INTO `Doctor` VALUES (1,'Harry','harry@gmail.com','harry'),(2,'Ethan','ethan@gmail.com','ethan'),(3,'Ryan','ryan@gmail.com','ryan'),(4,'Josh','josh@gmail.com','josh');
/*!40000 ALTER TABLE `Doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EnergyUsage`
--

DROP TABLE IF EXISTS `EnergyUsage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EnergyUsage` (
  `UsageId` int(11) NOT NULL AUTO_INCREMENT,
  `CustomerId` int(11) DEFAULT NULL,
  `Month` date DEFAULT NULL,
  `Usage` decimal(10,2) DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`UsageId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EnergyUsage`
--

LOCK TABLES `EnergyUsage` WRITE;
/*!40000 ALTER TABLE `EnergyUsage` DISABLE KEYS */;
INSERT INTO `EnergyUsage` VALUES (1,1,'2015-09-01',200.00,80.00),(2,1,'2015-10-01',220.00,89.50),(3,1,'2015-11-01',200.00,80.00),(4,2,'2015-10-01',300.00,95.00),(5,2,'2015-11-01',250.00,90.00),(6,11,'2015-10-01',602.00,192.00),(7,11,'2015-11-01',600.00,190.00),(8,12,'2015-10-01',900.00,285.00),(9,12,'2015-11-01',600.00,190.00);
/*!40000 ALTER TABLE `EnergyUsage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Requests`
--

DROP TABLE IF EXISTS `Requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Requests` (
  `RequestId` int(11) NOT NULL AUTO_INCREMENT,
  `EmailId` varchar(100) NOT NULL,
  `MeetingURL` varchar(45) DEFAULT NULL,
  `isServiced` int(11) DEFAULT '0',
  `DoctorEmail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RequestId`)
) ENGINE=InnoDB AUTO_INCREMENT=283 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Requests`
--

LOCK TABLES `Requests` WRITE;
/*!40000 ALTER TABLE `Requests` DISABLE KEYS */;
INSERT INTO `Requests` VALUES (1,'martin@gmail.com','https://sandbox.moxtra.com/170147814',1,NULL),(3,'albert@gmail.com','https://sandbox.moxtra.com/962697853',1,NULL),(4,'martin@gmail.com','http://moxtra/66637',1,NULL),(267,'edmund234@gmail.com','https://sandbox.moxtra.com/957514246',1,'ethan@gmail.com'),(268,'edmund234@gmail.com','https://sandbox.moxtra.com/152407543',1,'ethan@gmail.com'),(269,'edmund234@gmail.com','https://sandbox.moxtra.com/278347354',1,'ethan@gmail.com'),(276,'edmund234@gmail.com','http://moxtra/666377',1,'ethan@gmail.com'),(277,'edmund234@gmail.com',NULL,0,'ryan@gmail.com'),(278,'edmund234@gmail.com',NULL,0,'josh@gmail.com'),(279,'edmund234@gmail.com','https://sandbox.moxtra.com/522920773',1,'ethan@gmail.com'),(280,'edmund234@gmail.com','https://sandbox.moxtra.com/725838349',1,'ethan@gmail.com'),(281,'edmund234@gmail.com','https://sandbox.moxtra.com/837474374',1,'ethan@gmail.com'),(282,'edmund234@gmail.com','https://sandbox.moxtra.com/456533759',1,'ethan@gmail.com');
/*!40000 ALTER TABLE `Requests` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-09  9:51:55
