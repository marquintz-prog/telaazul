function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".menu-btn");
  
    sidebar.classList.toggle("active");
    button.classList.toggle("active");
  }
  
  function showSection(id) {
    const sections = document.querySelectorAll("section");
  
    sections.forEach(sec => sec.classList.remove("active"));
  
    document.getElementById(id).classList.add("active");
  
    document.getElementById("sidebar").classList.remove("active");
    document.querySelector(".menu-btn").classList.remove("active");
  }