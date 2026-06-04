// src/components/Game.js
import React, { useState, useEffect } from 'react';

// Daftar pasangan kartu: Nama Bangun Ruang dan Ikon/Gambarnya
const daftarKartu = [
  { type: 'kubus', content: 'Kubus' },
  { type: 'kubus', content: '📦' },
  { type: 'balok', content: 'Balok' },
  { type: 'balok', content: '🧱' },
  { type: 'tabung', content: 'Tabung' },
  { type: 'tabung', content: '🛢️' },
  { type: 'kerucut', content: 'Kerucut' },
  { type: 'kerucut', content: '🍦' },
  { type: 'bola', content: 'Bola' },
  { type: 'bola', content: '⚽' },
  { type: 'limas', content: 'Limas' },
  { type: 'limas', content: '⛺' }
];

const Game = () => {
  const [kartu, setKartu] = useState([]);
  const [kartuTerbuka, setKartuTerbuka] = useState([]);
  const [kartuCocok, setKartuCocok] = useState([]);
  const [langkah, setLangkah] = useState(0);

  // Fungsi untuk mengacak posisi kartu saat game dimulai
  const acakKartu = () => {
    const kartuDiacak = [...daftarKartu]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ ...item, id: index }));
    
    setKartu(kartuDiacak);
    setKartuTerbuka([]);
    setKartuCocok([]);
    setLangkah(0);
  };

  // Jalankan fungsi acak kartu saat komponen pertama kali dimuat
  useEffect(() => {
    acakKartu();
  }, []);

  // Logika saat kartu diklik
  const handleKlikKartu = (index) => {
    // Abaikan jika kartu sudah terbuka, sudah cocok, atau jika sedang membuka 2 kartu
    if (kartuTerbuka.length === 2 || kartuTerbuka.includes(index) || kartuCocok.includes(kartu[index].type)) {
      return;
    }

    const kartuBaru = [...kartuTerbuka, index];
    setKartuTerbuka(kartuBaru);

    // Jika sudah ada 2 kartu yang terbuka, cek kecocokannya
    if (kartuBaru.length === 2) {
      setLangkah(langkah + 1);
      const kartuPertama = kartu[kartuBaru[0]];
      const kartuKedua = kartu[kartuBaru[1]];

      if (kartuPertama.type === kartuKedua.type) {
        // Jika cocok, masukkan ke daftar kartu cocok
        setKartuCocok([...kartuCocok, kartuPertama.type]);
        setKartuTerbuka([]);
      } else {
        // Jika tidak cocok, tutup kembali setelah 1 detik
        setTimeout(() => {
          setKartuTerbuka([]);
        }, 1000);
      }
    }
  };

  // Cek apakah pemain sudah memenangkan game (semua pasangan ditemukan)
  const isMenang = kartuCocok.length === daftarKartu.length / 2;

  return (
    <div className="game-container fade-in">
      <h2>Let's Play Game! 🎮</h2>
      <p>Latih ingatanmu! Cocokkan nama bangun ruang dengan bentuknya.</p>
      <p className="moves-text">Jumlah Langkahmu: {langkah}</p>

      {isMenang ? (
        <div className="hasil-game fade-in">
          <h3>Hore! Kamu Hebat! 🎉</h3>
          <p>Kamu berhasil menyelesaikan game dalam <span className="skor-teks">{langkah}</span> langkah.</p>
          <button className="btn-hitung" onClick={acakKartu}>Main Lagi</button>
        </div>
      ) : (
        <div className="memory-grid">
          {kartu.map((item, index) => {
            // Kartu dianggap membalik jika sedang diklik atau sudah cocok
            const isFlipped = kartuTerbuka.includes(index) || kartuCocok.includes(item.type);
            
            return (
              <div 
                key={item.id} 
                className={`memory-card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => handleKlikKartu(index)}
              >
                <div className="memory-card-inner">
                  {/* Tampilan Belakang Kartu (Tertutup) */}
                  <div className="memory-card-front">
                    <span>❓</span>
                  </div>
                  {/* Tampilan Depan Kartu (Terbuka) */}
                  <div className="memory-card-back">
                    <span>{item.content}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Game;