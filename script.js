const API_URL = "https://script.google.com/macros/s/AKfycbyfslN8qngEAgiulOP-XxSFi3bbZsYsYzLP82Kl831ahVhKTdgm1MFK_lirdzfXMjtb/exec";

function kirim() {
  const data = {
    nama: document.getElementById("nama").value,
    wa: document.getElementById("wa").value,
    ayam: document.getElementById("ayam").value,
    bebek: document.getElementById("bebek").value
  };

  if (!data.nama || !data.wa) {
    alert("Nama dan WA wajib diisi");
    return;
  }

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    document.getElementById("status").innerText = "Pesanan berhasil dikirim";
  })
  .catch(err => {
    document.getElementById("status").innerText = "Gagal mengirim";
  });
}