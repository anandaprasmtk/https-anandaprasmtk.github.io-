import React, { useState, useEffect } from 'react';

const Kuis = ({ dataSoal, updateProgress }) => {
  const [indexSoal, setIndexSoal] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const [jawabanSiswa, setJawabanSiswa] = useState([]); 
  
  // Waktu Kuis (40 Menit)
  const waktuMaksimal = 40 * 60; 
  const [waktuSisa, setWaktuSisa] = useState(waktuMaksimal);

  useEffect(() => {
    if (selesai || waktuSisa <= 0) {
      if (waktuSisa <= 0 && !selesai) akhiriKuis();
      return;
    }
    const timer = setInterval(() => setWaktuSisa(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [waktuSisa, selesai]);

  const formatWaktu = (detik) => {
    const m = Math.floor(detik / 60).toString().padStart(2, '0');
    const s = (detik % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const akhiriKuis = (historiJawaban = jawabanSiswa) => {
    setSelesai(true);
    const jumlahBenar = historiJawaban.filter((item) => item.benar).length;
    const skorAkhir = Math.round((jumlahBenar / dataSoal.length) * 100);
    if (updateProgress) updateProgress('skorKuis', skorAkhir);
  };

  const handleJawab = (opsi) => {
    const apakahBenar = opsi === dataSoal[indexSoal].jawaban;
    const historiBaru = [...jawabanSiswa, {
      soal: dataSoal[indexSoal].soal, jawabanPilihan: opsi, jawabanBenar: dataSoal[indexSoal].jawaban, pembahasan: dataSoal[indexSoal].pembahasan, benar: apakahBenar
    }];
    setJawabanSiswa(historiBaru);
    if (indexSoal + 1 < dataSoal.length) setIndexSoal(indexSoal + 1);
    else akhiriKuis(historiBaru);
  };

  if (selesai) {
    const jumlahBenar = jawabanSiswa.filter(j => j.benar).length;
    const skor = Math.round((jumlahBenar / dataSoal.length) * 100);

    return (
      <div className="kuis-review-container fade-in">
        <div className="hasil-game">
          <h3>Kuis Selesai! 🎉</h3>
          <span className={`skor-teks ${skor >= 70 ? 'text-hijau' : 'text-merah'}`}>{skor}</span>
          <p>Kamu menjawab benar {jumlahBenar} dari {dataSoal.length} soal.</p>
        </div>
        <h3 style={{color: 'white', marginTop: '30px', marginBottom: '15px'}}>📋 Review & Pembahasan Newman</h3>
        <div className="review-list">
          {jawabanSiswa.map((item, idx) => (
            <div key={idx} className={`review-card ${item.benar ? 'review-benar' : 'review-salah'}`}>
              <p className="soal-teks-review"><strong>Soal {idx + 1}:</strong> {item.soal}</p>
              <div className="info-jawaban">
                <p>Jawabanmu: <span className={item.benar ? "badge-hijau" : "badge-merah"}>{item.jawabanPilihan}</span></p>
                {!item.benar && <p>Jawaban Benar: <span className="badge-hijau">{item.jawabanBenar}</span></p>}
              </div>
              <div className="box-pembahasan"><strong>💡 Pembahasan:</strong><p>{item.pembahasan}</p></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="game-container fade-in">
      <div className="header-kuis">
        <h2 style={{color: 'white', margin: 0}}>📝 Ujian Evaluasi</h2>
        <div className={`timer-badge ${waktuSisa < 300 ? 'waktu-kritis' : ''}`}>⏳ {formatWaktu(waktuSisa)}</div>
      </div>
      <div className="soal-card">
        <p className="soal-teks">Soal {indexSoal + 1} dari {dataSoal.length}</p>
        <h3 style={{lineHeight: '1.5', marginTop: '10px'}}>{dataSoal[indexSoal].soal}</h3>
        <div className="opsi-grid">
          {dataSoal[indexSoal].opsi.map((opsi, idx) => (
            <button key={idx} className="btn-opsi" onClick={() => handleJawab(opsi)}>{opsi}</button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Kuis;