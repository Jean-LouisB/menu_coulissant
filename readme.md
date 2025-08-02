# Menu coulissant
## Introduction

Cet utilitaire permet de mettre en place un menu coulissant (de gauche à droite) simplifié.

Le style initial est brut et rudimentaire, et demande à être personalisé.

## Installation
Le bouton à intégrer dans la page:

    <img id="toggleMenubtn" src="/menu-svgrepo-com.svg" alt="" width="25px" height="25px">

L'élément contenant le menu :

    <div id="menu" class="fk-menu fk-menu-custom-style">

Ici c'est un div, mais peut tout aussi bien être un aside, nav ...

Mettre les fichiers css et js dans le projet puis les importer:

    <script src="./js/fk-menu.js" defer></script>
    <link rel="stylesheet" href="./css/fk-menu.css">

Personnaliser le css du menu dans la class <code>.fk-menu-custom-style</code> dans le fichier css/fk-menu.css.
