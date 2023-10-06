// Senkron işlem (Call Stack'te çalışır)
function biletKontrol() {
  console.log("Bilet kontrol ediliyor...");
  for (let i = 0; i < 1000000000; i++) {} // 1 saniye süren işlem
  console.log("Bilet kontrol tamamlandı.");
}

// Asenkron işlem (Event Loop tarafından yönetilir)
async function biletSat() {
  return new Promise((resolve) => {
    console.log("Bilet satışı yapılıyor...");
    setTimeout(() => {
      console.log("Bilet satıldı.");
      resolve();
    }, 2000); // 2 saniye süren işlem
  });
}

// Asenkron işlem (Event Loop tarafından yönetilir)
async function mısırAl() {
  return new Promise((resolve) => {
    console.log("Mısır alınıyor...");
    setTimeout(() => {
      console.log("Mısır alındı.");
      resolve();
    }, 1000); // 1 saniye süren işlem
  });
}

// Ana fonksiyon
async function sinemaZiyareti() {
  console.log("Sinema ziyareti başladı.");
  
  // Senkron işlem
  biletKontrol();

  // Asenkron işlemler
  await biletSat();
  await mısırAl();

  console.log("Sinema ziyareti tamamlandı.");
}

sinemaZiyareti();
