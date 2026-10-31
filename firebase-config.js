// Konfigurasi proyek Firebase kasboard-ck05.
// Kunci web Firebase memang bersifat publik. Keamanan data diatur oleh firestore.rules.
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAUoAAOYD8-yF3vQatM0g4-yT3xzy1jzlQ",
  authDomain: "kasboard-ck05.firebaseapp.com",
  projectId: "kasboard-ck05",
  storageBucket: "kasboard-ck05.firebasestorage.app",
  messagingSenderId: "104673098557",
  appId: "1:104673098557:web:b72bcbb911374c98c7e354"
};

// Nomor urut anggota yang menjadi bendahara (boleh mencatat dan mengubah data).
// Nomor 5 = ARIF HIDAYAT. Jika diganti, ubah juga daftar email di firestore.rules.
export const ADMINS = [5];
