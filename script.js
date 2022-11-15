const aceito = document.querySelector(".aceito");
const teste = document.querySelector(".teste");
const realizar = document.querySelector(".realizar");

aceito.onclick = () => {
  aceito.style.display = "none";
  teste.style.display = "block";
};

realizar.onclick = () => {
  window.location.href = "/forms.html";
};
