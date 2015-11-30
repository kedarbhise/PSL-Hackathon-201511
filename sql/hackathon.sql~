CREATE DATABASE `hackathon` /*!40100 DEFAULT CHARACTER SET latin1 */;
CREATE TABLE `Customer` (
  `CustomerId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `EmailId` varchar(100) DEFAULT NULL,
  `Postcode` varchar(10) DEFAULT NULL,
  `Plan` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`CustomerId`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
CREATE TABLE `EnergyUsage` (
  `UsageId` int(11) NOT NULL AUTO_INCREMENT,
  `CustomerId` int(11) DEFAULT NULL,
  `Month` date DEFAULT NULL,
  `Usage` decimal(10,2) DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`UsageId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
CREATE TABLE `Requests` (
  `RequestId` int(11) NOT NULL AUTO_INCREMENT,
  `EmailId` varchar(100) NOT NULL,
  `MeetingURL` varchar(45) DEFAULT NULL,
  `isServiced` int(11) DEFAULT '0',
  PRIMARY KEY (`RequestId`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;

