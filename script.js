// Récupération des éléments HTML5
const scrollIndicator = document.querySelector("#scroll__indicator");

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
