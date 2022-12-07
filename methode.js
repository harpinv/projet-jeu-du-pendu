let mots = ["chanter", "vivre", "magazin", "forme", "oxygène", "arbre", "musique", "table", "meuble", "histoire", "tomate", "pomme", "soupe", "vache", "garage", "animaux", "chien", "chat", "danse", "poubelle", "monstre", "ordinateur", "carton", "chaine", "puzzle", "radiateur", "chaussure", "manteau", "couverture", 'télévision'];
let alea = Math.floor(Math.random() * mots.length);
let devine = mots[alea];
let essaye = document.getElementById('essayer');
let para = document.getElementById('para');
let crono = 0;

essaye.addEventListener('click', function () {
    if(crono < 6) {
        let valeur = document.getElementById('valeur').value;
        if(valeur.length === 1) {
            let debut = devine.indexOf(valeur);
            let fin = devine.lastIndexOf(valeur);
            if(debut === -1) {
                para.innerHTML += "La lettre " + valeur + " n'est pas présente dans le mot<br>";
                crono = crono + 1;
            } else if(debut === fin) {
                para.innerHTML += "La lettre " + valeur + " est présente en position " + debut + " du mot<br>";
                crono = crono + 1;
            } else {
                para.innerHTML += "La lettre " + valeur + " est présente en position " + debut + " et " + fin + " du mot<br>";
                crono = crono + 1;
            }
        } else if(valeur.length > 1) {
            if(valeur === devine) {
                para.innerHTML = "Le mot est " + devine + ", vous avez gagné<br>";
                alea = Math.floor(Math.random() * mots.length);
                devine = mots[alea];
                crono = 0;
            } else {
                para.innerHTML += "Le mot choisi est incorrect<br>";
                crono = crono + 1;
            }
        } else {
            para.innerHTML = "";
        }
    } else {
        para.innerHTML = "Le mot est " + devine + ", vous avez perdu<br>";
        alea = Math.floor(Math.random() * mots.length);
        devine = mots[alea];
        crono = 0;
    }
})