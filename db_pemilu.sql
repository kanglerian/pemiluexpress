-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 03, 2022 at 03:51 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pemilu`
--

-- --------------------------------------------------------

--
-- Table structure for table `paslon`
--

CREATE TABLE `paslon` (
  `id` int(11) NOT NULL,
  `no_urut` int(11) DEFAULT NULL,
  `ketua_id` int(11) DEFAULT NULL,
  `wakil_id` int(11) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `video` text DEFAULT NULL,
  `visi` text DEFAULT NULL,
  `misi` text DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paslon`
--

INSERT INTO `paslon` (`id`, `no_urut`, `ketua_id`, `wakil_id`, `image`, `video`, `visi`, `misi`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 2, 'http://kpu.politekniklp3i-tasikmalaya.ac.id/assets/img/1655259857683.JPG', '', 'Menjadikan BEM Politeknik LP3I Kampus Tasikmalaya yang memiliki pengaruh Social, Budaya dan Pendidikan di tingkat Kota Tasikmalaya dan Priangan Timur dengan berlandaskan iman, takwa dan budi luhur', 'Menjadikan BEM Politeknik LP3I Kampus Tasikmalaya yang memiliki pengaruh Social, Budaya dan Pendidikan di tingkat Kota Tasikmalaya dan Priangan Timur dengan berlandaskan iman, takwa dan budi luhur', '2022-07-03', '2022-07-03'),
(2, 2, 3, 4, 'http://kpu.politekniklp3i-tasikmalaya.ac.id/assets/img/1655259879451.JPG', '', 'Mencipatakan BEM yang berperan aktif dalam pengembangan minat dan bakat bagi seluruh mahasiswa\r\n', 'Mencipatakan BEM yang berperan aktif dalam pengembangan minat dan bakat bagi seluruh mahasiswa\r\n', '2022-07-03', '2022-07-03'),
(3, 3, 5, 6, 'http://kpu.politekniklp3i-tasikmalaya.ac.id/assets/img/1655260054469.JPG', '', 'Mewujudkan BEM sebagai wadah sekaligus penggerak dan pelaksana aspirasi mahasiswa yang relevan bagi mahasiswa dan kampus, Juga menciptakan BEM sebagai organisasi yang aktif diinternal maupun dieksternal.\r\n', 'Mewujudkan BEM sebagai wadah sekaligus penggerak dan pelaksana aspirasi mahasiswa yang relevan bagi mahasiswa dan kampus, Juga menciptakan BEM sebagai organisasi yang aktif diinternal maupun dieksternal.\r\n', '2022-07-03', '2022-07-03');

-- --------------------------------------------------------

--
-- Table structure for table `pemilih`
--

