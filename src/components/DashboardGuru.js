// src/components/DashboardGuru.js
import React, { useState } from 'react';

// Menerima data dan fungsi pengubah dari App.js
const DashboardGuru = ({ linkVidio, setLinkVidio, soalKuis, setSoalKuis }) => {
  const [tabAktif, setTabAktif] = useState('murid'); // Default tab adalah data murid
  const [inputVidio, setInputVidio] = useState(linkVidio);

  const dataMurid = [
    { id: 1, nama: "Andi Saputra", bacaMateri: "Selesai", mainGame: "Selesai", skorKuis: 100 },
    { id: 2, nama: "Budi Santoso", bacaMateri: "Selesai", mainGame: "Selesai", skorKuis: 75 },
    { id: 3, nama: "Citra Kirana", bacaMateri: "Sebagian", mainGame: "Belum", skorKuis: 50 }
  ];

  // Fungsi untuk menyimpan perubahan URL Vidio
  const simpanVidio = () => {
    setLinkVidio(inputVidio);
    alert("Vidio berhasil diperbarui!");
  };

  // Fungsi untuk mengubah teks soal kuis spesifik
  const ubahTeksSoal = (index, teksBaru) => {
    const soalBaru = [...soalKuis];
    soalBaru[index].soal = teksBaru;
    setSoalKuis(soalBaru);
  };

  return (
    <div className="dashboard-container fade-in">
      <h2>👩‍🏫 Panel Admin Guru</h2>
      
      {/* Menu Tab Guru */}
      <div className="admin-tabs">
        <button className={tabAktif === 'murid' ? 'active' : ''} onClick={() => setTabAktif('murid')}>👥 Data Murid</button>
        <button className={tabAktif === 'vidio' ? 'active' : ''} onClick={() => setTabAktif('vidio')}>🎥 Edit Vidio</button>
        <button className={tabAktif === 'kuis' ? 'active' : ''} onClick={() => setTabAktif('kuis')}>📝 Edit Kuis</button>
        <button className={tabAktif === 'materi' ? 'active' : ''} onClick={() => setTabAktif('materi')}>📚 Edit Materi</button>
        <button className={tabAktif === 'game' ? 'active' : ''} onClick={() => setTabAktif('game')}>🎮 Edit Game</button>
      </div>

      <div className="admin-content">
        {/* --- TAB DATA MURID --- */}
        {tabAktif === 'murid' && (
          <div className="tabel-wrapper fade-in">
            <h3>Perkembangan Belajar Siswa</h3>
            <table className="tabel-guru">
              <thead><tr><th>Nama Siswa</th><th>Materi</th><th>Game</th><th>Skor Kuis</th></tr></thead>
              <tbody>
                {dataMurid.map((m) => (
                  <tr key={m.id}>
                    <td style={{fontWeight: 'bold', textAlign:'left'}}>{m.nama}</td>
                    <td className={m.bacaMateri === 'Selesai' ? 'text-hijau' : 'text-merah'}>{m.bacaMateri}</td>
                    <td className={m.mainGame === 'Selesai' ? 'text-hijau' : 'text-merah'}>{m.mainGame}</td>
                    <td><span className={`badge-skor ${m.skorKuis >= 80 ? 'skor-tinggi' : m.skorKuis > 0 ? 'skor-sedang' : 'skor-nol'}`}>{m.skorKuis}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* --- TAB EDIT VIDIO --- */}
        {tabAktif === 'vidio' && (
          <div className="form-edit fade-in">
            <h3>Ganti Vidio Pembelajaran</h3>
            <p style={{marginBottom: '10px', color: '#555'}}>Masukkan URL *Embed* Youtube terbaru di sini:</p>
            <input 
              type="text" 
              value={inputVidio} 
              onChange={(e) => setInputVidio(e.target.value)} 
              style={{width: '100%', padding: '10px', marginBottom: '15px'}}
            />
            <button className="btn-hitung" onClick={simpanVidio}>Simpan Vidio</button>
          </div>
        )}

        {/* --- TAB EDIT KUIS --- */}
        {tabAktif === 'kuis' && (
          <div className="form-edit fade-in">
            <h3>Daftar Soal Kuis Murid</h3>
            {soalKuis.map((item, index) => (
              <div key={index} className="soal-edit-card">
                <label>Soal Nomor {index + 1}:</label>
                <textarea 
                  value={item.soal} 
                  onChange={(e) => ubahTeksSoal(index, e.target.value)}
                  rows="3"
                />
                <p><strong>Jawaban Benar:</strong> {item.jawaban}</p>
              </div>
            ))}
            <button className="btn-hitung" onClick={() => alert("Soal kuis tersimpan otomatis!")}>Simpan Semua Soal</button>
          </div>
        )}

        {/* --- TAB MATERI & GAME (Placeholder untuk pengembangan selanjutnya) --- */}
        {(tabAktif === 'materi' || tabAktif === 'game') && (
          <div className="form-edit fade-in" style={{textAlign: 'center', padding: '40px 0'}}>
            <span style={{fontSize: '50px'}}>🚧</span>
            <h3>Fitur Sedang Dalam Pengembangan</h3>
            <p>Fitur untuk mengubah {tabAktif} secara dinamis membutuhkan struktur database (Backend) yang lebih kompleks. Nantikan pembaruan versi 2.0!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardGuru;