# Konexio_Bakery
Exercice - Bakery
Introduction
Boulanger de père en fils.fille, vous voulez aider votre père à moderniser sa boulangerie. Fort.e de vos quelques sites dans votre nouveau boulot, vous donnez un peu de renouveau à la gestion de catalogues et de la caisse enregistreuse de la boulangerie familiale.

Vous décidez de créer une application avec 3 tabs :

une pour ajouter de nouveaux produits
une pour visualiser les produits ajoutés
et une pour la caisse enregistreuse

Installation
Dans le dossier konexio/react tapez dans le terminal :

npx create-react-app react_bakery
cd react_bakery
npm i bootstrap
npm start

Dans le fichier src/App.js importer Bootstrap : import 'bootstrap/dist/css/bootstrap.min.css';

Etape 1 - Propager votre state à l’initialisation
Après avoir créé votre classe App et le minimum requis :

Créer les states suivants :

activeTab avec un string de la valeur add
items avec un array vide
Créer un render qui appelle les composants suivants :

Add
List
Pay
De manière temporaire : chacun de ces composants va retourner une simple div avec le titre respectif du composant. Ex: pour le composant Add, le render aura <div>add</div>

Dans le dossier components/core, créer le composant Button

Le composant utilisera les props children, isSelected et onClick
Dans le composant App, ajoutez les 3 boutons au render

Pour passer à l’étape suivante, assurez-vous que le bouton Add soit sélectionné et que la tab Add apparaisse.

Etape 2 - Créer des tabs
Lorsque je clique sur un bouton, faîtes remonter le clic à la méthode respective :

onClickTabAdd
onClickTabList
onClickTabPay
Dans chacune des méthodes, changer le state activeTab avec les valeurs respectives en string :

add
list
pay
Pour passer à l’étape suivante, assurez-vous que chaque bouton et tab apparaissent de manière synchronisée.

Etape 3 - Créer un formulaire d’entrée
Dans le fichier components/Add
Créer le state suivant :
input avec un string vide
price à 1
Créer un input
Créer un slider qui va de 1 à 10
Créer un bouton
Récupérer l’événement onChange de l’input et ajouter la valeur de de l’input dans le state correspondant
Récupérer la valeur du slider sur le onChange et ajouter la au state correspondant
Ajouter une méthode onSubmit qui sera déclenchée par le bouton et qui récuperera le price et l’input
Pour passer à l’étape suivante, afficher dans la console, les valeurs price et input. Une fois affiché dans la console, faîtes en sorte que les valeurs reviennent à leur valeur par défaut

Trucs et astuces
Sur l’événement onChange d’un input, le paramètre retourné est evt et pour récupérer la valeur de l’input vous devez utiliser : evt.target.value
Etape 4 - Remonter les données
Dans le composant App

Créer une méthode onAdd avec les paramètres price et input
Passer cette méthode dans le composant Add
Dans le composant components/Add

Utiliser cette fonction pour la réutiliser ensuite dans la méthode onSubmit de Add. Appelez la pour faire remonter les données et récupérer le prix et le nom de l’objet dans App
Dans le composant App

Ajouter un objet qui contient le prix et le nom du produit à l’array items dans la fonction onAdd
Pour passer à l’étape suivante, vérifiez que la console affiche vos items et garde en mémoire les précédents

Etape 5 - Afficher les données dans une liste
Dans le composant components/List

Créer une liste ul qui affiche tous les objets et prix
Trucs et astuces
Penser à utiliser le Array.map()
Etape 6 - Styliser
Utiliser les classes Bootstrap pour styliser votre page