import React from 'react';

// Tambahkan '/image/' pada jalurnya agar React masuk ke folder tersebut
// import fotoDosen from '../image/dosen.jpg';
import fotoMhs1 from '../image/mhs1.jpg';
import fotoMhs2 from '../image/mhs2.jpg';
import fotoMhs3 from '../image/mhs3.jpg';

const Profil = () => {
// ... (kode ke bawahnya tetap sama)
  return (
    <div className="profil-container fade-in" style={{ padding: '20px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 className="judul-besar" style={{ marginBottom: '40px' }}>Kenalan Yuk! ⚓</h2>
      
      {/* ==========================================
          BAGIAN ATAS: 1 DOSEN PENGAMPU (Di Tengah)
          ========================================== */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
        <div className="profil-card fade-in" style={{ 
            transform: 'scale(1.05)', 
            border: '6px solid #FFD54F', 
            boxShadow: '0 25px 50px rgba(255, 213, 79, 0.3)',
            width: '100%',
            maxWidth: '350px',
            zIndex: 10
          }}>
          <div className="profil-img-placeholder" style={{ borderColor: '#FFD54F', background: '#fffbeb', margin: '0 auto 20px', padding: 0, overflow: 'hidden' }}>
            
            {/* GANTI GAMBAR DOSEN DI SINI */}
            <img 
              src="https://ui-avatars.com/api/?name=Dosen+Pengampu&background=FFD54F&color=1e3a8a&size=150" 
              alt="Foto Dosen" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
            />
            {/* Jika pakai foto asli, ganti baris src di atas menjadi: src={fotoDosen} */}

          </div>
          <h3 style={{ fontSize: '24px', color: '#1e3a8a' }}>Robia Astuti, M.Pd</h3>
          <p style={{ color: '#0ea5e9', fontWeight: 'bold', margin: '5px 0 15px 0' }}>Dosen Pengampu</p>
          <div className="profil-info" style={{ background: '#fef3c7', color: '#b45309', border: '2px dashed #f59e0b' }}>
            Mata Kuliah:<br/>
            Media Pembelajaran Matematika Berbasis ICT
          </div>
        </div>
      </div>

      <h3 style={{ color: '#1e3a8a', marginBottom: '25px', fontSize: '1.8rem', fontWeight: '900', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
        Tim Pengembang Mahasiswa 🚀
      </h3>

      {/* ==========================================
          BAGIAN BAWAH: 3 MAHASISWA
          ========================================== */}
      <div className="profil-grid">
        
        {/* Mahasiswa 1 */}
        <div className="profil-card fade-in">
          <div className="profil-img-placeholder" style={{ margin: '0 auto 20px', padding: 0, overflow: 'hidden' }}>
           <img src={fotoMhs1} alt="Foto Mhs 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <h3>VITA PUTRI RATANGGI</h3>
          <p style={{ color: '#64748b', fontWeight: 'bold' }}>Ketua Tim / Anggota</p>
          <div className="profil-info">
            NIM: 2025406402019<br/>
            Pendidikan Matematika
          </div>
        </div>

        {/* Mahasiswa 2 */}
        <div className="profil-card fade-in">
          <div className="profil-img-placeholder" style={{ margin: '0 auto 20px', padding: 0, overflow: 'hidden' }}>
             <img src={fotoMhs2} alt="Foto Mhs 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <h3>SITI MAHMUDA</h3>
          <p style={{ color: '#64748b', fontWeight: 'bold' }}>Anggota Tim</p>
          <div className="profil-info">
            NIM: 2025406402007<br/>
            Pendidikan Matematika
          </div>
        </div>

        {/* Mahasiswa 3 */}
        <div className="profil-card fade-in">
          <div className="profil-img-placeholder" style={{ margin: '0 auto 20px', padding: 0, overflow: 'hidden' }}>
             <img src={fotoMhs3} alt="Foto Mhs 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <h3>ANANDA PRASETIYO</h3>
          <p style={{ color: '#64748b', fontWeight: 'bold' }}>Anggota Tim</p>
          <div className="profil-info">
            NIM: 2025406402025<br/>
            Pendidikan Matematika
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Profil;