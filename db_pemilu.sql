-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 25 Jul 2022 pada 14.50
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 7.4.16

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
-- Struktur dari tabel `paslon`
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
-- Dumping data untuk tabel `paslon`
--

INSERT INTO `paslon` (`id`, `no_urut`, `ketua_id`, `wakil_id`, `image`, `video`, `visi`, `misi`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 2, 'http://kpu.politekniklp3i-tasikmalaya.ac.id/assets/img/1655259857683.JPG', '', 'Menjadikan BEM Politeknik LP3I Kampus Tasikmalaya yang memiliki pengaruh Social, Budaya dan Pendidikan di tingkat Kota Tasikmalaya dan Priangan Timur dengan berlandaskan iman, takwa dan budi luhur', 'Menjadikan BEM Politeknik LP3I Kampus Tasikmalaya yang memiliki pengaruh Social, Budaya dan Pendidikan di tingkat Kota Tasikmalaya dan Priangan Timur dengan berlandaskan iman, takwa dan budi luhur', '2022-07-03', '2022-07-03'),
(2, 2, 3, 4, 'http://kpu.politekniklp3i-tasikmalaya.ac.id/assets/img/1655259879451.JPG', '', 'Mencipatakan BEM yang berperan aktif dalam pengembangan minat dan bakat bagi seluruh mahasiswa\r\n', 'Mencipatakan BEM yang berperan aktif dalam pengembangan minat dan bakat bagi seluruh mahasiswa\r\n', '2022-07-03', '2022-07-03'),
(3, 3, 5, 6, 'http://kpu.politekniklp3i-tasikmalaya.ac.id/assets/img/1655260054469.JPG', '', 'Mewujudkan BEM sebagai wadah sekaligus penggerak dan pelaksana aspirasi mahasiswa yang relevan bagi mahasiswa dan kampus, Juga menciptakan BEM sebagai organisasi yang aktif diinternal maupun dieksternal.\r\n', 'Mewujudkan BEM sebagai wadah sekaligus penggerak dan pelaksana aspirasi mahasiswa yang relevan bagi mahasiswa dan kampus, Juga menciptakan BEM sebagai organisasi yang aktif diinternal maupun dieksternal.\r\n', '2022-07-03', '2022-07-03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemilih`
--

CREATE TABLE `pemilih` (
  `no_identitas` varchar(255) NOT NULL,
  `nama_lengkap` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pemilih`
--

INSERT INTO `pemilih` (`no_identitas`, `nama_lengkap`, `password`, `status`, `created_at`, `updated_at`) VALUES
('201702102', 'Lerian Febriana, A.Md.Kom', 'kanglerian', 0, '2022-07-03', '2022-07-04'),
('201702103', 'Sopyan Sauri, A.Md.Kom', 'sopyan', 1, '2022-07-03', '2022-07-04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemilihan`
--

CREATE TABLE `pemilihan` (
  `id` int(11) NOT NULL,
  `pemilih_id` varchar(255) DEFAULT NULL,
  `paslon_id` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pemilihan`
--

INSERT INTO `pemilihan` (`id`, `pemilih_id`, `paslon_id`, `created_at`, `updated_at`) VALUES
(23, '201702103', 2, '2022-07-04', '2022-07-04');

-- --------------------------------------------------------

--
-- Struktur dari tabel `peserta`
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
-- Dumping data untuk tabel `peserta`
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
-- Struktur dari tabel `prodi`
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
-- Dumping data untuk tabel `prodi`
--

INSERT INTO `prodi` (`id`, `nama_prodi`, `kaprodi`, `fakultas`, `created_at`, `updated_at`) VALUES
(1, 'Teknik Otomotif', 'Yovi Fernando, S.T', 'Fakultas Sains & Teknologi', '2022-07-03', '2022-07-03'),
(2, 'Manajemen Informatika', 'Muhammad Farihin, S.T', 'Fakultas Sains & Teknologi', '2022-07-03', '2022-07-03'),
(3, 'Manajemen Keuangan Perbankan', 'Adzka Rosa Sanjayana, M.Ak', 'Fakultas Ekonomi', '2022-07-03', '2022-07-03'),
(4, 'Manajemen Pemasaran', 'Ernawati, M.Pd., MM', 'Fakultas Ekonomi', '2022-07-03', '2022-07-03');

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `view_pemilihan`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `view_pemilihan` (
`id` int(11)
,`no_urut` int(11)
,`ketua_id` int(11)
,`wakil_id` int(11)
,`image` text
,`video` text
,`visi` text
,`misi` text
,`created_at` date
,`updated_at` date
,`nama_ketua` varchar(255)
,`kelas_ketua` varchar(255)
,`nama_wakil` varchar(255)
,`kelas_wakil` varchar(255)
,`jumlah` bigint(21)
);

-- --------------------------------------------------------

--
-- Struktur untuk view `view_pemilihan`
--
DROP TABLE IF EXISTS `view_pemilihan`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_pemilihan`  AS SELECT `paslon`.`id` AS `id`, `paslon`.`no_urut` AS `no_urut`, `paslon`.`ketua_id` AS `ketua_id`, `paslon`.`wakil_id` AS `wakil_id`, `paslon`.`image` AS `image`, `paslon`.`video` AS `video`, `paslon`.`visi` AS `visi`, `paslon`.`misi` AS `misi`, `paslon`.`created_at` AS `created_at`, `paslon`.`updated_at` AS `updated_at`, `ketua`.`nama_lengkap` AS `nama_ketua`, `ketua`.`kelas` AS `kelas_ketua`, `wakil`.`nama_lengkap` AS `nama_wakil`, `wakil`.`kelas` AS `kelas_wakil`, count(`pemilihan`.`paslon_id`) AS `jumlah` FROM (`pemilihan` left join ((`paslon` join `peserta` `ketua` on(`ketua`.`id` = `paslon`.`ketua_id`)) join `peserta` `wakil` on(`wakil`.`id` = `paslon`.`wakil_id`)) on(`pemilihan`.`paslon_id` = `paslon`.`id`)) GROUP BY `pemilihan`.`paslon_id` ;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `peserta`
--
ALTER TABLE `peserta`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nim` (`nim`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `peserta`
--
ALTER TABLE `peserta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
