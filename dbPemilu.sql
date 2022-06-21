CREATE TABLE `peserta` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nim` varchar(255),
  `nama_lengkap` varchar(255),
  `kelas` varchar(255),
  `prodi_id` int,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `pemilihan` (
  `pemilih_id` int,
  `paslon_id` int,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `prodi` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nama_prodi` varchar(255) UNIQUE,
  `kaprodi` varchar(255),
  `fakultas` varchar(255),
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `paslon` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `no_urut` int,
  `ketua_id` int UNIQUE,
  `wakil_id` int UNIQUE,
  `image` text,
  `video` text,
  `visi` text,
  `misi` text,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE `pemilih` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `no_identitas` varchar(255) UNIQUE,
  `nama_lengkap` varchar(255),
  `password` varchar(255),
  `status` boolean,
  `created_at` date,
  `updated_at` date
);

ALTER TABLE `pemilihan` ADD FOREIGN KEY (`pemilih_id`) REFERENCES `pemilih` (`id`);

ALTER TABLE `peserta` ADD FOREIGN KEY (`prodi_id`) REFERENCES `prodi` (`id`);

ALTER TABLE `paslon` ADD FOREIGN KEY (`ketua_id`) REFERENCES `peserta` (`id`);

ALTER TABLE `paslon` ADD FOREIGN KEY (`wakil_id`) REFERENCES `peserta` (`id`);
