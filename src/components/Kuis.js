// src/components/Kuis.js
import React, { useState } from 'react';

// Menerima dataSoal dari App.js (yang bisa diedit oleh Guru)
const Kuis = ({ dataSoal }) => {
  const [indexSoal, setIndexSoal] = useState(0);
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);

  const handleJawab = (opsi) => {
    if (opsi === dataSoal[indexSoal].jawaban) {
      setSkor(skor + (100 / dataSoal.length));
    }
    if (indexSoal + 1 < dataSoal.length) {
      setIndexSoal(indexSoal + 1);
    } else {
      setSelesai(true);
    }
  };

  return (
    <div className="game-container fade-in">
      <h2 style={{color: 'white', marginBottom: '10px'}}>📝 Kuis Akhir</h2>
      {selesai ? (
        <div className="hasil-game">
          <h3>Selesai! 🎉</h3>
          <span className={`skor-teks ${skor >= 70 ? 'text-hijau' : 'text-merah'}`}>{Math.round(skor)}</span>
          <button className="btn-hitung" onClick={() => {setSkor(0); setIndexSoal(0); setSelesai(false);}}>Ulangi</button>
        </div>
      ) : (
        <div className="soal-card">
          <p className="soal-teks">Soal {indexSoal + 1} / {dataSoal.length}</p>
          <h3>{dataSoal[indexSoal].soal}</h3>
          <div className="opsi-grid">
            {dataSoal[indexSoal].opsi.map((opsi, idx) => (
              <button key={idx} className="btn-opsi" onClick={() => handleJawab(opsi)}>{opsi}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Kuis;