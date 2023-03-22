(function () {
	// fonction IFEE
	console.log("début du carrousel");

	let bouton__ouvrir = document.querySelector(".bouton__ouvrir");
	let elmCarrousel = document.querySelector(".carrousel");
	let elmBouton__x = document.querySelector(".bouton__x");
	//console.log(bouton__ouvrir.tagName);
	let elmGalerie = document.querySelector(".galerie");
	let elmGalerie__img = elmGalerie.querySelectorAll("img"); // images de la galerie
	let elmCarrousel__figure = document.querySelector(".carrousel__figure"); // conteneur des images
	let elmCarrousel__form = document.querySelector(".carrousel__form"); // conteneur de radio bouton
	console.log(elmGalerie__img.length);

	bouton__ouvrir.addEventListener("mousedown", function () {
		console.log("boite modale");
		elmCarrousel.classList.add("carrousel--ouvrir");
		if (elmCarrousel__form.length == 0) {
			ajouter_carrousel();
		}
		bouton__ouvrir.style.display = "none";
	});

	elmBouton__x.addEventListener("mousedown", function () {
		console.log("boite modale");
		elmCarrousel.classList.remove("carrousel--ouvrir");
		bouton__ouvrir.style.display = "block";
	});

	function ajouter_carrousel(params) {
		for (const elmImg of elmGalerie__img) {
			ajouter_img(elmImg); // ajoute l'image dans le carrousel
			ajouter_radio(); // ajoute des radio bouton dans carrousel__form
		}

		elmCarrousel__figure.children[0].classList.add(
			"carrousel__img--activer"
		);
	}

	function ajouter_img(elmImg) {
		let elmCarrousel__img = document.createElement("img");
		elmCarrousel__img.setAttribute("src", elmImg.getAttribute("src"));
		elmCarrousel__img.classList.add("carrousel__img");
		elmCarrousel__img.dataset.index = index;
		elmCarrousel__figure.appendChild(elmCarrousel__img);
	}

	let index = 0;
	let index__precedent = -1;

	function ajouter_radio() {
		let elmCarrousel__radio = document.createElement("input");
		elmCarrousel__radio.setAttribute("type", "radio");
		elmCarrousel__radio.setAttribute("name", "radCarrousel");
		elmCarrousel__radio.dataset.index = index;
		index++;
		elmCarrousel__form.appendChild(elmCarrousel__radio);
		elmCarrousel__radio.addEventListener("mousedown", function () {
			activer__image(this.dataset.index);
		});
	}

	function activer__image(index) {
		if (index__precedent != -1) {
			elmCarrousel__figure.children[index__precedent].classList.remove(
				"carrousel__img--activer"
			);
		}
		elmCarrousel__figure.children[index].classList.add(
			"carrousel__img--activer"
		);
		index__precedent = index;
	}

	function desactiver_image(index) {
		elmCarrousel__figure.children[index].classList.remove(
			"carrousel__img--activer"
		);
	}

	let bouton_suivant = document.querySelector(".bouton__suivant");
	let bouton_precedent = document.querySelector(".bouton__precedent");
	let index_image_actuelle = 0;

	bouton_suivant.addEventListener("click", function () {
		desactiver_image(index_image_actuelle);
		index_image_actuelle =
			(index_image_actuelle + 1) % elmCarrousel__figure.children.length;
		activer__image(index_image_actuelle);
		if (index_image_actuelle === elmCarrousel__figure.children.length - 1) {
			bouton_suivant.disabled = true;
		}
		if (index_image_actuelle > 0) {
			bouton_precedent.disabled = false;
		}
	});

	bouton_precedent.addEventListener("click", function () {
		desactiver_image(index_image_actuelle);
		index_image_actuelle =
			(index_image_actuelle - 1 + elmCarrousel__figure.children.length) %
			elmCarrousel__figure.children.length;
		activer__image(index_image_actuelle);
		if (index_image_actuelle === 0) {
			bouton_precedent.disabled = true;
		}
		if (index_image_actuelle < elmCarrousel__figure.children.length - 1) {
			bouton_suivant.disabled = false;
		}
	});

	bouton_precedent.disabled = true;
	if (elmCarrousel__figure.children.length === 1) {
		bouton_suivant.disabled = true;
	}
})();
