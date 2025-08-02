class FKMenu {
  constructor() {
    this.menu = document.getElementById("menu");
    this.btn = document.getElementById("toggleMenubtn");

    this.addListenerBtn();
    this.addEventListenerMe();
    this.open = false;
  }
  addListenerBtn() {
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.toogle();
    });
  }
  addEventListenerMe() {
    this.menu.addEventListener("click", (e) => {
      e.preventDefault();
      this.toogle();
    });
  }

  toogle() {
    this.menu.classList.toggle("fk-open");
    this.btn.classList.toggle("pivote");

    this.open = !this.open;
  }
}

const MENU = new FKMenu();
