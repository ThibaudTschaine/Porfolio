function verifMDP(){
	var mdp1 = document.getElementById("mdp1");
	var mdp2 = document.getElementById("mdp2");
	var rep;
	if (mdp1 != mdp2){
		alert("Mauvais mot de passe.");
		alert("Retours vers la page d'accueil...");
	}
	else{
		alert("Bienvenue sur le site!");
	}
}