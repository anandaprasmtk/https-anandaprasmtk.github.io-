import React, { useState, useCallback } from 'react';
import './style.css';
import Materi from './components/Materi';
import Game from './components/Game';
import GameTambahan from './components/GameTambahan'; // Import Game Baru
import Login from './components/Login';
import DashboardGuru from './components/DashboardGuru';
import Kuis from './components/Kuis';
import Profil from './components/Profil';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userName, setUserName] = useState('');
  const [halamanAktif, setHalamanAktif] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [dataSiswa, setDataSiswa] = useState([]);
  
  const [linkVidio, setLinkVidio] = useState("https://www.youtube.com/embed/mSoKyLJehYM?si=yGLrBcFcK52UXAfI8");
  const [tujuanPembelajaran, setTujuanPembelajaran] = useState("1. Memahami sifat bangun ruang.\n2. Menghitung volume dan luas permukaan dengan tepat.\n3. Mampu menyelesaikan masalah kontekstual.");
  
  const [soalKuis, setSoalKuis] = useState([
    { soal: "Sebuah kertas karton digunting hingga berbentuk jaring-jaring kubus dengan luas daerah 54 cm². Volume kubus tersebut adalah...", opsi: ["9 cm³", "18 cm³", "27 cm³", "81 cm³"], jawaban: "27 cm³", pembahasan: "Luas permukaan = 6 × s² = 54. Maka s² = 9, sehingga s = 3 cm. Volume = s × s × s = 3 × 3 × 3 = 27 cm³." },
    { soal: "Bak penampung air berbentuk kubus (tanpa tutup) kedalaman 1m. Akan dilapisi keramik 10cm x 10cm. Banyak keramik yang diperlukan adalah...", opsi: ["400 buah", "500 buah", "50.000 buah", "600 buah"], jawaban: "500 buah", pembahasan: "Luas bak tanpa tutup = 5 × (100cm)² = 50.000 cm². Luas 1 keramik = 10×10 = 100 cm². Banyak keramik = 50.000 / 100 = 500 buah." },
    { soal: "Pak Budi memiliki kawat 4m untuk membuat kerangka balok p=30cm, l=25cm, t=15cm. Sisa kawat Pak Budi adalah...", opsi: ["10 cm", "20 cm", "120 cm", "280 cm"], jawaban: "20 cm", pembahasan: "Panjang kawat terpakai = 4(p+l+t) = 4(30+25+15) = 4(70) = 280 cm. Sisa kawat = 400 cm - 280 cm = 20 cm." },
    { soal: "Volume limas dengan alas persegi adalah 48 m³ dan tingginya 4m. Luas permukaannya adalah...", opsi: ["36 m²", "60 m²", "84 m²", "96 m²"], jawaban: "96 m²", pembahasan: "Volume = 1/3 × L.Alas × t -> 48 = 1/3 × L.Alas × 4 -> L.Alas = 36 m². Sisi alas = 6m. Tinggi segitiga selimut = √(3² + 4²) = 5m. Luas Permukaan = L.Alas + 4(Luas Segitiga) = 36 + 4(1/2 × 6 × 5) = 36 + 60 = 96 m²." },
    { soal: "Limas persegi memiliki keliling alas 96 cm dan tinggi 9 cm. Volume limas tersebut adalah...", opsi: ["576 cm³", "864 cm³", "1728 cm³", "5184 cm³"], jawaban: "1728 cm³", pembahasan: "Sisi alas = Keliling / 4 = 96 / 4 = 24 cm. Luas Alas = 24² = 576 cm². Volume = 1/3 × L.Alas × t = 1/3 × 576 × 9 = 1728 cm³." }
  ]);

  const handleLoginSukses = (role, nama) => { 
    setIsLoggedIn(true); setUserRole(role); setUserName(nama); setHalamanAktif(role === 'guru' ? 'dashboard' : 'home'); 
    if (role === 'murid') {
      setShowPopUp(true);
      const isExist = dataSiswa.find(s => s.nama.toLowerCase() === nama.toLowerCase());
      if (!isExist) setDataSiswa([...dataSiswa, { id: Date.now(), nama: nama, bacaMateri: "Belum", mainGame: "Belum", skorKuis: 0 }]);
    }
  };

  const updateProgress = useCallback((kategori, nilai) => {
    setDataSiswa(prevData => prevData.map(siswa => siswa.nama === userName ? { ...siswa, [kategori]: nilai } : siswa));
  }, [userName]);

  const pindahHalaman = (halaman) => { setHalamanAktif(halaman); setIsMenuOpen(false); };

  if (!isLoggedIn) return <Login onLoginSukses={handleLoginSukses} />;

  const renderHalaman = () => {
    if (userRole === 'guru') return <DashboardGuru linkVidio={linkVidio} setLinkVidio={setLinkVidio} soalKuis={soalKuis} setSoalKuis={setSoalKuis} tujuan={tujuanPembelajaran} setTujuan={setTujuanPembelajaran} dataSiswa={dataSiswa} />;
    
    switch (halamanAktif) {
      case 'home': return (
        <div className="home-container fade-in">
          <h2 className="judul-besar">Hai {userName}, Jelajahi Ruang 3D!</h2>
          <button className="btn-mulai" onClick={() => pindahHalaman('materi')}>Mulai Belajar 🚀</button>
          <button className="btn-mulai" style={{background:'#fff', color:'#667eea', marginLeft:'10px'}} onClick={() => setShowPopUp(true)}>🎯 Tujuan</button>
          {showPopUp && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>🎯 Tujuan Pembelajaran</h3>
                <p style={{whiteSpace: 'pre-wrap', textAlign:'left'}}>{tujuanPembelajaran}</p>
                <button className="btn-hitung" style={{marginTop: '20px'}} onClick={() => setShowPopUp(false)}>Siap Belajar!</button>
              </div>
            </div>
          )}
        </div>
      );
      case 'materi': return <Materi updateProgress={updateProgress} />;
      case 'vidio': return (
        <div className="vidio-container fade-in" style={{width:'100%', maxWidth:'800px', margin:'0 auto'}}>
          <h2 className="judul-besar">Vidio Pembelajaran</h2>
          <div style={{position:'relative', paddingBottom:'56.25%', height:0, borderRadius:'15px', overflow:'hidden'}}>
            <iframe style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} src={linkVidio} title="Vidio" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      );
      case 'game': return <Game updateProgress={updateProgress} />;
      case 'gameTambahan': return <GameTambahan />; // Render Game Tambahan
      case 'kuis': return <Kuis dataSoal={soalKuis} updateProgress={updateProgress} />;
      case 'profil': return <Profil />;
      default: return null;
    }
  };

  return (
    <div className="app-wrapper">
      <nav className="navbar-modern">
        <h1 className="logo" onClick={() => pindahHalaman(userRole === 'guru' ? 'dashboard' : 'home')}>Cube<span className="dot">Explorer</span></h1>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? '✖' : '☰'}</div>
        <ul className={`menu-modern ${isMenuOpen ? 'open' : ''}`}>
          {userRole === 'guru' ? <li className="active" onClick={() => setIsMenuOpen(false)}>Admin Panel</li> : (
            <>
              <li onClick={() => pindahHalaman('home')}>Home</li>
              <li onClick={() => pindahHalaman('materi')}>Materi</li>
              <li onClick={() => pindahHalaman('vidio')}>Vidio</li>
              <li onClick={() => pindahHalaman('game')}>Memori</li>
              <li onClick={() => pindahHalaman('gameTambahan')}>Arcade</li> {/* Tombol Menu Arcade */}
              <li onClick={() => pindahHalaman('kuis')} style={{color:'#FFD54F'}}>Kuis</li>
              <li onClick={() => pindahHalaman('profil')}>Profil</li>
            </>
          )}
          <li className="btn-logout" onClick={() => window.location.reload()}>Keluar</li>
        </ul>
      </nav>
      <main className="main-content">{renderHalaman()}</main>
    </div>
  );
}
export default App;