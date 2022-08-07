const MULTIPLIER_RATING = 20;
const FIRST_LETTER = 0;
const START_INDEX = 1;

export function getCountStars(rating: number): string {
  return `${Math.round(rating) * MULTIPLIER_RATING}%`;
}

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(FIRST_LETTER).toUpperCase() + text.slice(START_INDEX);
}
