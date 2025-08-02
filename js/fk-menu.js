class FKMenu {
  constructor() {
    // Le menu lui même
    this.menu = document.getElementById("menu");
    // Le bouton qui va le déclancher
    this.btn = document.getElementById("toggleMenubtn");

    // Listener sur le bouton
    this.addListenerBtn();
    // Listener sur le menu pour la fermeture
    this.addEventListenerMe();
    // commutateur informatif
    this.open = false;
  }
  addListenerBtn() {
    // Cette fonction ajoute le listener "click" sur le bouton pour ouvrir/fermer le menu
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toogle();
    });
  }
  addEventListenerMe() {
    // Cette fonction ajoute le listener "click" sur le menu pour le fermer.

    this.menu.addEventListener("click", (e) => {
      e.preventDefault();
      this.toogle();
    });
  }
  toogle() {
    // Ouvre/ferme le menu et pivote le bouton
    this.menu.classList.toggle("fk-open");
    this.btn.classList.toggle("pivote");

    this.open = !this.open;
  }
}

// Instancie le menu
const MENU = new FKMenu();
