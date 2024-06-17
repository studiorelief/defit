import { CountUp } from 'countup.js';

export function updateHomeHeroItem(): void {
  // Function to format numbers with commas
  function numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // Obtaining all elements with the class name
  const homeHeroItemDataList = document.querySelectorAll<HTMLElement>('.home-hero_item-data-cms');

  // Iterating through each element
  homeHeroItemDataList.forEach((homeHeroItemData) => {
    // Extraction of the number
    const numberString = homeHeroItemData.innerText.trim();

    // Conversion of the number to numeric format
    const number = parseFloat(numberString.replace(',', ''));

    // Creating the countup with countup.js for each element
    const countUpElement = new CountUp(homeHeroItemData, number, {
      duration: 4,
      formattingFn: numberWithCommas,
    });

    // Starting the countup for each element
    countUpElement.start();
  });
}
