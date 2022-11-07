/*Creation d'une fonction pour un formulaire de contact */
function hjp(){
	let kk = document.getElementById("couleurs").value;
	let rr = document.getElementById("model").value;
	let cc = document.getElementById("nom").value;
	let aa = document.getElementById("pre").value;
	let jj = document.getElementById("commentaire").value;
	let pp = document.getElementById("mail").value;
	document.write ("Nous avons bien reçu votre message Mr ou Mme " + " "+ cc + " " + aa + "<br/> et nous allons vous répondre le plus vite sur l'informations <br/> de la voiture " + rr + " et la couleur " + kk + ".");
	var img = document.createElement("img");
}

