let myImage= document.querySelector('img');
 //on a utilisé une reference vers l'élément img grace à la variable myImage
myImage.addEventListener ('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mysrc === "images/firefox-icon.png") {
        myImage.setAttribute('src', "images/firefox21.png");
    }
    else {
        myImage.setAttribute('src', "images/firefox-icon.png");
    }
}); //on recupère l'attribut src de l'image et on le compare au chemin de la seconde image
let mybutton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);//on stocke la valeur recupérée  par la fonction prompt() en appelant une api localstorage
    myHeading.textContent = "Mozilla est cool," + myName;
}/*Cette fonction utilise la fonction prompt() qui affiche une boite de dialogue, uun peu comme alert()
sauf qu'elle permmet à l'utilisateur de saisir les données */
if (!localStorage.getItem('nom')) {
    setUserName();//si le localstorage est vide on appelle la fonction
}
else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = "Moziilla est cool,"   + storedName; 
}
mybutton.addEventListener('click', function() {
    setUserName();
});
