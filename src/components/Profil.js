import React from 'react';

const Profil = () => {
  const dataMahasiswa = [
    { id: 1, nama: "Nama Mahasiswa 1", nim: "123456781", tugas: "UI/UX Designer", foto: "👨‍💻" },
    { id: 2, nama: "Nama Mahasiswa 2", nim: "123456782", tugas: "Frontend Developer", foto: "👩‍💻" },
    { id: 3, nama: "Nama Mahasiswa 3", nim: "123456783", tugas: "Project Manager", foto: "👨‍💻" }
  ];

  return (
    <div className="profil-container fade-in">
      <h2 className="judul-besar">Profil Tim Pembuat</h2>
      <p style={{marginBottom: '30px', color: 'white'}}>Kenalan dengan tim hebat di balik website ini!</p>
      <div className="profil-grid">
        {dataMahasiswa.map((mhs) => (
          <div className="profil-card" key={mhs.id}>
            <div className="profil-img-placeholder">{mhs.foto}</div>
            <h3 className="nama-mhs">{mhs.nama}</h3>
            <p className="tugas-mhs">{mhs.tugas}</p>
            <div className="profil-info"><p>NIM: {mhs.nim}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Profil;