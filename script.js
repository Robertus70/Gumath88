document.getElementById("darkModeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

document.querySelector("form").addEventListener("submit", function(e) {
  alert("Terima kasih! Pesan Anda telah terkirim.");
});
