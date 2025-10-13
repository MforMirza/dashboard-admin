document.addEventListener("DOMContentLoaded", () => {
  const menus = document.querySelectorAll(".menu");
  const pages = document.querySelectorAll(".page");

  menus.forEach((menu) => {
    menu.addEventListener("click", () => {
      // Hapus class aktif dari menu sebelumnya
      menus.forEach((m) => m.classList.remove("active"));
      menu.classList.add("active");

      // Sembunyikan semua halaman
      pages.forEach((page) => page.classList.remove("active"));

      // Tampilkan halaman yang sesuai
      const targetPage = menu.getAttribute("data-page");
      const selectedPage = document.getElementById(targetPage);

      if (selectedPage) {
        selectedPage.classList.add("active");
      }

      // Jika klik logout → arahkan keluar
      if (targetPage === "logout") {
        alert("Anda telah logout!");
        window.location.href = "login.html";
        // bisa diarahkan ke login.html nanti
      }
    });
  });
});