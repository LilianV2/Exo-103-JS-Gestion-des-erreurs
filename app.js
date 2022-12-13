let result = document.getElementById('ressult')

try {
    result.innerHTML = "Je suis un super texte sans erreurs"
}
catch (e) {
    alert("L'élément " + result + " n'existe pas !")
}