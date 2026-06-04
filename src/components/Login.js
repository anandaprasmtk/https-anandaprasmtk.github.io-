// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLoginSukses }) => {
  const [role, setRole] = useState('murid'); // Default pilihan adalah murid
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleMasuk = (e) => {
    e.preventDefault();
    
    // Cek password berdasarkan role yang dipilih
    if (role === 'murid' && password === 'smp8hebat') {
      onLoginSukses('murid');
    } else if (role === 'guru' && password === 'guruhebat') {
      onLoginSukses('guru');
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container fade-in">
      <div className="login-box">
        <h2>🔒 Portal Keamanan</h2>
        <p>Silakan pilih peran dan masukkan kata sandi.</p>
        
        {/* Tombol Pilihan Role */}
        <div className="role-selector">
          <button 
            className={`btn-role ${role === 'murid' ? 'active' : ''}`} 
            onClick={() => {setRole('murid'); setError(false); setPassword('');}}
          >
            👦 Murid
          </button>
          <button 
            className={`btn-role ${role === 'guru' ? 'active' : ''}`} 
            onClick={() => {setRole('guru'); setError(false); setPassword('');}}
          >
            👩‍🏫 Guru
          </button>
        </div>

        <form onSubmit={handleMasuk}>
          <input 
            type="password" 
            placeholder={`Sandi ${role === 'murid' ? 'Murid' : 'Guru'}...`} 
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
          />
          {error && <p className="pesan-error">❌ Kata sandi salah!</p>}
          <button type="submit" className="btn-login">Masuk sebagai {role === 'murid' ? 'Murid' : 'Guru'}</button>
        </form>

        <div className="login-hint">
          <p><em>Petunjuk Murid: <strong>smp8hebat</strong> | Guru: <strong>guruhebat</strong></em></p>
        </div>
      </div>
    </div>
  );
};

export default Login;