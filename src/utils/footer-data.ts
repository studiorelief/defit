function roundNumbersInClass() {
  // Sélectionner tous les éléments avec la classe .footer_data-cms
  const footerData = document.querySelectorAll('.footer_data-cms');

  // Boucle à travers tous les éléments sélectionnés
  for (let i = 0; i < footerData.length; i++) {
    // Obtenir le nombre à partir du texte de l'élément
    const num = parseFloat(footerData[i].textContent);

    // Si le nombre n'est pas un nombre, passe à l'itération suivante
    if (isNaN(num)) continue;

    // Diviser le nombre par mille et arrondir à l'unité la plus proche, puis changer le texte de l'élément
    footerData[i].textContent = Math.round(num / 1000);
  }
}

// Appel de la fonction
export { roundNumbersInClass };
