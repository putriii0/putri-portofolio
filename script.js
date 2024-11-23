AOS.init({
  duration: 1200, // Durasi animasi dalam milidetik
  once: true,     // Animasi hanya berjalan sekali
});



// Mendapatkan elemen yang digunakan untuk toggle theme
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const blueThemeBtn = document.getElementById("blue-theme");
const greenThemeBtn = document.getElementById("green-theme");
const yellowThemeBtn = document.getElementById("yellow-theme");

// Menambahkan event listener pada tombol theme-toggle untuk mode gelap/terang
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.removeItem("theme");
  }
});

// Menambahkan event listener pada tombol untuk mengganti tema ke blue
blueThemeBtn.addEventListener("click", () => {
  body.classList.remove("light-mode", "green-theme", "yellow-theme");
  body.classList.add("blue-theme");
  localStorage.setItem("theme", "blue");
});

// Menambahkan event listener pada tombol untuk mengganti tema ke green
greenThemeBtn.addEventListener("click", () => {
  body.classList.remove("light-mode", "blue-theme", "yellow-theme");
  body.classList.add("green-theme");
  localStorage.setItem("theme", "green");
});

// Menambahkan event listener pada tombol untuk mengganti tema ke yellow
yellowThemeBtn.addEventListener("click", () => {
  body.classList.remove("light-mode", "blue-theme", "green-theme");
  body.classList.add("yellow-theme");
  localStorage.setItem("theme", "yellow");
});

// Memuat tema yang disimpan dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme + "-theme");
    if (savedTheme === "light") {
      body.classList.add("light-mode");
    }
  }
});
