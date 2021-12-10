<!-- 1. Apa perbedaan antara static web server dan dynamic web server? -->
1.1 Server web statis, atau tumpukan, terdiri dari komputer (perangkat keras) dengan server HTTP (perangkat lunak). Disebut "statis" karena server mengirimkan file yang dihosting apa adanya ke browser Anda.

1.2 Server web dinamis yang terdiri dari statis web server ditambah perangkat lunak tambahan, paling sering sebuah server aplikasi dan basis data . Disebut "dinamis" karena server aplikasi memperbarui file yang dihosting sebelum mengirim konten ke browser Anda melalui server HTTP. 

- Keduanya memiliki tujuan dan perhatian yang berbeda.
- Keduanya umumnya tidak menggunakan bahasa pemrograman yang sama (pengecualiannya adalah JavaScript, yang dapat digunakan di sisi server dan klien).
- Keduanya berjalan di dalam lingkungan sistem operasi yang berbeda.


<!-- 2. Jelaskan arsitektur static site dan dynamic site -->
2.1 Static Site
Situs statis adalah situs yang mengembalikan konten hard-code yang sama dari server setiap kali sumber daya tertentu diminta). Saat pengguna ingin menavigasi ke halaman, browser mengirimkan permintaan "GET" HTTP yang menentukan URL-nya.

Server mengambil dokumen yang diminta dari sistem filenya dan mengembalikan respons HTTP yang berisi dokumen dan status sukses (biasanya 200 OK). Jika file tidak dapat diambil karena alasan tertentu, status kesalahan dikembalikan (lihat tanggapan kesalahan klien dan tanggapan kesalahan server).

2.2 Dynamic Site
Situs dinamis dapat mengembalikan data yang berbeda untuk URL berdasarkan informasi yang diberikan oleh pengguna atau preferensi yang disimpan dan dapat melakukan operasi lain sebagai bagian dari pengembalian respons (mis. mengirim pemberitahuan).

Sebagian besar kode untuk mendukung situs web dinamis harus dijalankan di server. Membuat kode ini dikenal sebagai " pemrograman sisi server " (atau terkadang " skrip back-end ").

Diagram di bawah ini menunjukkan arsitektur sederhana untuk situs web dinamis . Seperti pada diagram sebelumnya, browser mengirim permintaan HTTP ke server, kemudian server memproses permintaan dan mengembalikan respons HTTP yang sesuai.

Permintaan untuk sumber daya statis ditangani dengan cara yang sama seperti untuk situs statis (sumber daya statis adalah file apa pun yang tidak berubah —biasanya: CSS, JavaScript, Gambar, file PDF yang dibuat sebelumnya, dll.).

2.2.1 Ilustrasi Arsitektur
- Permintaan untuk sumber daya statis ditangani dengan cara yang sama seperti untuk situs statis (sumber daya statis adalah file apa pun yang tidak berubah —biasanya: CSS, JavaScript, Gambar, file PDF yang dibuat sebelumnya, dll.).
- Diagram sederhana dari server web yang menggunakan pemrograman sisi server untuk mendapatkan informasi dari database dan membuat HTML dari template. Ini adalah diagram yang sama seperti pada gambaran umum Client-Server. Permintaan untuk sumber daya dinamis malah diteruskan ke kode sisi server (ditunjukkan dalam diagram sebagai Aplikasi Web).
- Untuk "permintaan dinamis" server menafsirkan permintaan, membaca informasi yang diperlukan dari database (3), 
- Menggabungkan data yang diambil dengan template HTML (4), 
- Dan mengirimkan kembali respons yang berisi HTML yang dihasilkan (5,6).


<!-- 3. Apa saja yang dapat kita buat pada sisi server? -->
3.1 Penyimpanan dan pengiriman informasi yang efisien
Bayangkan berapa banyak produk yang tersedia di Amazon, dan bayangkan berapa banyak posting yang telah ditulis di Facebook? Membuat halaman statis terpisah untuk setiap produk atau posting akan sangat tidak praktis.

