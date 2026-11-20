/**
 * Skrip inline yang berjalan sebelum halaman dicat: memasang class `js` (untuk animasi scroll)
 * dan class `dark` sesuai pilihan tersimpan atau preferensi sistem, sehingga tidak ada kilatan tema.
 */
export const themeInitScript = `(function(){try{var d=document.documentElement;d.classList.add("js");var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches)){d.classList.add("dark");}}catch(e){}})();`;
