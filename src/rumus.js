// src/rumus.js
export const hitungKubus = (sisi) => {
  return { volume: sisi ** 3, luasPermukaan: 6 * (sisi ** 2) };
};

export const hitungBalok = (p, l, t) => {
  return { volume: p * l * t, luasPermukaan: 2 * ((p * l) + (p * t) + (l * t)) };
};

export const hitungTabung = (r, t) => {
  const pi = 22 / 7;
  return { 
    volume: (pi * (r ** 2) * t).toFixed(2), 
    luasPermukaan: (2 * pi * r * (Number(r) + Number(t))).toFixed(2) 
  };
};

export const hitungKerucut = (r, t) => {
  const pi = 22 / 7;
  const s = Math.sqrt((r ** 2) + (t ** 2)); // Mencari garis pelukis (s)
  return { 
    volume: ((1 / 3) * pi * (r ** 2) * t).toFixed(2), 
    luasPermukaan: (pi * r * (Number(r) + s)).toFixed(2) 
  };
};

export const hitungBola = (r) => {
  const pi = 22 / 7;
  return { 
    volume: ((4 / 3) * pi * (r ** 3)).toFixed(2), 
    luasPermukaan: (4 * pi * (r ** 2)).toFixed(2) 
  };
};

export const hitungLimasSegiEmpat = (sisiAlas, tinggi) => {
  const luasAlas = sisiAlas ** 2;
  return { 
    volume: ((1 / 3) * luasAlas * tinggi).toFixed(2), 
    luasPermukaan: "Membutuhkan tinggi sisi tegak" 
  };
};