// src/components/Materi.js
import React, { useState, useEffect } from 'react';

const Materi = () => {
  const daftarBangun = ['kubus', 'balok', 'tabung', 'kerucut', 'bola', 'limas'];
  const [halamanAktif, setHalamanAktif] = useState(0);
  
  // State untuk melacak jawaban dari Mini Kuis
  const [jawabanDipilih, setJawabanDipilih] = useState(null);
  const [statusJawaban, setStatusJawaban] = useState('');

  const bangun = daftarBangun[halamanAktif];

  // Efek untuk me-reset kuis setiap kali siswa pindah halaman/bangun ruang
  useEffect(() => {
    setJawabanDipilih(null);
    setStatusJawaban('');
  }, [halamanAktif]);

  // --- DATA E-BOOK (Teori & Contoh) ---
  const dataBuku = {
    kubus: {
      deskripsi: "Kubus merupakan bangun ruang tertutup yang dibatasi oleh enam buah sisi yang sepasang-sepasang saling berhadapan dan sejajar. Semua sisi berbentuk persegi yang mempunyai bentuk dan ukuran yang sama (kongruen).\n\nSifat & Unsur-unsur:\n• Memiliki 6 sisi, 12 rusuk, dan 8 titik sudut.\n• Memiliki 12 diagonal sisi (s√2) dan 4 diagonal ruang (s√3).\n• Memiliki 6 bidang diagonal.",
      rumus: "Volume (V) = s × s × s\nLuas Permukaan (L) = 6 × s²\nPanjang Kerangka = 12 × s",
      contoh: [
        "1. Budi memiliki bak mandi berbentuk kubus berusuk 80 cm. Berapa liter air untuk mengisinya penuh?\nJawab: Volume = 80 × 80 × 80 = 512.000 cm³ = 512 liter."
      ]
    },
    balok: {
      deskripsi: "Balok adalah bangun ruang yang dibatasi oleh enam buah sisi. Setiap sisi merupakan bidang datar berbentuk persegi panjang.\n\nSifat & Unsur-unsur:\n• Memiliki 6 sisi, 12 rusuk, dan 8 titik sudut.\n• Memiliki 12 diagonal sisi dan 4 diagonal ruang.",
      rumus: "Volume (V) = p × l × t\nLuas Permukaan (L) = 2(pl + pt + lt)\nPanjang Kerangka = 4(p + l + t)",
      contoh: [
        "1. Kotak pensil memiliki panjang 20 cm, lebar 10 cm, tinggi 5 cm. Volumenya?\nJawab: V = 20 × 10 × 5 = 1.000 cm³."
      ]
    },
    tabung: {
      deskripsi: "Tabung adalah bangun tiga dimensi yang dibatasi dua sisi lingkaran identik (alas dan tutup) sejajar serta satu sisi lengkung (selimut). Tabung tidak memiliki titik sudut.",
      rumus: "Volume (V) = π × r² × t\nLuas Selimut = 2 × π × r × t\nLuas Permukaan = 2 × π × r × (r + t)",
      contoh: [
        "1. Celengan Raka berjari-jari (r) 7 cm dan tinggi 10 cm. Volumenya?\nJawab: V = 22/7 × 7² × 10 = 1.540 cm³."
      ]
    },
    kerucut: {
      deskripsi: "Kerucut adalah bangun ruang sisi lengkung yang memiliki satu alas berbentuk lingkaran dan satu titik puncak di atasnya. Garis miring pada selimutnya disebut garis pelukis (s).",
      rumus: "Volume (V) = ⅓ × π × r² × t\nLuas Selimut = π × r × s\nLuas Permukaan = π × r × (r + s)",
      contoh: [
        "1. Cone es krim berdiameter 14 cm (r=7 cm) dan tinggi 18 cm. Volumenya?\nJawab: V = ⅓ × 22/7 × 7² × 18 = 924 cm³."
      ]
    },
    bola: {
      deskripsi: "Bola adalah bangun ruang sisi lengkung tiga dimensi dan berbentuk bulat sempurna. Semua bagian permukaannya memiliki jarak yang sama terhadap titik pusatnya.",
      rumus: "Volume (V) = 4/3 × π × r³\nLuas Permukaan (L) = 4 × π × r²",
      contoh: [
        "1. Jeruk Vika berbentuk bola dengan jari-jari 7 cm. Luas permukaannya?\nJawab: L = 4 × 22/7 × 7² = 616 cm²."
      ]
    },
    limas: {
      deskripsi: "Limas adalah bangun ruang tiga dimensi yang memiliki alas berbentuk segi banyak, dan sisi tegak berbentuk segitiga yang bertemu di satu titik puncak.",
      rumus: "Volume (V) = ⅓ × Luas Alas × tinggi\nLuas Permukaan = Luas Alas + Jumlah Luas Sisi Tegak",
      contoh: [
        "1. Kerajinan limas segi empat alasnya 8 cm dan tinggi 12 cm. Volumenya?\nJawab: V = ⅓ × (8 × 8) × 12 = ⅓ × 64 × 12 = 256 cm³."
      ]
    }
  };

  // --- DATA UJI COBA (Soal, Opsi, Jawaban & Pembahasan) ---
  const dataUjiCoba = {
    kubus: {
      soal: "Sebuah rubik berbentuk kubus memiliki panjang sisi 6 cm. Berapakah volumenya?",
      opsi: ["36 cm³", "108 cm³", "216 cm³", "312 cm³"],
      jawaban: "216 cm³",
      pembahasan: "V = s × s × s = 6 × 6 × 6 = 216 cm³."
    },
    balok: {
      soal: "Berapakah luas permukaan balok yang memiliki panjang 5 cm, lebar 3 cm, dan tinggi 2 cm?",
      opsi: ["30 cm²", "62 cm²", "124 cm²", "50 cm²"],
      jawaban: "62 cm²",
      pembahasan: "L = 2(pl + pt + lt) = 2((5×3) + (5×2) + (3×2)) = 2(15 + 10 + 6) = 2(31) = 62 cm²."
    },
    tabung: {
      soal: "Sebuah gelas tabung memiliki jari-jari alas 7 cm dan tinggi 10 cm. Berapa volumenya? (π = 22/7)",
      opsi: ["1.540 cm³", "2.200 cm³", "154 cm³", "770 cm³"],
      jawaban: "1.540 cm³",
      pembahasan: "V = π × r² × t = (22/7) × 7 × 7 × 10 = 22 × 7 × 10 = 1.540 cm³."
    },
    kerucut: {
      soal: "Topi ulang tahun berbentuk kerucut memiliki jari-jari 7 cm dan panjang garis pelukis (s) 25 cm. Berapa luas selimutnya? (π = 22/7)",
      opsi: ["175 cm²", "350 cm²", "550 cm²", "700 cm²"],
      jawaban: "550 cm²",
      pembahasan: "Luas Selimut = π × r × s = (22/7) × 7 × 25 = 22 × 25 = 550 cm²."
    },
    bola: {
      soal: "Berapa luas permukaan bola sepak yang berjari-jari 7 cm? (π = 22/7)",
      opsi: ["616 cm²", "154 cm²", "4312 cm²", "88 cm²"],
      jawaban: "616 cm²",
      pembahasan: "L = 4 × π × r² = 4 × (22/7) × 7 × 7 = 4 × 154 = 616 cm²."
    },
    limas: {
      soal: "Piramida mainan memiliki luas alas 100 cm² dan tinggi 12 cm. Berapakah volumenya?",
      opsi: ["1.200 cm³", "400 cm³", "600 cm³", "300 cm³"],
      jawaban: "400 cm³",
      pembahasan: "V = ⅓ × Luas Alas × tinggi = ⅓ × 100 × 12 = 100 × 4 = 400 cm³."
    }
  };

  const visualBangun = { kubus: "📦", balok: "🧱", tabung: "🛢️", kerucut: "🍦", bola: "⚽", limas: "⛺" };

  const lembarBerikutnya = () => { if (halamanAktif < daftarBangun.length - 1) setHalamanAktif(halamanAktif + 1); };
  const lembarSebelumnya = () => { if (halamanAktif > 0) setHalamanAktif(halamanAktif - 1); };

  const handleJawab = (opsiPilihan) => {
    setJawabanDipilih(opsiPilihan);
    if (opsiPilihan === dataUjiCoba[bangun].jawaban) {
      setStatusJawaban('Benar');
    } else {
      setStatusJawaban('Salah');
    }
  };

  return (
    <div className="materi-container fade-in">
      <h2 className="judul-buku">Buku Pintar Bangun Ruang</h2>
      <p style={{marginBottom: '20px'}}>Pahami logikanya di halaman kiri, lalu uji pemahamanmu di halaman kanan!</p>
      
      <div className="ebook-wrapper">
        
        {/* --- HALAMAN KIRI: BACAAN & VISUAL E-BOOK --- */}
        <div className="book-page left-page">
          <h3 className="nama-bangun">Bab {halamanAktif + 1}: {bangun.toUpperCase()}</h3>
          <div className="buku-scroll">
            <div className="visual-area">
              <span className="ikon-besar">{visualBangun[bangun]}</span>
            </div>
            <div className="konten-ebook">
              <h4>📖 Teori & Sifat Bangun</h4>
              <p>{dataBuku[bangun].deskripsi}</p>
              <h4>📐 Kumpulan Rumus Lengkap</h4>
              <p className="teks-rumus">{dataBuku[bangun].rumus}</p>
              <h4>📝 Contoh Soal & Pembahasan</h4>
              {dataBuku[bangun].contoh.map((item, index) => (
                <p key={index} className="teks-contoh">{item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* --- HALAMAN KANAN: UJI COBA (LATIHAN SOAL) --- */}
        <div className="book-page right-page">
          <h3 className="judul-kalkulator">Uji Pemahaman: {bangun.toUpperCase()}</h3>
          <p className="petunjuk-kalkulator">Ayo coba kerjakan soal di bawah ini tanpa melihat jawaban teman!</p>
          
          <div className="form-kalkulator">
            <h4 style={{marginBottom: '15px', color: '#444', lineHeight: '1.5'}}>
              Pertanyaan:<br/>
              <span style={{fontWeight: 'normal'}}>{dataUjiCoba[bangun].soal}</span>
            </h4>
            
            {/* Opsi Pilihan Ganda */}
            <div className="opsi-latihan-grid">
              {dataUjiCoba[bangun].opsi.map((opsi, index) => {
                let tombolClass = "btn-opsi-latihan";
                // Warnai tombol jika sudah dijawab
                if (statusJawaban !== '') {
                  if (opsi === dataUjiCoba[bangun].jawaban) {
                    tombolClass += " benar"; // Opsi yang benar warna hijau
                  } else if (opsi === jawabanDipilih && opsi !== dataUjiCoba[bangun].jawaban) {
                    tombolClass += " salah"; // Opsi salah yang diklik warna merah
                  }
                }

                return (
                  <button 
                    key={index} 
                    className={tombolClass} 
                    onClick={() => handleJawab(opsi)}
                    disabled={statusJawaban !== ''} // Kunci tombol setelah dijawab
                  >
                    {opsi}
                  </button>
                );
              })}
            </div>
            
            {/* Munculkan Hasil & Pembahasan setelah dijawab */}
            {statusJawaban !== '' && (
              <div className={`hasil-box fade-in ${statusJawaban === 'Benar' ? 'box-hijau' : 'box-merah'}`}>
                <h4 style={{marginBottom: '10px'}}>
                  {statusJawaban === 'Benar' ? '🎉 Yeay, Jawabanmu Benar!' : '❌ Oops, Masih Kurang Tepat!'}
                </h4>
                <p><strong>Pembahasan:</strong></p>
                <p>{dataUjiCoba[bangun].pembahasan}</p>
                
                <button 
                  className="btn-hitung" 
                  style={{marginTop: '15px'}} 
                  onClick={() => {setJawabanDipilih(null); setStatusJawaban('');}}
                >
                  Coba Jawab Ulang
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="book-navigation">
        <button className="btn-navigasi" onClick={lembarSebelumnya} disabled={halamanAktif === 0}>
          &laquo; Lembar Sebelumnya
        </button>
        <span className="indikator-halaman">
          Halaman {halamanAktif + 1} dari {daftarBangun.length}
        </span>
        <button className="btn-navigasi" onClick={lembarBerikutnya} disabled={halamanAktif === daftarBangun.length - 1}>
          Lembar Selanjutnya &raquo;
        </button>
      </div>
    </div>
  );
};

export default Materi;