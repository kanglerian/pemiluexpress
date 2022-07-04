# Pemilu Apps

> Halo semuanya, ini adalah pemilu apps yang diperuntukan untuk tes programming. Bahasa yang digunakan adalah Javascript dengan stack NodeJS dan ExpressJS menggunakan database MySQL.

## Install Database

Di dalamnya saya sudah siapkan database dengan format .sql, kemudian tinggal import saja di phpmyadmin dengan nama database `db_pemilu`.

## Running Apps

Untuk menjalankan aplikasi. Cukup dengan memakai perintah

```bash
$ nodemon bin/www
```

## Tersedia API

Selain mengakses dashboard. Disini saya juga menyiapkan APInya.

```host
app.use('/api/prodi', prodiRouter);
app.use('/api/peserta', pesertaRouter);
app.use('/api/paslon', paslonRouter);
app.use('/api/pemilih', pemilihRouter);
app.use('/api/pemilihan', pemilihanRouter);
```

Dibuat oleh @kanglerian tanggal 30 Juni 2022