-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 10. 03 2019 kl. 16:40:34
-- Serverversion: 10.1.33-MariaDB
-- PHP-version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_package`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `body_text` text NOT NULL,
  `img` varchar(142) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Data dump for tabellen `articles`
--

INSERT INTO `articles` (`id`, `title`, `body_text`, `img`) VALUES
(1, 'weqwe', 'wqewqeqwe', 'wqeqwe'),
(2, 'qwewqe', 'wqeqwewq', 'wqewqeqwe'),
(3, 'wqwqewqe', 'qweqwewqe', 'wqewqewqe'),
(4, 'wqeqwewq', 'wqeqwe', 'wqewqewqe'),
(5, 'wqeqwe', 'wqewqewq', 'wqewqeqwe'),
(6, 'wqeqwewq', 'ewqewqe', 'wqewqewq');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `testing_10`
--

CREATE TABLE `testing_10` (
  `id` int(11) NOT NULL,
  `column1` varchar(255) DEFAULT NULL,
  `column2` varchar(255) DEFAULT NULL,
  `column3` varchar(255) DEFAULT NULL,
  `column4` varchar(255) DEFAULT NULL,
  `column5` varchar(255) DEFAULT NULL,
  `column6` varchar(255) DEFAULT NULL,
  `column7` varchar(255) DEFAULT NULL,
  `column8` varchar(255) DEFAULT NULL,
  `column9` varchar(255) DEFAULT NULL,
  `column10` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `testing_10`
--
ALTER TABLE `testing_10`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Tilføj AUTO_INCREMENT i tabel `testing_10`
--
ALTER TABLE `testing_10`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