3.2 Pengalaman pengguna yang disesuaikan
Server dapat menyimpan dan menggunakan informasi tentang klien untuk memberikan pengalaman pengguna yang nyaman dan disesuaikan. Misalnya, banyak situs menyimpan kartu kredit sehingga detailnya tidak perlu dimasukkan lagi. Situs seperti Google Maps dapat menggunakan lokasi tersimpan atau saat ini untuk memberikan informasi perutean, dan penelusuran atau riwayat perjalanan untuk menyoroti bisnis lokal di hasil penelusuran.

3.3 Akses terkontrol ke konten
Pemrograman sisi server memungkinkan situs untuk membatasi akses ke pengguna yang berwenang dan hanya menyajikan informasi yang diizinkan untuk dilihat oleh pengguna.

Jejaring sosial seperti Facebook memungkinkan pengguna untuk sepenuhnya mengontrol data mereka sendiri tetapi hanya mengizinkan teman mereka untuk melihat atau mengomentarinya. Pengguna menentukan siapa yang dapat melihat data mereka, dan dengan ekstensi, data siapa yang muncul di feed mereka — otorisasi adalah bagian utama dari pengalaman pengguna!

3.4 Simpan informasi sesi/status
Pemrograman sisi server memungkinkan pengembang untuk menggunakan sesi — pada dasarnya, sebuah mekanisme yang memungkinkan server untuk menyimpan informasi tentang pengguna situs saat ini dan mengirim tanggapan berbeda berdasarkan informasi tersebut.

Ini memungkinkan, misalnya, sebuah situs untuk mengetahui bahwa pengguna sebelumnya telah masuk dan menampilkan tautan ke email atau riwayat pesanan mereka, atau mungkin menyimpan status permainan sederhana sehingga pengguna dapat kembali ke situs dan melanjutkan di mana mereka meninggalkannya.

3.5 Pemberitahuan dan komunikasi
Server dapat mengirim pemberitahuan umum atau khusus pengguna melalui situs web itu sendiri atau melalui email, SMS, pesan instan, percakapan video, atau layanan komunikasi lainnya.

- Facebook dan Twitter mengirim email dan pesan SMS untuk memberi tahu Anda tentang komunikasi baru.
- Amazon secara teratur mengirimkan email produk yang menyarankan produk serupa dengan yang sudah dibeli atau dilihat yang mungkin menarik bagi Anda.

3.6 Analisis data
Sebuah situs web dapat mengumpulkan banyak data tentang pengguna: apa yang mereka cari, apa yang mereka beli, apa yang mereka rekomendasikan, berapa lama mereka berada di setiap halaman. Pemrograman sisi server dapat digunakan untuk memperbaiki tanggapan berdasarkan analisis data ini.

Amazon dan Google sama-sama mengiklankan produk berdasarkan pencarian sebelumnya (dan pembelian)

<!-- 4. Mohon jelaskan apa itu RESTful? -->
REST, atau Representational State Transfer, adalah gaya arsitektur untuk menyediakan standar antara sistem komputer di web, sehingga memudahkan sistem untuk berkomunikasi satu sama lain.

Sistem yang sesuai dengan REST, sering disebut sistem RESTful, dicirikan oleh bagaimana mereka tidak memiliki kewarganegaraan dan memisahkan masalah klien dan server

Dalam gaya arsitektur REST, implementasi klien dan implementasi server dapat dilakukan secara independen tanpa saling mengetahui satu sama lain.

Ini berarti bahwa kode di sisi klien dapat diubah setiap saat tanpa mempengaruhi operasi server, dan kode di sisi server dapat diubah tanpa mempengaruhi operasi klien.

Dengan menggunakan antarmuka REST, klien yang berbeda mencapai titik akhir REST yang sama, melakukan tindakan yang sama, dan menerima respons yang sama.

Klien dapat berupa platform web, platform seluler, atau platform desktop.


<!-- 5. Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing) -->
Ada 4 HTTP Verbs dasar yang kita gunakan dalam permintaan untuk berinteraksi dengan sumber daya dalam sistem REST:

5.1 GET — mengambil sumber daya tertentu (berdasarkan id) atau kumpulan sumber daya
Metode HTTP GET digunakan untuk membaca (atau mengambil) representasi sumber daya. Di jalur "bahagia" (atau non-kesalahan), GET mengembalikan representasi dalam XML atau JSON dan kode respons HTTP 200 (OK). Dalam kasus kesalahan, paling sering mengembalikan 404 (TIDAK DITEMUKAN) atau 400 (PERMINTAAN BURUK).

Menurut desain spesifikasi HTTP, permintaan GET (bersama dengan HEAD) hanya digunakan untuk membaca data dan tidak mengubahnya. Karena itu, bila digunakan dengan cara ini, mereka dianggap aman. Artinya, mereka dapat dipanggil tanpa risiko modifikasi data atau kerusakan—memanggilnya sekali memiliki efek yang sama dengan memanggilnya 10 kali, atau tidak sama sekali. Selain itu, GET (dan HEAD) bersifat idempoten, yang berarti bahwa membuat beberapa permintaan yang identik akan menghasilkan hasil yang sama sebagai satu permintaan.

Jangan mengekspos operasi yang tidak aman melalui GET—itu tidak boleh mengubah sumber daya apa pun di server.

5.2. POST — buat sumber daya baru
POST verb paling sering digunakan untuk membuat sumber daya baru. Secara khusus, ini digunakan untuk membuat sumber daya bawahan. Artinya, bawahan beberapa (misalnya induk) sumber daya lainnya. Dengan kata lain, saat membuat sumber daya baru, POST ke induk dan layanan menangani pengaitan sumber daya baru dengan induk, menetapkan ID (URI sumber daya baru), dll.

Pada pembuatan yang berhasil, kembalikan status HTTP 201, kembalikan header Lokasi dengan tautan ke sumber daya yang baru dibuat dengan status HTTP 201.

POST tidak aman atau idempoten. Oleh karena itu, direkomendasikan untuk permintaan sumber daya non-idempoten. Membuat dua permintaan POST yang identik kemungkinan besar akan menghasilkan dua sumber daya yang berisi informasi yang sama.

5.3 PUT — perbarui sumber daya tertentu (berdasarkan id)
PUT paling sering digunakan untuk kemampuan update, PUT-ing ke URI sumber daya yang dikenal dengan badan permintaan yang berisi representasi sumber daya asli yang baru diperbarui.

Namun, PUT juga dapat digunakan untuk membuat sumber daya jika ID sumber daya dipilih oleh klien, bukan oleh server. Dengan kata lain, jika PUT adalah ke URI yang berisi nilai ID sumber daya yang tidak ada. Sekali lagi, badan permintaan berisi representasi sumber daya. Banyak yang merasa ini berbelit-belit dan membingungkan. Akibatnya, metode penciptaan ini harus digunakan dengan hemat, jika sama sekali.

Atau, gunakan POST untuk membuat sumber daya baru dan berikan ID yang ditentukan klien dalam representasi isi—mungkin ke URI yang tidak menyertakan ID sumber daya (lihat POST di bawah).

Pada pembaruan yang berhasil, kembalikan 200 (atau 204 jika tidak mengembalikan konten apa pun di badan) dari PUT. Jika menggunakan PUT untuk membuat, kembalikan status HTTP 201 pada pembuatan yang berhasil. Badan dalam respons bersifat opsional—dengan ketentuan bahwa badan tersebut mengonsumsi lebih banyak bandwidth. Tidak perlu mengembalikan tautan melalui header Lokasi dalam kasus pembuatan karena klien telah menyetel ID sumber daya.

PUT bukanlah operasi yang aman, karena memodifikasi (atau membuat) status di server, tetapi idempoten. Dengan kata lain, jika Anda membuat atau memperbarui sumber daya menggunakan PUT dan kemudian melakukan panggilan yang sama lagi, sumber daya tersebut masih ada dan masih memiliki status yang sama seperti pada panggilan pertama.

