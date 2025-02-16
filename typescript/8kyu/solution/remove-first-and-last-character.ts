// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

export function removeChar(str: string): string {
  return str.slice(1, -1);
}
