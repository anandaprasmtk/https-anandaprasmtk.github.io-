import React, { useState } from 'react';

const GameTambahan = () => {
  const [activeGame, setActiveGame] = useState(null);

  // DAFTAR GAME EKSTRA
  const games = [
    { 
      id: 1, 
      title: "Ruang Virtual", 
      url: "https://quiz.zep.us/id/play/pnAAag", // Ganti dengan link spesifik ruangan Zep milikmu
      icon: "🪐", 
      desc: "Jelajahi ruang kelas virtual 3D interaktif bersama teman-teman!",
      // 👇 TAMBAHKAN KODE INI: Menandakan game ini harus buka di tab baru
      bukaDiTabBaru: true 
    },
    { 
      id: 2, 
      title: "Game Quiz", 
      url: "https://html5games.com/Game/2048/2048", 
      icon: "🕹️", 
      desc: "Mainkan game asah otak seru langsung dari website ini.",
      bukaDiTabBaru: false // Game biasa tetap di dalam web
    }
  ];

  const handleMulaiGame = (game) => {
    if (game.bukaDiTabBaru) {
      // Jika game memblokir iframe (seperti Zep), buka di tab baru secara aman
      window.open(game.url, '_blank', 'noopener,noreferrer');
    } else {
      // Jika aman, buka di dalam website kita
      setActiveGame(game);
    }
  };

  return (
    <div className="game-tambahan-container fade-in" style={{width: '100%', maxWidth: '1000px', margin: '0 auto'}}>
      <h2 className="judul-besar">Arcade Tambahan 🎮</h2>
      <p style={{color: 'white', marginBottom: '20px'}}>Pilih dan mainkan aktivitas seru di bawah ini!</p>
      
      {!activeGame ? (
        <div className="game-grid">
          {games.map((g) => (
            <div key={g.id} className="game-card" onClick={() => handleMulaiGame(g)}>
              <div className="profil-img-placeholder" style={{margin: '0 auto 15px', background: '#FFF9C4', borderColor: '#FFD54F'}}>{g.icon}</div>
              <h3 style={{color: '#764ba2', marginBottom: '10px'}}>{g.title}</h3>
              <p style={{color: '#555', marginBottom: '15px'}}>{g.desc}</p>
              
              {/* Teks tombol berubah otomatis tergantung jenis gamenya */}
              <button className="btn-hitung" style={{marginTop: 'auto', background: g.bukaDiTabBaru ? '#FF9800' : '#667eea'}}>
                {g.bukaDiTabBaru ? '🚀 Buka Zep (Tab Baru)' : 'Mainkan Sekarang'}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="iframe-container fade-in">
          <div className="iframe-header">
            <h3 style={{color: '#FFD54F'}}>Sedang Bermain: {activeGame.title}</h3>
            <button className="btn-tutup-ebook" onClick={() => setActiveGame(null)}>✖ Kembali ke Menu</button>
          </div>
          <iframe src={activeGame.url} title={activeGame.title} className="iframe-game" allowFullScreen></iframe>
        </div>
      )}
    </div>
  );
};

export default GameTambahan;