CREATE TABLE `pemilih` (
  `id` int(11) NOT NULL,
  `no_identitas` varchar(255) DEFAULT NULL,
  `nama_lengkap` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pemilih`
--

INSERT INTO `pemilih` (`id`, `no_identitas`, `nama_lengkap`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, '201702102', 'Lerian Febriana, A.Md.Kom', 'kanglerian', 1, '2022-07-03', '2022-07-03'),
(2, '201702103', 'Sopyan Sauri, A.Md.Kom', 'sopyan', 2, '2022-07-03', '2022-07-03');

-- --------------------------------------------------------

--
-- Table structure for table `pemilihan`
--

CREATE TABLE `pemilihan` (
  `id` int(11) NOT NULL,
  `pemilih_id` int(11) DEFAULT NULL,
  `paslon_id` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pemilihan`
--

INSERT INTO `pemilihan` (`id`, `pemilih_id`, `paslon_id`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2022-07-03', '2022-07-03'),
(2, 1, 1, '2022-07-03', '2022-07-03'),
(3, 1, 1, '2022-07-03', '2022-07-03'),
(4, 1, 2, '2022-07-03', '2022-07-03'),
(5, 1, 2, '2022-07-03', '2022-07-03'),
(6, 1, 3, '2022-07-03', '2022-07-03');

-- --------------------------------------------------------

--
-- Table structure for table `peserta`
--

CREATE TABLE `peserta` (
  `id` int(11) NOT NULL,
  `nim` varchar(255) DEFAULT NULL,
  `nama_lengkap` varchar(255) DEFAULT NULL,
  `kelas` varchar(255) DEFAULT NULL,
  `prodi_id` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `peserta`
--

INSERT INTO `peserta` (`id`, `nim`, `nama_lengkap`, `kelas`, `prodi_id`, `created_at`, `updated_at`) VALUES
(1, '20220101', 'Muhammad Andrean Maulana', 'TO21', 1, '2022-07-03', '2022-07-03'),
(2, '20220102', 'Agus Setiawan', 'MKP02B', 3, '2022-07-03', '2022-07-03'),
(3, '20220103', 'Tria Monita Putri', 'MKP02A', 3, '2022-07-03', '2022-07-03'),
(4, '20220104', 'Rahma Sabha Fikriyati Fauzi', 'MP02', 4, '2022-07-03', '2022-07-03'),
(5, '20220105', 'Firada Tahta Winata', 'MI21A', 2, '2022-07-03', '2022-07-03'),
(6, '20220106', 'Asep Yoga Firmansyah', 'MI21A', 2, '2022-07-03', '2022-07-03');

-- --------------------------------------------------------

--
-- Table structure for table `prodi`
--

CREATE TABLE `prodi` (
  `id` int(11) NOT NULL,
  `nama_prodi` varchar(255) DEFAULT NULL,
  `kaprodi` varchar(255) DEFAULT NULL,
  `fakultas` varchar(255) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prodi`
--

INSERT INTO `prodi` (`id`, `nama_prodi`, `kaprodi`, `fakultas`, `created_at`, `updated_at`) VALUES
(1, 'Teknik Otomotif', 'Yovi Fernando, S.T', 'Fakultas Sains & Teknologi', '2022-07-03', '2022-07-03'),
(2, 'Manajemen Informatika', 'Muhammad Farihin, S.T', 'Fakultas Sains & Teknologi', '2022-07-03', '2022-07-03'),
(3, 'Manajemen Keuangan Perbankan', 'Adzka Rosa Sanjayana, M.Ak', 'Fakultas Ekonomi', '2022-07-03', '2022-07-03'),
(4, 'Manajemen Pemasaran', 'Ernawati, M.Pd., MM', 'Fakultas Ekonomi', '2022-07-03', '2022-07-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `paslon`
--
ALTER TABLE `paslon`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ketua_id` (`ketua_id`),
  ADD UNIQUE KEY `wakil_id` (`wakil_id`);

--
-- Indexes for table `pemilih`
--
ALTER TABLE `pemilih`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `no_identitas` (`no_identitas`);

--
-- Indexes for table `pemilihan`
--
ALTER TABLE `pemilihan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pemilih_id` (`pemilih_id`),
  ADD KEY `paslon_id` (`paslon_id`);

--
-- Indexes for table `peserta`
--
ALTER TABLE `peserta`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nim` (`nim`),
  ADD KEY `prodi_id` (`prodi_id`);

--
-- Indexes for table `prodi`
--
ALTER TABLE `prodi`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nama_prodi` (`nama_prodi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `paslon`
--
ALTER TABLE `paslon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pemilih`
--
ALTER TABLE `pemilih`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pemilihan`
--
ALTER TABLE `pemilihan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `peserta`
--
ALTER TABLE `peserta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `prodi`
--
ALTER TABLE `prodi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `paslon`
--
ALTER TABLE `paslon`
  ADD CONSTRAINT `paslon_ibfk_1` FOREIGN KEY (`ketua_id`) REFERENCES `peserta` (`id`),
  ADD CONSTRAINT `paslon_ibfk_2` FOREIGN KEY (`wakil_id`) REFERENCES `peserta` (`id`);

--
-- Constraints for table `pemilihan`
--
ALTER TABLE `pemilihan`
  ADD CONSTRAINT `pemilihan_ibfk_1` FOREIGN KEY (`pemilih_id`) REFERENCES `pemilih` (`id`),
  ADD CONSTRAINT `pemilihan_ibfk_2` FOREIGN KEY (`paslon_id`) REFERENCES `paslon` (`id`);

--
-- Constraints for table `peserta`
--
ALTER TABLE `peserta`
  ADD CONSTRAINT `peserta_ibfk_1` FOREIGN KEY (`prodi_id`) REFERENCES `prodi` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
