import React, { useState, useEffect } from 'react';

const daftarKartu = [
  { type: 'kubus', content: 'Kubus' }, { type: 'kubus', content: '📦' },
  { type: 'balok', content: 'Balok' }, { type: 'balok', content: '🧱' },
  { type: 'tabung', content: 'Tabung' }, { type: 'tabung', content: '🛢️' },
  { type: 'kerucut', content: 'Kerucut' }, { type: 'kerucut', content: '🍦' },
  { type: 'bola', content: 'Bola' }, { type: 'bola', content: '⚽' },
  { type: 'limas', content: 'Limas' }, { type: 'limas', content: '⛺' }
];

const Game = ({ updateProgress }) => {
  const [kartu, setKartu] = useState([]);
  const [kartuTerbuka, setKartuTerbuka] = useState([]);
  const [kartuCocok, setKartuCocok] = useState([]);
  const [langkah, setLangkah] = useState(0);

  const acakKartu = () => {
    setKartu([...daftarKartu].sort(() => Math.random() - 0.5).map((item, index) => ({ ...item, id: index })));
    setKartuTerbuka([]); setKartuCocok([]); setLangkah(0);
  };
  useEffect(() => { acakKartu(); }, []);

  const isMenang = kartuCocok.length > 0 && kartuCocok.length === daftarKartu.length / 2;
  useEffect(() => { if (isMenang && updateProgress) updateProgress('mainGame', 'Selesai'); }, [isMenang, updateProgress]);

  const handleKlikKartu = (index) => {
    if (kartuTerbuka.length === 2 || kartuTerbuka.includes(index) || kartuCocok.includes(kartu[index].type)) return;
    const kartuBaru = [...kartuTerbuka, index];
    setKartuTerbuka(kartuBaru);
    if (kartuBaru.length === 2) {
      setLangkah(langkah + 1);
      if (kartu[kartuBaru[0]].type === kartu[kartuBaru[1]].type) setKartuCocok([...kartuCocok, kartu[kartuBaru[0]].type]);
      setTimeout(() => setKartuTerbuka([]), 1000);
    }
  };

  return (
    <div className="game-container fade-in">
      <h2 style={{color: 'white', marginBottom: '20px'}}>Game Ingatan 🎮</h2>
      {isMenang ? (
        <div className="hasil-game"><p>Selesai dalam {langkah} langkah!</p><button className="btn-hitung" onClick={acakKartu}>Main Lagi</button></div>
      ) : (
        <div className="memory-grid">
          {kartu.map((item, index) => (
            <div key={item.id} className={`memory-card ${kartuTerbuka.includes(index) || kartuCocok.includes(item.type) ? 'flipped' : ''}`} onClick={() => handleKlikKartu(index)}>
              <div className="memory-card-inner"><div className="memory-card-front"><span>❓</span></div><div className="memory-card-back"><span>{item.content}</span></div></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Game;