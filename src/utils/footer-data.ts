export function roundNumbersInClass(): void {
  // Sélectionner tous les éléments avec la classe .footer_data-cms
  const footerData = document.querySelectorAll<HTMLElement>('.footer_data-cms');

  // Boucle à travers tous les éléments sélectionnés
  footerData.forEach((element) => {
    // Obtenir le nombre à partir du texte de l'élément
    const num = parseFloat(element.textContent || '');

    // Si le nombre n'est pas un nombre, passe à l'itération suivante
    if (isNaN(num)) return;

    // Diviser le nombre par mille et arrondir à l'unité la plus proche, puis changer le texte de l'élément
    element.textContent = Math.round(num / 1000).toString();
  });
}
