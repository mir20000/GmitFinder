-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2021 at 07:05 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gmit_react`
--

-- --------------------------------------------------------

--
-- Table structure for table `login_cred`
--

CREATE TABLE `login_cred` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `user_type` text NOT NULL,
  `email` text NOT NULL,
  `phone` text NOT NULL,
  `password` text NOT NULL,
  `gender` text NOT NULL,
  `date_of_birth` text NOT NULL,
  `github` text NOT NULL,
  `linkedin` text NOT NULL,
  `father_name` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login_cred`
--

INSERT INTO `login_cred` (`id`, `name`, `user_type`, `email`, `phone`, `password`, `gender`, `date_of_birth`, `github`, `linkedin`, `father_name`, `address`) VALUES
(1, 'Mir Ijazur Rahaman', 'Student', 'ijazur38@gmail.com', '06291776305', '3138f2c3f365b1990e2e621dce05ebdf', 'Male', '2021-06-25', '', '', '', ''),
(2, 'Mir Ijazur Rahaman', 'Student', 'ijazur@gmail.com', '06291776305', '723d6d45e3d4871bcbb963e5e8fa148f', 'Female', '2000-02-12', '', '', '', ''),
(8, 'Mir Ijazur Rahaman', 'HR', 'ijaz@gmail.com', '06291776305', '723d6d45e3d4871bcbb963e5e8fa148f', 'Male', '2000-04-05', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login_cred`
--
ALTER TABLE `login_cred`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login_cred`
--
ALTER TABLE `login_cred`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
