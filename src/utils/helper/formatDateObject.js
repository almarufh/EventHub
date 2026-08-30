function formatDateObject(timestamp) {
  const date = new Date(timestamp);
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  return {
    day: days[date.getDay()],
    month: months[date.getMonth()],
    years: date.getFullYear(),
    jam: String(date.getHours()).padStart(2, "0"),
    menit: String(date.getMinutes()).padStart(2, "0"),
  };
}

export default formatDateObject


// const timestamp = 1787742224923; // atau Number("1787742224923")
// const date = new Date(timestamp);

// const tahun = date.getFullYear();
// const bulan = date.getMonth() + 1; // getMonth() mulai dari 0 (0 = Januari, 11 = Desember)
// const tanggal = date.getDate();
// const hari = date.toLocaleDateString("id-ID", { weekday: "long" }); // Contoh: "Jumat"
// const jam = date.getHours();
// const menit = date.getMinutes();
// const detik = date.getSeconds();
// const milidetik = date.getMilliseconds();

// // Format langsung ke string lengkap bahasa Indonesia
// const formattedWIB = date.toLocaleString("id-ID", {
//   timeZone: "Asia/Jakarta",
//   dateStyle: "full",
//   timeStyle: "medium"
// });

// console.log(formattedWIB); 
// // Output: Jumat, 25 September 2026 18.03.44

// // Opsi A: Menggunakan String Tanggal (ISO Format)
// const dateFromString = new Date("2026-09-25T18:03:44.923+07:00");
// const timestampMs1 = dateFromString.getTime(); // Mengembalikan angka (number)
// const timestampStr1 = dateFromString.getTime().toString(); // "1787742224923"

// // Opsi B: Menggunakan Parameter Manual (Tahun, Bulan 0-index, Tanggal, Jam, Menit, Detik, Ms)
// // Catatan: Bulan 8 = September
// const dateFromParams = new Date(2026, 8, 25, 18, 3, 44, 923);
// const timestampMs2 = dateFromParams.getTime();

// // Opsi C: Mengambil waktu saat ini secara instan
// const currentTimestamp = Date.now().toString();