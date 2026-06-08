import React, { useState } from 'react';

const DashboardGuru = ({ linkVidio, setLinkVidio, soalKuis, setSoalKuis, tujuan, setTujuan, dataSiswa }) => {
  const [tabAktif, setTabAktif] = useState('murid');
  const [inputVidio, setInputVidio] = useState(linkVidio);
  const [inputTujuan, setInputTujuan] = useState(tujuan);

  const simpanVidio = () => { setLinkVidio(inputVidio); alert("Vidio diperbarui!"); };
  const simpanTujuan = () => { setTujuan(inputTujuan); alert("Tujuan diperbarui!"); };
  
  const ubahTeksSoal = (index, teksBaru) => { 
    const soalBaru = [...soalKuis]; soalBaru[index].soal = teksBaru; setSoalKuis(soalBaru); 
  };

  const ubahOpsi = (soalIndex, opsiIndex, teksBaru) => {
    const soalBaru = [...soalKuis];
    const opsiLama = soalBaru[soalIndex].opsi[opsiIndex];
    soalBaru[soalIndex].opsi[opsiIndex] = teksBaru;
    
    if (soalBaru[soalIndex].jawaban === opsiLama) {
      soalBaru[soalIndex].jawaban = teksBaru;
    }
    setSoalKuis(soalBaru);
  };

  const ubahJawaban = (soalIndex, teksBaru) => {
    const soalBaru = [...soalKuis]; soalBaru[soalIndex].jawaban = teksBaru; setSoalKuis(soalBaru);
  };

  const ubahPembahasan = (soalIndex, teksBaru) => {
    const soalBaru = [...soalKuis]; soalBaru[soalIndex].pembahasan = teksBaru; setSoalKuis(soalBaru);
  };

  return (
    <div className="dashboard-container fade-in">
      <h2>👩‍🏫 Panel Admin Guru</h2>
      <div className="admin-tabs">
        <button className={tabAktif === 'murid' ? 'active' : ''} onClick={() => setTabAktif('murid')}>👥 Data Murid</button>
        <button className={tabAktif === 'tujuan' ? 'active' : ''} onClick={() => setTabAktif('tujuan')}>🎯 Edit Tujuan</button>
        <button className={tabAktif === 'vidio' ? 'active' : ''} onClick={() => setTabAktif('vidio')}>🎥 Edit Vidio</button>
        <button className={tabAktif === 'kuis' ? 'active' : ''} onClick={() => setTabAktif('kuis')}>📝 Edit Kuis</button>
      </div>

      <div className="admin-content">
        {/* Tab Data Murid */}
        {tabAktif === 'murid' && (
          <div className="tabel-wrapper fade-in">  {/* BUNGKUSAN INI SANGAT PENTING */}
            <table className="tabel-guru">
              <thead>
                <tr>
                  <th>No & Nama</th>
                  <th>Materi</th>
                  <th>Game</th>
                  <th>Skor Kuis</th>
                </tr>
              </thead>
              <tbody>
                {dataSiswa.length === 0 ? (
                  <tr><td colSpan="4" style={{padding: '20px'}}>Belum ada awak kapal (siswa) yang mendaftar hari ini.</td></tr>
                ) : (
                  dataSiswa.map((siswa, index) => (
                    <tr key={siswa.id}>
                      <td style={{fontWeight: 'bold', textAlign:'left'}}>{index + 1}. {siswa.nama}</td>
                      <td className={siswa.bacaMateri === 'Selesai' ? 'text-hijau' : 'text-merah'}>{siswa.bacaMateri}</td>
                      <td className={siswa.mainGame === 'Selesai' ? 'text-hijau' : 'text-merah'}>{siswa.mainGame}</td>
                      <td><span className={`badge-skor ${siswa.skorKuis >= 70 ? 'skor-tinggi' : siswa.skorKuis > 0 ? 'skor-sedang' : 'skor-nol'}`}>{siswa.skorKuis}</span></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {tabAktif === 'tujuan' && (
          <div className="form-edit fade-in">
            <h3>Edit Tujuan Pembelajaran</h3>
            <p className="instruksi-edit">Teks ini akan muncul sebagai Pop-up murid saat login.</p>
            <textarea value={inputTujuan} onChange={(e) => setInputTujuan(e.target.value)} rows="5" />
            <button className="btn-hitung" onClick={simpanTujuan}>Simpan Tujuan</button>
          </div>
        )}

        {tabAktif === 'vidio' && (
          <div className="form-edit fade-in">
            <h3>Ganti Vidio Youtube</h3>
            <input type="text" value={inputVidio} onChange={(e) => setInputVidio(e.target.value)} />
            <button className="btn-hitung" onClick={simpanVidio}>Simpan Vidio</button>
          </div>
        )}

        {tabAktif === 'kuis' && (
          <div className="form-edit fade-in">
            <h3>Edit Daftar Soal, Opsi, dan Pembahasan</h3>
            {soalKuis.map((item, index) => (
              <div key={index} className="soal-edit-card">
                <label>📝 Soal {index + 1}:</label>
                <textarea value={item.soal} onChange={(e) => ubahTeksSoal(index, e.target.value)} rows="3" />

                <label className="label-biru">Pilihan Ganda (Opsi):</label>
                <div className="opsi-edit-grid">
                  {item.opsi.map((ops, oIdx) => (
                    <input 
                      key={oIdx} type="text" value={ops} 
                      onChange={(e) => ubahOpsi(index, oIdx, e.target.value)} 
                      placeholder={`Opsi ${oIdx + 1}`} 
                    />
                  ))}
                </div>

                <label className="label-hijau">✅ Kunci Jawaban Benar:</label>
                <select value={item.jawaban} onChange={(e) => ubahJawaban(index, e.target.value)}>
                  <option value="" disabled>Pilih Kunci Jawaban</option>
                  {item.opsi.map((ops, oIdx) => (
                    <option key={oIdx} value={ops}>{ops}</option>
                  ))}
                </select>

                <label className="label-oranye">💡 Pembahasan / Analisis Kesalahan:</label>
                <textarea value={item.pembahasan} onChange={(e) => ubahPembahasan(index, e.target.value)} rows="3" />
              </div>
            ))}
            <button className="btn-hitung" onClick={() => alert("Perubahan pada soal berhasil disimpan!")}>Simpan Semua Perubahan</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardGuru;