// src/components/Profil.js
import React from 'react';

const Profil = () => {
  // Data 3 Mahasiswa (Silakan ganti nama dan NIM di bawah ini dengan data asli tim kalian!)
  const dataMahasiswa = [
    { 
      id: 1, 
      nama: "Nama Mahasiswa 1", 
      nim: "123456781", 
      tugas: "UI/UX Designer", // Boleh diganti atau dihapus
      foto: "👨‍💻" // Bisa diganti gambar asli nanti
    },
    { 
      id: 2, 
      nama: "Nama Mahasiswa 2", 
      nim: "123456782", 
      tugas: "Frontend Developer", 
      foto: "👩‍💻" 
    },
    { 
      id: 3, 
      nama: "Nama Mahasiswa 3", 
      nim: "123456783", 
      tugas: "Project Manager", 
      foto: "👨‍💻" 
    }
  ];

  return (
    <div className="profil-container fade-in">
      <h2 className="judul-besar">Profil Tim Pembuat</h2>
      <p style={{marginBottom: '30px'}}>Kenalan lebih dekat dengan mahasiswa-mahasiswi hebat di balik website ini!</p>
      
      <div className="profil-grid">
        {/* Melakukan perulangan (map) untuk menampilkan ke-3 mahasiswa secara otomatis */}
        {dataMahasiswa.map((mhs) => (
          <div className="profil-card" key={mhs.id}>
            {/* Bagian Foto */}
            <div className="profil-img-placeholder">
              {mhs.foto}
            </div>
            
            {/* Bagian Nama & Tugas */}
            <h3 className="nama-mhs">{mhs.nama}</h3>
            <p className="tugas-mhs">{mhs.tugas}</p>
            
            {/* Bagian NIM */}
            <div className="profil-info">
              <p>NIM: {mhs.nim}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profil;