Jika, misalnya, memanggil PUT pada sumber daya menambah penghitung dalam sumber daya, panggilan tidak lagi idempoten. Terkadang itu terjadi dan mungkin cukup untuk mendokumentasikan bahwa panggilan tersebut tidak idempoten. Namun, disarankan agar permintaan PUT tetap idempoten. Sangat disarankan untuk menggunakan POST untuk permintaan non-idempoten.


5.4 HAPUS — hapus sumber daya tertentu dengan id
DELETE cukup mudah dimengerti. Ini digunakan untuk menghapus sumber daya yang diidentifikasi oleh URI.

Pada penghapusan yang berhasil, kembalikan status HTTP 200 (OK) bersama dengan isi respons, mungkin representasi dari item yang dihapus (seringkali menuntut terlalu banyak bandwidth), atau respons yang dibungkus (lihat Nilai Pengembalian di bawah). Entah itu atau mengembalikan status HTTP 204 (TANPA KONTEN) tanpa badan tanggapan. Dengan kata lain, status 204 tanpa isi, atau respons gaya JSEND dan status HTTP 200 adalah respons yang disarankan.

Dari segi spesifikasi HTTP, operasi DELETE bersifat idempoten. Jika Anda MENGHAPUS sumber daya, itu akan dihapus. Berulang kali memanggil DELETE pada sumber daya itu berakhir sama: sumber daya hilang. Jika memanggil DELETE katakanlah, mengurangi penghitung (dalam sumber daya), panggilan DELETE tidak lagi idempoten. Seperti disebutkan sebelumnya, statistik penggunaan dan pengukuran dapat diperbarui sambil tetap mempertimbangkan idempoten layanan selama tidak ada data sumber daya yang diubah. Dianjurkan untuk menggunakan POST untuk permintaan sumber daya non-idempoten.

Namun, ada peringatan tentang HAPUS idempotensi. Memanggil DELETE pada sumber daya untuk kedua kalinya akan sering mengembalikan 404 (TIDAK DITEMUKAN) karena sudah dihapus dan oleh karena itu tidak lagi dapat ditemukan. Ini, menurut beberapa pendapat, membuat operasi DELETE tidak lagi idempoten, namun, status akhir sumber daya adalah sama. Mengembalikan 404 dapat diterima dan mengkomunikasikan secara akurat status panggilan.


<!-- 6. Apa fungsi dari Response Codes? -->
Response dari server berisi kode status untuk memperingatkan klien tentang informasi tentang keberhasilan operasi. Sebagai pengembang, Anda tidak perlu mengetahui setiap kode status (ada banyak di antaranya), tetapi Anda harus mengetahui kode yang paling umum dan cara penggunaannya.


Kode Status >> Artinya
200 (OK) >> Ini adalah respons standar untuk permintaan HTTP yang berhasil.
201 (CREATED) >> Ini adalah respons standar untuk permintaan HTTP yang menghasilkan item yang berhasil dibuat.
204 (NO CONTENT) >> Ini adalah respons standar untuk permintaan HTTP yang berhasil, di mana tidak ada yang dikembalikan di badan respons.
400 (BAD REQUEST) >> Permintaan tidak dapat diproses karena sintaks permintaan yang buruk, ukuran yang berlebihan, atau kesalahan klien lainnya.
403 (FORBIDDEN) >> Klien tidak memiliki izin untuk mengakses sumber daya ini.
404 (NOT FOUND) >> Sumber daya tidak dapat ditemukan saat ini. Mungkin sudah dihapus, atau belum ada.
500 (INTERNAL SERVER ERROR) >> Jawaban umum untuk kegagalan tak terduga jika tidak ada informasi spesifik yang tersedia.

Untuk setiap HTTP Verbs, ada kode status yang diharapkan yang harus dikembalikan server setelah berhasil:

GET — return 200 (OK)
POST — return 201 (CREATED)
PUT — return 200 (OK)
DELETE — return 204 (NO CONTENT) Jika operasi gagal, kembalikan kode status paling spesifik yang mungkin terkait dengan masalah yang ditemui.
