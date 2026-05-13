function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".menu-btn");
  
    sidebar.classList.toggle("active");
    button.classList.toggle("active");
  }
  
  function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => sec.classList.remove("active"));

  const target = document.getElementById(id);
  target.classList.add("active");

  // reinicia a animação
  target.style.animation = "none";
  target.offsetHeight; // força o reset
  target.style.animation = "";

  document.getElementById("sidebar").classList.remove("active");
  document.querySelector(".menu-btn").classList.remove("active");
}