"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [formData, setFormData] = useState<{
    nama: string;
    usia: string;
    emosi: string;
    terakhirMakan: string;
  }>({
    nama: "",
    usia: "",
    emosi: "",
    terakhirMakan: "",
  });

  const [rekomendasi, setRekomendasi] = useState<JSX.Element | null>(null);

  const [submittedData, setSubmittedData] = useState<{
    nama: string;
    usia: string;
    emosi: string;
    terakhirMakan: string;
  } | null>(null);

  const rekomendasiMakanan: Record<string, JSX.Element> = {
       "Kekurangn Energi Protein (KEP)": (
        <div className="mb-4">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">1. Karbohidrat</span>
              <ul className="ps-3">
                <li>➢ Beras Putih</li>
                   <li>nasi putih</li>
                <li>➢ Ubi jalar</li>
                   <li>Ubi Rebus</li>
                <li>➢ Makaroni</li>
                   <li>Makaroni Rebus</li>
              </ul>
              <span className="fw-bold">2. protein</span>
              <ul className="ps-3"> <b>- protein hewani</b>
                <li>➢ Ayam</li>
                   <li>Ayam bakar kecap</li>
                <li>➢ Ikan Tuna</li>
                   <li>ikan tuna bakar</li>
                <li>➢ daging sapi</li>
                   <li>Rolade daging kukus</li>
              </ul>
              <ul className="ps-3"> <b>- protein nabati</b>
                <li>➢ tempe</li>
                   <li>tempe bacem</li>
                <li>➢ tahu</li>
                   <li>tahu kukus sayur</li>
                <li>➢ buncis</li>
                   <li>orak arik telur buncis</li>
              </ul>
              <span className="fw-bold">sayur</span>
              <ul className="ps-3">
                <li>➢ bayam</li>
                   <li>sayur bening bayam</li>
                <li>➢ labu siam</li>
                   <li>sup labu siam dan tahu</li>
                <li>➢ wortel</li>
                   <li>sup wortel</li>
              </ul>
              <span className="fw-bold">Buah</span>
              <ul className="ps-3">
                <li>➢ Pisang</li>
                   <li>pisang potong</li>
                <li>➢ pepaya</li>
                   <li>pepaya potong</li>
                <li>➢ jambu biji</li>
                   <li>jus jambu biji</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
      "Hipertensi": (
        <div className="mb-4">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">1. Karbohidrat</span>
              <ul className="ps-3">
                <li>➢ Beras Putih</li>
                <li>Nasi putih</li>
                <li>➢ Kentang</li>
                <li>Kentang kukus tanpa garam</li>
                <li>➢ Singkong</li>
                <li>Singkong rebus tanpa garam</li>
              </ul>
              <span className="fw-bold">2. Protein</span>
              <ul className="ps-3">
                <b>- Protein Hewani</b>
                <li>➢ Ikan Kembung</li>
                <li>Ikan kembung goreng</li>
                <li>➢ Ayam tanpa kulit</li>
                <li>Ayam panggang bagian dada</li>
                <li>➢ Telur</li>
                <li>Telur rebus balado</li>
              </ul>
              <ul className="ps-3">
                <b>- Protein Nabati</b>
                <li>➢ Kacang Hijau</li>
                <li>Bakwan kacang hijau</li>
                <li>➢ Kacang Tanah</li>
                <li>Sambal kacang</li>
                <li>➢ Kacang Merah</li>
                <li>Sup kacang merah</li>
              </ul>
              <span className="fw-bold">3. Sayur</span>
              <ul className="ps-3">
                <li>➢ Sawi Putih</li>
                <li>Tumis sawi putih</li>
                <li>➢ Labu Kuning</li>
                <li>Sup labu kuning bening</li>
                <li>➢ Brokoli</li>
                <li>Sup brokoli</li>
              </ul>
              <span className="fw-bold">4. Buah</span>
              <ul className="ps-3">
                <li>➢ Mangga</li>
                <li>Mangga potong</li>
                <li>➢ Melon</li>
                <li>Melon potong</li>
                <li>➢ Apel</li>
                <li>Apel potong</li>
              </ul>
            </li>
          </ul>
        </div>

      ),
      "Diabetes": (
        <div className="mb-4">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">1. Karbohidrat</span>
              <ul className="ps-3">
                <li>➢ Beras Merah</li>
                <li>Nasi merah</li>
                <li>➢ Kentang</li>
                <li>Kentang kukus</li>
                <li>➢ Ubi Jalar</li>
                <li>Ubi rebus</li>
              </ul>
              <span className="fw-bold">2. Protein</span>
              <ul className="ps-3">
                <b>- Protein Hewani</b>
                <li>➢ Ikan Lele</li>
                <li>Ikan pepes kemangi</li>
                <li>➢ Daging Rendah Lemak</li>
                <li>Tumis daging cabai hijau</li>
                <li>➢ Ayam Tanpa Kulit</li>
                <li>Ayam kukus jahe</li>
              </ul>
              <ul className="ps-3">
                <b>- Protein Nabati</b>
                <li>➢ Tahu</li>
                <li>Tahu masak jamur</li>
                <li>➢ Tempe</li>
                <li>Tempe goreng</li>
                <li>➢ Kacang Merah</li>
                <li>Kacang merah rebus</li>
              </ul>
              <span className="fw-bold">3. Sayur</span>
              <ul className="ps-3">
                <li>➢ Kangkung</li>
                <li>Sayur bening kangkung</li>
                <li>➢ Kol</li>
                <li>Sayur sup kol tomat</li>
                <li>➢ Bayam</li>
                <li>Sayur bening bayam</li>
              </ul>
              <span className="fw-bold">4. Buah</span>
              <ul className="ps-3">
                <li>➢ Jeruk</li>
                <li>Jeruk kupas</li>
                <li>➢ Semangka</li>
                <li>Semangka potong</li>
                <li>➢ Pepaya</li>
                <li>Pepaya potong</li>
              </ul>
            </li>
          </ul>
        </div>

      ),
      "Gastroesofageal Reflux Disease (GERD) ": (
        <div className="mb-4">
          <ul className="list-group">
            <li className="list-group-item">
              <span className="fw-bold">1. Karbohidrat</span>
              <ul className="ps-3">
                <li>➢ Beras Putih</li>
                <li>Bubur</li>
                <li>➢ Makaroni</li>
                <li>Makaroni rebus</li>
                <li>➢ Bihun</li>
                <li>Bihun rebus</li>
              </ul>
              <span className="fw-bold">2. Protein</span>
              <ul className="ps-3">
                <b>- Protein Hewani</b>
                <li>➢ Telur</li>
                <li>Telur rebus</li>
                <li>➢ Ayam</li>
                <li>Sup ayam wortel</li>
                <li>➢ Ikan Tongkol</li>
                <li>Ikan masak kuning</li>
              </ul>
              <ul className="ps-3">
                <b>- Protein Nabati</b>
                <li>➢ Tempe</li>
                <li>Tempe kukus</li>
                <li>➢ Tahu</li>
                <li>Pepes tahu wortel (tanpa bumbu)</li>
              </ul>
              <span className="fw-bold">3. Sayur</span>
              <ul className="ps-3">
                <li>➢ Wortel</li>
                <li>Wortel rebus</li>
                <li>➢ Buncis</li>
                <li>Tumis buncis jagung</li>
                <li>➢ Bayam</li>
                <li>Sayur bening bayam</li>
              </ul>
              <span className="fw-bold">4. Buah</span>
              <ul className="ps-3">
                <li>➢ Alpukat</li>
                <li>Jus alpukat</li>
                <li>➢ Pisang</li>
                <li>Pisang potong</li>
                <li>➢ Pir</li>
                <li>Jus pir</li>
              </ul>
            </li>
          </ul>
        </div>

      ),
      "Diare ": (
        <div className="mb-4">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="fw-bold">1. Karbohidrat</span>
                <ul className="ps-3">
                  <li>➢ Beras Putih</li>
                  <li>Bubur saring</li>
                  <li>➢ Kentang</li>
                  <li>Kentang kukus di pure</li>
                  <li>➢ Bihun</li>
                  <li>Bihun rebus</li>
                </ul>
                <span className="fw-bold">2. Protein</span>
                <ul className="ps-3">
                  <b>- Protein Hewani</b>
                  <li>➢ Hati Ayam</li>
                  <li>Sup hati ayam</li>
                  <li>➢ Telur</li>
                  <li>Telur rebus</li>
                  <li>➢ Ikan Tuna Giling</li>
                  <li>Ikan pepes (tanpa bumbu)</li>
                </ul>
                <ul className="ps-3">
                  <b>- Protein Nabati</b>
                  <li>➢ Tahu</li>
                  <li>Tahu rebus</li>
                  <li>➢ Kedelai</li>
                  <li>Susu kedelai</li>
                </ul>
                <span className="fw-bold">3. Sayur</span>
                <ul className="ps-3">
                  <li>➢ Tomat</li>
                  <li>Jus tomat</li>
                  <li>➢ Wortel</li>
                  <li>Jus wortel</li>
                  <li>➢ Mentimun</li>
                  <li>Jus mentimun</li>
                </ul>
                <span className="fw-bold">4. Buah</span>
                <ul className="ps-3">
                  <li>➢ Apel</li>
                  <li>Jus apel</li>
                  <li>➢ Pisang</li>
                  <li>Jus pisang</li>
                  <li>➢ Melon</li>
                  <li>Jus melon</li>
                </ul>
              </li>
            </ul>
        </div>

      ),

    // Tambahkan opsi olahraga lainnya dengan format yang sama.
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.emosi) {
      setRekomendasi(rekomendasiMakanan[formData.emosi]);
      setSubmittedData(formData);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        color: "#fff",
      }}
    >
      <div className="container py-5">
        <h1 className="text-center font-weight-bold mb-4">
          Panduan Rekomendasi Makanan berdasarkan penyakit yang diderita  
        </h1>
        <div className="d-flex justify-content-center mb-5">
          <img
            src="/image/GIZI.png"
            alt="Biodata Icon"
            className="img-fluid rounded-circle shadow-lg"
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="card shadow-lg border-0">
              <div className="card-body bg-light text-dark rounded">
                <h4 className="card-title text-center mb-4">
                  Masukkan Data Anda
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input
                      type="text"
                      name="nama"
                      className="form-control"
                      placeholder="Masukkan Nama"
                      value={formData.nama}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Umur</label>
                    <input
                      type="number"
                      name="usia"
                      className="form-control"
                      placeholder="Masukkan Umur"
                      value={formData.usia}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Pengen makan apa</label>
                    <input
                      type="text"
                      name="terakhirMakan"
                      className="form-control"
                      placeholder="Pengen makan apa "
                      value={formData.terakhirMakan}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Pilih Penyakit</label>
                    <select
                      name="emosi"
                      value={formData.emosi}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Pilih Penyakit</option>
                      <option value="Kekurangn Energi Protein (KEP)">
                        Kekurangan Energi Protein (KEP)
                      </option>
                      <option value="Hipertensi">Hipertensi</option>
                      <option value="Diabetes">Diabetes</option>
                      <option value="Gastroesofageal Reflux Disease (GERD)">
                        Gastroesofageal Reflux Disease (GERD)
                      </option>
                      <option value="Diare">Diare</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {submittedData && (
          <div className="mt-5">
            <div style={{background: "linear-gradient(to right, #ff758c, #ff7eb3)",}} className="alert alert-success">
              <h5>Biodata Anda:</h5>
              <p>
                <strong>Nama:</strong> {submittedData.nama}
              </p>
              <p>
                <strong>Umur:</strong> {submittedData.usia}
              </p>
              <p>
                <strong>Pengen makan apa:</strong> {submittedData.terakhirMakan}
              </p>
            </div>
          </div>
        )}

        {rekomendasi && (
          <div className="mt-5">
            <div className="card bg-light">
              <div className="card-body">
                <h4 className="card-title text-center">Rekomendasi Makanan</h4>
                <p>
                  <strong>Untuk {formData.emosi}:</strong>
                </p>
                {rekomendasi}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>  
  );
}
