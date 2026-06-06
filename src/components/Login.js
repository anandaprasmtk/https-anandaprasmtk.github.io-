import React, { useState } from 'react';

const Login = ({ onLoginSukses }) => {
  const [role, setRole] = useState('murid');
  const [nama, setNama] = useState(''); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleMasuk = (e) => {
    e.preventDefault();
    if (role === 'murid') {
      if (nama.trim() === '') return alert("Jangan lupa isi namamu ya!");
      if (password === 'smp8hebat') onLoginSukses('murid', nama);
      else setError(true);
    } else if (role === 'guru') {
      if (password === 'guruhebat') onLoginSukses('guru', 'Guru');
      else setError(true);
    }
  };

  return (
    <div className="login-container fade-in">
      <div className="login-box">
        <h2>🔒 Portal Keamanan</h2>
        <p>Silakan pilih peran dan masukkan data diri.</p>
        
        <div className="role-selector">
          <button className={`btn-role ${role === 'murid' ? 'active' : ''}`} onClick={() => {setRole('murid'); setError(false); setPassword(''); setNama('');}}>👦 Murid</button>
          <button className={`btn-role ${role === 'guru' ? 'active' : ''}`} onClick={() => {setRole('guru'); setError(false); setPassword('');}}>👩‍🏫 Guru</button>
        </div>

        <form onSubmit={handleMasuk}>
          {role === 'murid' && (
            <input type="text" placeholder="Masukkan Nama Lengkapmu..." value={nama} onChange={(e) => setNama(e.target.value)} />
          )}
          <div className="password-wrapper">
            <input type={showPassword ? "text" : "password"} placeholder={`Sandi ${role === 'murid' ? 'Murid' : 'Guru'}...`} value={password} onChange={(e) => { setPassword(e.target.value); setError(false); }} />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>{showPassword ? '👁️' : '👁️‍🗨️'}</span>
          </div>
          {error && <p className="pesan-error" style={{color: 'red', fontSize: '14px', margin: 0}}>❌ Kata sandi salah!</p>}
          <button type="submit" className="btn-login">Masuk sebagai {role === 'murid' ? 'Murid' : 'Guru'}</button>
        </form>
        <div className="login-hint"><p style={{fontSize: '12px', marginTop: '15px', color: '#888'}}><em>Sandi Murid: <strong>smp8hebat</strong> | Guru: <strong>guruhebat</strong></em></p></div>
      </div>
    </div>
  );
};
export default Login;