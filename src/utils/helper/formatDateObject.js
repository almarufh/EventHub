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