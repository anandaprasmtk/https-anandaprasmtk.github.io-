import React, { useState, useEffect } from 'react';

const Materi = ({ updateProgress }) => {
  const daftarBangun = ['kubus', 'balok', 'tabung', 'kerucut', 'bola', 'limas'];
  const [halamanAktif, setHalamanAktif] = useState(0);
  const [jawabanDipilih, setJawabanDipilih] = useState(null);
  const [statusJawaban, setStatusJawaban] = useState('');
  const [bukaEbook, setBukaEbook] = useState(false);
  
  // MASUKKAN LINK EBOOK HEYZINE / ONLINE KAMU DISINI
  const linkEbookOnline = "https://heyzine.com/flip-book/8f1a262145.html#page/4";
  const bangun = daftarBangun[halamanAktif];

  useEffect(() => { 
    setJawabanDipilih(null); setStatusJawaban(''); 
  }, [halamanAktif]);

  useEffect(() => {
    if(updateProgress) updateProgress('bacaMateri', 'Selesai'); 
  }, [updateProgress]);

  const dataBuku = {
    kubus: { deskripsi: "Kubus adalah bangun ruang sisi datar yang semua sisinya berbentuk persegi.", rumus: "V = s × s × s\nL = 6 × s²", contoh: ["1. Jika s=5, maka V = 125."] },
    balok: { deskripsi: "Balok dibatasi oleh enam buah sisi berbentuk persegi panjang.", rumus: "V = p × l × t\nL = 2(pl + pt + lt)", contoh: ["1. Jika p=10, l=5, t=2, maka V = 100."] },
    tabung: { deskripsi: "Tabung dibatasi dua sisi lingkaran sejajar serta satu selimut.", rumus: "V = π × r² × t", contoh: ["1. Jika r=7, t=10, maka V = 1.540."] },
    kerucut: { deskripsi: "Kerucut memiliki satu alas lingkaran dan satu titik puncak.", rumus: "V = ⅓ × π × r² × t", contoh: ["1. Jika r=7, t=24, maka V = 1.232."] },
    bola: { deskripsi: "Bola berbentuk bulat sempurna tanpa titik sudut.", rumus: "V = 4/3 × π × r³", contoh: ["1. Jika r=7, maka Luas = 616."] },
    limas: { deskripsi: "Limas memiliki alas segi banyak, dan sisi tegak segitiga.", rumus: "V = ⅓ × Luas Alas × tinggi", contoh: ["1. Jika Luas Alas=100, t=12, V = 400."] }
  };
  const dataUjiCoba = {
    kubus: { soal: "Rubik kubus memiliki panjang sisi 6 cm. Volumenya?", opsi: ["36", "108", "216", "312"], jawaban: "216", pembahasan: "V = 6 × 6 × 6 = 216." },
    balok: { soal: "Luas permukaan balok p=5, l=3, t=2?", opsi: ["30", "62", "124", "50"], jawaban: "62", pembahasan: "L = 2(15 + 10 + 6) = 62." },
    tabung: { soal: "Volume gelas tabung r=7, t=10?", opsi: ["1.540", "2.200", "154", "770"], jawaban: "1.540", pembahasan: "V = 22/7 × 7 × 7 × 10 = 1.540." },
    kerucut: { soal: "Luas selimut kerucut r=7, s=25?", opsi: ["175", "350", "550", "700"], jawaban: "550", pembahasan: "L = 22/7 × 7 × 25 = 550." },
    bola: { soal: "Luas permukaan bola r=7?", opsi: ["616", "154", "4312", "88"], jawaban: "616", pembahasan: "L = 4 × 22/7 × 7² = 616." },
    limas: { soal: "Volume limas L.Alas=100, t=12?", opsi: ["1.200", "400", "600", "300"], jawaban: "400", pembahasan: "V = ⅓ × 100 × 12 = 400." }
  };

  const visualBangun = { kubus: "📦", balok: "🧱", tabung: "🛢️", kerucut: "🍦", bola: "⚽", limas: "⛺" };
  const lembarBerikutnya = () => { if (halamanAktif < daftarBangun.length - 1) setHalamanAktif(halamanAktif + 1); };
  const lembarSebelumnya = () => { if (halamanAktif > 0) setHalamanAktif(halamanAktif - 1); };
  const handleJawab = (opsi) => { setJawabanDipilih(opsi); setStatusJawaban(opsi === dataUjiCoba[bangun].jawaban ? 'Benar' : 'Salah'); };

  return (
    <div className="materi-container fade-in">
      <h2 className="judul-buku">Buku Pintar Bangun Ruang</h2>
      <div className="ebook-download-section fade-in">
        {!bukaEbook ? (
          <><button className="btn-unduh-ebook" onClick={() => setBukaEbook(true)}>📖 Buka E-Book Lengkap</button>
          <p className="hint-ebook">Klik tombol di atas untuk membaca E-Book interaktif tanpa keluar dari website!</p></>
        ) : (
          <div className="iframe-container fade-in">
            <div className="iframe-header"><h3 style={{color: '#FFD54F'}}>E-Book Materi</h3><button className="btn-tutup-ebook" onClick={() => setBukaEbook(false)}>✖ Tutup</button></div>
            <iframe src={linkEbookOnline} title="E-Book Lengkap" className="iframe-ebook" allowFullScreen></iframe>
          </div>
        )}
      </div>

      <div className="ebook-wrapper">
        <div className="book-page left-page">
          <h3 className="nama-bangun">Bab {halamanAktif + 1}: {bangun.toUpperCase()}</h3>
          <div className="buku-scroll">
            <div className="visual-area"><span className="ikon-besar">{visualBangun[bangun]}</span></div>
            <div className="konten-ebook">
              <h4>📖 Teori</h4><p>{dataBuku[bangun].deskripsi}</p>
              <h4>📐 Rumus</h4><p className="teks-rumus">{dataBuku[bangun].rumus}</p>
              <h4>📝 Contoh</h4>{dataBuku[bangun].contoh.map((item, idx) => <p key={idx} className="teks-contoh">{item}</p>)}
            </div>
          </div>
        </div>
        <div className="book-page right-page">
          <h3 className="judul-kalkulator">Uji Pemahaman: {bangun.toUpperCase()}</h3>
          <div className="form-kalkulator">
            <h4 style={{marginBottom: '15px'}}>{dataUjiCoba[bangun].soal}</h4>
            <div className="opsi-latihan-grid">
              {dataUjiCoba[bangun].opsi.map((opsi, idx) => {
                let btnClass = "btn-opsi-latihan";
                if (statusJawaban !== '') { if (opsi === dataUjiCoba[bangun].jawaban) btnClass += " benar"; else if (opsi === jawabanDipilih) btnClass += " salah"; }
                return <button key={idx} className={btnClass} onClick={() => handleJawab(opsi)} disabled={statusJawaban !== ''}>{opsi}</button>
              })}
            </div>
            {statusJawaban !== '' && (
              <div className={`hasil-box fade-in ${statusJawaban === 'Benar' ? 'box-hijau' : 'box-merah'}`}>
                <h4>{statusJawaban === 'Benar' ? '🎉 Benar!' : '❌ Kurang Tepat!'}</h4>
                <p>{dataUjiCoba[bangun].pembahasan}</p>
                <button className="btn-hitung" onClick={() => {setJawabanDipilih(null); setStatusJawaban('');}}>Coba Ulang</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="book-navigation"><button className="btn-navigasi" onClick={lembarSebelumnya} disabled={halamanAktif === 0}>&laquo; Sebelumnya</button><button className="btn-navigasi" onClick={lembarBerikutnya} disabled={halamanAktif === daftarBangun.length - 1}>Selanjutnya &raquo;</button></div>
    </div>
  );
};
export default Materi;