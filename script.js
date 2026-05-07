// Récupération des éléments HTML5
const scrollIndicator = document.querySelector("#scroll__indicator");
const email = document.querySelector(".email__input");
const btn = document.querySelector(".submit__btn");
const form = document.querySelector("form");
const copyrightYear = document.querySelector(".copyright__year");

// Déclaration de la fonction handleScrollIndicator qui va permettre de gérer la progression de la barre de scroll
const handleScrollIndicator = () => {
  // scrollHeight est une mesure de la hauteur du contenu d'un élément qui inclut le contenu débordant et non visible à l'écran. La valeur scrollHeight est égale à la hauteur minimum dont l'élément aurait besoin pour que le contenu rentre dans le viewpoint sans utiliser de barre de défilement.

  // window.innerHeight récupère la hauteur (en pixels) de la partie visible de la fenêtre de navigation en incluant, si elle est affichée, la barre de défilement horizontale.
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  // console.log(maxHeight);

  // window.scrollY retourne le nombre de pixels la page actuellement défilés verticalement.
  const widthPercentage = (window.scrollY / maxHeight) * 100;
  // console.log(widthPercentage);

  scrollIndicator.style.width = `${widthPercentage}%`;
  // console.log(scrollIndicator);
};

// Ecoute de l'événement "scroll" sur la fenêtre et appel de la fonction handleScrollIndicator
window.addEventListener("scroll", handleScrollIndicator);

// Regex
const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

/**
 * Déclaration de la fonction emailValidation pour la validation du champ nom
 *  @param {String} email
 */
const emailValidation = (email) => {
  // Ecoute de l'événement "input" sur l'input email
  email.addEventListener("input", (e) => {
    e.preventDefault();
    if (regexEmail.test(email.value) === false) {
      document.querySelector(".error__message").textContent =
        "Check your email please";
      email.style.borderColor = "#ff0000";
      return false;
    } else {
      document.querySelector(".error__message").textContent = " ";
      email.style.borderColor = "#00ff0d";
      return true;
    }
  });
};
// Appel de la fonction emailValidation
emailValidation(email);

// Déclaration de la fonction submit gérant la soumission du formulaire
const submit = () => {
  // Ecoute de l'événement "click" sur le bouton
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (regexEmail.test(email.value) === false) {
      alert("Check your email please!");
      return;
    } else {
      const contact = {
        email: email.value,
      };
      console.log(contact);
      alert("Inscription confirmée!");
      // reset formulaire
      form.reset();
      // Rechargement de la page
      window.location.reload();
    }
  });
};
// Appel de la fonction submit()
submit();

// Récupération de la date actuelle et de l'année
const today = new Date();
const currentYear = today.getFullYear();

// Affichage dynamique de l'année
copyrightYear.textContent = `${currentYear}`;
