// src/App.js
import React, { useState } from 'react';
import './style.css';
import Materi from './components/Materi';
import Game from './components/Game';
import Login from './components/Login';
import DashboardGuru from './components/DashboardGuru';
import Kuis from './components/Kuis';
import Profil from './components/Profil';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [halamanAktif, setHalamanAktif] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- MEMORI GLOBAL (Bisa diedit Guru, dilihat Murid) ---
  const [linkVidio, setLinkVidio] = useState("https://www.youtube.com/embed/gW9hL5J1Xh8");
  
  const [soalKuis, setSoalKuis] = useState([
    { soal: "Bangun ruang manakah yang TIDAK memiliki titik sudut?", opsi: ["Balok", "Limas", "Kerucut", "Tabung"], jawaban: "Tabung" },
    { soal: "Volume balok p=10, l=5, t=4 adalah...", opsi: ["200 cm³", "100 cm³", "50 cm³", "400 cm³"], jawaban: "200 cm³" },
    { soal: "Berapa banyak jumlah sisi pada bangun Kubus?", opsi: ["4", "6", "8", "12"], jawaban: "6" }
  ]);
  // -------------------------------------------------------

  const handleLoginSukses = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setHalamanAktif(role === 'guru' ? 'dashboard' : 'home'); 
  };

  const pindahHalaman = (halaman) => {
    setHalamanAktif(halaman);
    setIsMenuOpen(false); 
  };

  if (!isLoggedIn) return <Login onLoginSukses={handleLoginSukses} />;

  const renderHalaman = () => {
    // Jika Guru, berikan akses ke Dashboard beserta fungsi untuk mengedit data
    if (userRole === 'guru') {
      return (
        <DashboardGuru 
          linkVidio={linkVidio} setLinkVidio={setLinkVidio}
          soalKuis={soalKuis} setSoalKuis={setSoalKuis}
        />
      );
    }

    // Jika Murid, tampilkan halaman belajar
    switch (halamanAktif) {
      case 'home':
        return (
          <div className="home-container fade-in">
            <h2 className="judul-besar">Jelajahi Ruang 3D!</h2>
            <p>Selamat datang, Murid Hebat! Ayo mulai petualangan belajarmu.</p>
            <button className="btn-mulai" onClick={() => pindahHalaman('materi')}>Mulai Belajar 🚀</button>
          </div>
        );
      case 'materi': return <Materi />;
      case 'vidio': 
        return (
          <div className="vidio-container fade-in" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="judul-besar">Vidio Pembelajaran</h2>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '15px' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://www.youtube.com/embed/mSoKyLJehYM?si=s3o3nzOLmcrIJqka" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>
          </div>
        );
      case 'game': return <Game />;
      case 'kuis': return <Kuis dataSoal={soalKuis} />; /* Mengirim data soal ke Kuis */
      case 'profil': return <Profil />;
      default: return null;
    }
  };

  return (
    <div className="app-wrapper">
      <nav className="navbar-modern">
        <h1 className="logo" onClick={() => pindahHalaman(userRole === 'guru' ? 'dashboard' : 'home')}>BangunRuang<span className="dot">.</span>8</h1>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? '✖' : '☰'}</div>
        <ul className={`menu-modern ${isMenuOpen ? 'open' : ''}`}>
          {userRole === 'guru' ? (
            <li className="active" onClick={() => setIsMenuOpen(false)}>Admin Panel</li>
          ) : (
            <>
              <li className={halamanAktif === 'home' ? 'active' : ''} onClick={() => pindahHalaman('home')}>Home</li>
              <li className={halamanAktif === 'materi' ? 'active' : ''} onClick={() => pindahHalaman('materi')}>Materi</li>
              <li className={halamanAktif === 'vidio' ? 'active' : ''} onClick={() => pindahHalaman('vidio')}>Vidio</li>
              <li className={halamanAktif === 'game' ? 'active' : ''} onClick={() => pindahHalaman('game')}>Game</li>
              <li className={halamanAktif === 'kuis' ? 'active' : ''} onClick={() => pindahHalaman('kuis')} style={{color: '#FFD54F'}}>Kuis</li>
              <li className={halamanAktif === 'profil' ? 'active' : ''} onClick={() => pindahHalaman('profil')}>Profil</li>
            </>
          )}
          <li className="btn-logout" onClick={() => {setIsLoggedIn(false); setUserRole(''); setIsMenuOpen(false);}}>Keluar</li>
        </ul>
      </nav>
      <main className="main-content">{renderHalaman()}</main>
    </div>
  );
}
export default App;