# booksbe
node js 
ini merupakan backend untuk books api


Endpoint /api/booksgoogle
Deskripsi:

Endpoint ini digunakan untuk mengambil daftar buku dari Google Books API.

Metode: GET

Contoh Penggunaan:

bash
Copy code
curl http://localhost:3000/api/booksgoogle
Respon Sukses:

Kode Status: 200 OK
Data buku dari Google Books dalam format JSON.
Respon Kesalahan:

Kode Status: 500 Internal Server Error
Data: Pesan kesalahan
Endpoint /api/randombooks
Deskripsi:

Endpoint ini digunakan untuk mengambil data buku dari Google Books API berdasarkan huruf acak. Data akan diambil dari API Google Books jika data dengan huruf yang sama belum ada di database.

Metode: GET

Contoh Penggunaan:

bash
Copy code
curl http://localhost:3000/api/randombooks
Respon Sukses:

Kode Status: 200 OK
Data buku dari Google Books dalam format JSON atau dari database jika data sudah ada.
Respon Kesalahan:

Kode Status: 500 Internal Server Error
Data: Pesan kesalahan
Catatan:
Pastikan bahwa Anda telah mengatur kunci API Google Books yang valid dalam variabel lingkungan .env dengan nama GOOGLE_BOOKS_API_KEY.

Endpoint /api/booksgoogle akan mengambil data langsung dari Google Books API tanpa menyimpan data di database.




Endpoint: /api/randombooks
Deskripsi
Endpoint ini digunakan untuk mengambil data buku dari API Google Books dengan permintaan yang berbeda berdasarkan huruf acak yang dihasilkan.

Permintaan
Metode: GET
URL: /api/randombooks
Respon
Sukses (Status Kode: 200)

Deskripsi: Permintaan berhasil dan data buku diambil atau diambil dari database jika sudah ada.
Contoh Respon:
json
Copy code
{
  "code": 200,
  "success": true,
  "status": "OK",
  "data": [
    {
      "id": "123",
      "title": "Judul Buku",
      "authors": ["Penulis 1", "Penulis 2"],
      "publisher": "Penerbit",
      "publishedDate": "2023-10-23",
      "description": "Deskripsi buku.",
      "smallThumbnail": "URL Gambar Kecil",
      "thumbnail": "URL Gambar",
      "previewLink": "URL Pratinjau",
      "categories": ["Kategori 1", "Kategori 2"]
    },
    // Data buku lainnya
  ]
}
Kesalahan Server (Status Kode: 500)

Deskripsi: Terjadi kesalahan saat mengambil data buku.
Contoh Respon:
json
Copy code
{
  "code": 500,
  "success": false,
  "status": "Internal Server Error",
  "data": null,
  "message": "Terjadi kesalahan saat mengambil data buku."
}
Catatan
Endpoint ini mengambil data buku dari API Google Books dengan permintaan berdasarkan huruf acak. Data buku yang telah diambil akan disimpan dalam database untuk digunakan di masa mendatang jika permintaan yang sama diterima.
Jika data buku dengan huruf yang sama sudah ada dalam database, maka data tersebut akan digunakan dan tidak ada permintaan tambahan ke API Google Books.
Pastikan Anda telah mengatur kunci API Google Books yang valid dalam variabel lingkungan (environment variable) sebelum menggunakan endpoint ini.
