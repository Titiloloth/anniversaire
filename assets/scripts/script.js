let envoyer = document.getElementById("envoyer")

envoyer.addEventListener("click", function(){

let jourUtilisateur = document.getElementById("jour-anniversaire").value
let moisUtilisateur = document.getElementById("mois-anniversaire").value

let today = new Date()
let anniversaire = new Date(today.getFullYear(), moisUtilisateur -1, jourUtilisateur)
let difference = anniversaire - today
let joursrestants = Math.ceil(difference / (1000 * 60 * 60 * 24));

    let resultat = document.createElement("div")
    resultat.setAttribute("id", "resultat")
    document.querySelector("body").appendChild(resultat)
    resultat.textContent = "Il reste " + joursrestants + " jours avant votre anniversaire ! 🎉"
})

let reset = document.getElementById("reset")

reset.addEventListener("click", function(){

    location.reload()
      
    })
 


